import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400","500","600"],
  variable: "--font-body",
});

// This replaces your <head> tags from index.html
export const metadata: Metadata = {
  title: "Safaa Albea - Medical & Biohazardous Waste Management Dubai",
  description: "Safaa Albea Waste Collection & Transport - Dubai's trusted partner for medical, biohazardous, industrial, and construction waste management.",
  authors: [{ name: "Safaa Albea" }],
  openGraph: {
    title: "Safaa Albea - Waste Management Dubai",
    description: "Professional medical, biohazardous, industrial, and construction waste collection and transport in Dubai.",
    type: "website",
    // Next.js automatically handles the URL and basic OG tags
  },
  icons: {
    icon: "/favicon.png",
  },
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={cn("font-sans", figtree.variable)}>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* viewport and charset are handled automatically by Next.js */}
      </head>
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}