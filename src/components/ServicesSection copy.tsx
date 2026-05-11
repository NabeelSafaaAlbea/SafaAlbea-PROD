import { Thermometer, Trash2, Weight, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Trash2,
    title: "Biohazardous Waste Management",
    description: "We collect bandages, syringes, needles, sharps, pharmaceutical products, laboratory waste, human and animal tissues, and blood and body secretions — all handled with strict safety protocols.",
  },
  {
    icon: Thermometer,
    title: "Sharps & Needle Disposal",
    description: "Our vehicles are equipped with advanced cooling systems to safely transport biohazardous materials. We provide and replace 120-liter disinfected containers at every visit.",
  },
  {
    icon: Weight,
    title: "Dental Clinic Waste Solutions",
    description: "All waste is weighed and electronically recorded in our database, ensuring full traceability and compliance from collection to final disposal for dental clinics and medical centers.",
  },
  {
    icon: ShieldCheck,
    title: "Environmentally Safe Disposal",
    description: "We use environmentally friendly technology for the final processing and safe disposal of all collected medical waste, protecting both people and the planet.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-foreground mb-4">
            Our Services
          </h2>
           <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            We provide services based on the number of visits — from daily to weekly — to ensure no medical waste is ever disposed of with general waste.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border p-8 flex gap-6"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
