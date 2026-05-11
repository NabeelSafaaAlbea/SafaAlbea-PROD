import { MapPin, Phone, Mail } from "lucide-react";

const ContactFooter = () => {
  return (
    <footer id="contact" className="bg-primary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-primary-foreground mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <MapPin className="w-8 h-8 text-secondary mb-4" />
            <h3 className="font-heading font-bold text-primary-foreground mb-2">Office Address</h3>
            <p className="text-primary-foreground/70 font-body leading-relaxed">
              Office C-227, 105-Muna Aljaziri Building<br />
              Al Mararr, Dubai, UAE
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="w-8 h-8 text-secondary mb-4" />
            <h3 className="font-heading font-bold text-primary-foreground mb-2">Phone</h3>
                    <p className="text-primary-foreground/70 font-body">
            <a
              href="tel:+971567489867"
              className="hover:text-secondary transition"
            >
              +971 56-748-9867
            </a>
            <br />
            <a
              href="tel:+971566984644"
              className="hover:text-secondary transition"
            >
              +971 56-698-4644
            </a>
          </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mail className="w-8 h-8 text-secondary mb-4" />
            <h3 className="font-heading font-bold text-primary-foreground mb-2">Email</h3>
              <a
                href="mailto:info@safaaalbea.com"
                className="text-primary-foreground/70 font-body hover:text-secondary transition"
              >
              info@safaaalbea.com
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 font-body text-sm">
            © {new Date().getFullYear()} Safaa Albea Waste Collection & Transport. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
