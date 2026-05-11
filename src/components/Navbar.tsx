'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link";   // Use Link for internal navigation

const navLinks = [
  { label: "", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  {  label: "Careers", href: "#careers"},
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
 <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo Section */}
       {/* Logo Section */}
     <Link href="#home" className="flex items-center gap-4 group"> 
  <div className="relative h-16 w-16 transition-transform group-hover:scale-105">
          <Image 
            src="/images/company-logo.png" 
            alt="Safaa Albea" 
            fill
            className="object-contain"
            priority // Added priority since it's above the fold
          />
        </div>
        <span className="font-heading font-bold text-xl text-primary-foreground">
          Safaa Albea Waste Collection & Transport
        </span>
      </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a 
              key={l.label} 
              href={l.href} 
              className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm transition-colors"
      
            >
              {l.label}
            </a>
          ))}
          <a 
            href="#quote" 
             className="bg-secondary text-secondary-foreground font-heading font-semibold text-sm px-5 py-2 rounded-lg hover:brightness-110 transition-all">
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-6 pb-4">
          {navLinks.map((l) => (
            <a 
              key={l.label} 
              href={l.href} 
              onClick={() => setOpen(false)} 
              className="block py-3 text-primary-foreground/80 font-body text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
