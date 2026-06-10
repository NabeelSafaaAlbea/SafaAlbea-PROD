import { Building2, FlaskConical, Droplets, Microscope, Pill, Stethoscope, Building, Factory, GraduationCap, Store, Syringe, PawPrint } from "lucide-react";

const industries = [
  { icon: Building2, title: "Hospitals" },
  { icon: FlaskConical, title: "Medical Laboratories" },
  { icon: Droplets, title: "Blood Banks" },
  { icon: Stethoscope, title: "Dialysis Centers" },
  { icon: Microscope, title: "Biotechnology Companies" },
  { icon: Building, title: "Medical Clinics" },
  { icon: Syringe, title: "Dental Clinics" },
  { icon: Factory, title: "Drug Factories" },
  { icon: GraduationCap, title: "Research Centers" },
  { icon: Pill, title: "Pharmacies" },
  { icon: Store, title: "Medical Stores" },
  { icon: PawPrint, title: "Veterinary Clinics" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">
            Facilities We Serve
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 text-center border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <industry.icon
                className={`w-10 h-10 text-secondary mx-auto mb-4 ${industry.title === "Veterinary Clinics" ? "rotate-315" : ""
                  }`}
              />
              <h3 className="text-sm md:text-base font-bold font-heading text-primary-foreground">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;