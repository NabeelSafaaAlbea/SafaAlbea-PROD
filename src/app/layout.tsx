import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourwebsite.com"),

  title: "Safaa Albea - Medical & Biohazardous Waste Management Dubai",

  description:
    "Safaa Albea Waste Collection & Transport provides trusted medical, biohazardous, industrial, and construction waste management services in Dubai.",

  keywords: [
    "medical waste Dubai",
    "biohazard waste management",
    "industrial waste collection",
    "construction waste Dubai",
    "waste transport UAE",
  ],

  authors: [{ name: "Safaa Albea" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Safaa Albea - Waste Management Dubai",

    description:
      "Professional medical, biohazardous, industrial, and construction waste collection and transport services in Dubai.",

    url: "https://safaaalbea.com",

    siteName: "Safaa Albea",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Safaa Albea Waste Management",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Safaa Albea - Waste Management Dubai",
    description:
      "Trusted medical and industrial waste management services in Dubai.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}