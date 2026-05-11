import { NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/lib/supabaseServer";
import { Resend } from "resend";
//import { Ratelimit } from "@upstash/ratelimit";
//import { Redis } from "@upstash/redis";
import sanitizeHtml from "sanitize-html";

// const ratelimit = new Ratelimit({
//   redis: Redis.fromEnv(),
//   limiter: Ratelimit.slidingWindow(5, "1 m"), // 5 requests per minute
// });
const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2).max(100),
  facilityType: z.string().min(2),
  frequency: z.string().min(2),
  phone: z.string().min(5).max(20),
  email: z.string().email(),
  message: z.string().max(1000).optional(),
});

export async function POST(req: Request) {
  try {
    //check rate limit
    //const ip = req.headers.get("x-forwarded-for") ?? "anonymous";

    // const { success } = await ratelimit.limit(ip);

    // if (!success) {
    //   return NextResponse.json(
    //     { error: "Too many requests. Try again later." },
    //     { status: 429 }
    //   );
    // }
    const body = await req.json();
    if (body.company) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }
    const result = schema.safeParse(body);

    if (!result.success) {
    return NextResponse.json(
    {
      success: false,
      error: "Invalid form data",
    },
    { status: 400 }
  );
    }

    const data = result.data;
    const cleanMessage = sanitizeHtml(data.message || "");
    const { error } = await supabase.from("contact_requests").insert([
      {
        name: data.name,
        facility_type: data.facilityType,
        frequency: data.frequency,
        phone: data.phone,
        email: data.email,
        message: cleanMessage,
      },
    ]);

    const emailResponse = await sendConsultationEmail(data);

    if (error || !emailResponse.success) {
      return NextResponse.json(
        { error: "Unable to send request." },
        { status: 500 }
      );
    }

   return NextResponse.json({
  success: true,
  message: "Consultation request submitted",
});

  } catch (error) {
    console.error("Contact form error:", {
    error,
    timestamp: new Date().toISOString(),
  });
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

async function sendConsultationEmail(data: z.infer<typeof schema>) {
  try {

    const message = sanitizeHtml(data.message || "");

    const { data: response, error } = await resend.emails.send({
      from: "Safaa Albea Website <system@safaaalbea.com>",
      to: "info@safaaalbea.com",
      replyTo: data.email,
      subject: `New Consultation Request`,
      html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #008080;">New Consultation Request</h2>
        <hr />
        <p><b>Client Name:</b> ${data.name}</p>
        <p><b>Facility Type:</b> ${data.facilityType}</p>
        <p><b>Service Frequency:</b> ${data.frequency}</p>
        <p><b>Contact Phone:</b> ${data.phone}</p>
        <p><b>Contact Email:</b> ${data.email}</p>
        <p><b>Message:</b></p>
        <div style="background:#f4f4f4;padding:15px;border-radius:5px;">
          ${message}
        </div>
      </div>
      `,
    });

    if (error) {
      return { success: false, error };
    }
    await resend.emails.send({
      from: "Safaa Albea <info@safaaalbea.com>",
      to: data.email,
      subject: "We received your consultation request",
      html: `<p>Hi ${data.name}, we received your request and will contact you soon.</p>`
    });
    return { success: true, id: response?.id };

  } catch (err) {
    return { success: false, error: err };
  }
}