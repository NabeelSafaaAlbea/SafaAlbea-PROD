'use client'; 

import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100),
  facilityType: z.string().min(1, "Please select a facility type"),
  frequency: z.string().min(1, "Please select a service frequency"),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message cannot exceed 1000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const facilityTypes = ["Hospital", "Medical Center", "Pharmacy", "Lab", "Dental Clinic", "Blood Bank", "Research Center", "Other"];
const frequencies = ["Daily", "Weekly", "One-time"];

const ContactFormSection = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    facilityType: "",
    frequency: "",
    phone: "",
    email: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
 const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const result = contactSchema.safeParse(form);

  if (!result.success) {
    const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
    const formattedErrors = result.error.flatten().fieldErrors;

    for (const key in formattedErrors) {
      const field = key as keyof ContactForm;
      fieldErrors[field] = formattedErrors[field]?.[0];
    }

    setErrors(fieldErrors);

    toast({
      title: "Form Error",
      description: "Please correct the highlighted fields.",
      variant: "destructive",
    });

    setIsSubmitting(false);
    return;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    });

    const data = await response.json();

    if (!response.ok) {
      toast({
        title: "Submission Failed",
        description: data.error || "Something went wrong.",
        variant: "destructive",
      });
      return;
    }

    // success
    setErrors({});
    setShowModal(true);

    // toast({
    //   title: "Request Sent",
    //   description: "Your consultation request was submitted successfully.",
    // });

  } catch (error) {
    console.error("Submission error:", error);

    toast({
      title: "Network Error",
      description: "Unable to submit the form. Please try again.",
      variant: "destructive",
    });

  } finally {
    setIsSubmitting(false);
  }
};
const resetForm = () => {
  setForm({
    name: "",
    facilityType: "",
    frequency: "",
    phone: "",
    email: "",
    message: "",
  });
  setShowModal(false);
};
  // if (submitted) {
  //   return (
  //     <section id="quote" className="py-24" style={{ background: "var(--section-gradient)" }}>
  //       <div className="container mx-auto px-6 text-center">
  //         <div className="max-w-lg mx-auto bg-card rounded-xl p-12 border border-border shadow-lg">
  //           <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
  //             <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
  //           </div>
  //           <h3 className="text-2xl font-bold font-heading text-foreground mb-3">Thank You!</h3>
  //           <p className="text-muted-foreground font-body">Your consultation request has been received. Our team will contact you shortly.</p>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  // Tailwind classes for easy maintenance
 
  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors";
  const labelClass = "block text-sm font-heading font-semibold text-foreground mb-1.5";
  const errorClass = "text-destructive text-xs mt-1 font-body";

  return (
     <section id="quote" className="py-24" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-foreground mb-4">
            Request a Consultation
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto text-lg">
            Tell us about your facility and we'll design a waste management plan tailored to your needs.
          </p>
        </div>

       <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-card rounded-xl p-8 md:p-10 border border-border shadow-lg space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={labelClass}>Full Name / Facility Name</label>
              <input type="text" name="company" className="hidden" />
              <input id="name" name="name" value={form.name} onChange={handleChange} disabled={isSubmitting} placeholder="e.g. Al Noor Hospital" className={inputClass} />
              {errors.name && <p className={errorClass}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="facilityType" className={labelClass}>Type of Facility</label>
              <select id="facilityType" name="facilityType" value={form.facilityType} onChange={handleChange} disabled={isSubmitting} className={inputClass}>
                <option value="">Select facility type</option>
                {facilityTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.facilityType && <p className={errorClass}>{errors.facilityType}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="frequency" className={labelClass}>Service Frequency</label>
              <select id="frequency" name="frequency" value={form.frequency} onChange={handleChange} disabled={isSubmitting} className={inputClass}>
                <option value="">Select frequency</option>
                {frequencies.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
              {errors.frequency && <p className={errorClass}>{errors.frequency}</p>}
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} disabled={isSubmitting} placeholder="+971 XX XXX XXXX" className={inputClass} />
              {errors.phone && <p className={errorClass}>{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>Email Address</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} disabled={isSubmitting} placeholder="info@yourfacility.ae" className={inputClass} />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>Message / Special Requirements</label>
            <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} disabled={isSubmitting} placeholder="Tell us about your waste management needs..." className={inputClass} />
            {errors.message && <p className={errorClass}>{errors.message}</p>}
          </div>
          <button type="submit" disabled={isSubmitting}className="w-full bg-secondary text-secondary-foreground font-heading font-bold text-lg px-8 py-4 rounded-lg hover:brightness-110 transition-all shadow-md hover:shadow-lg">
             {isSubmitting ? "Sending..." : "Request a Consultation"}
          </button>
         
        </form>
      </div>
   
    {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-xl text-center">

      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
        </svg>
      </div>

      <h3 className="text-2xl font-bold mb-3">Thank You!</h3>

      <p className="text-muted-foreground mb-6">
        Your consultation request has been received. Our team will contact you shortly.
      </p>

      <button
        onClick={resetForm}
        className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110"
      >
        OK
      </button>

    </div>
  </div>
)}
 </section>
  );
  
};

export default ContactFormSection;