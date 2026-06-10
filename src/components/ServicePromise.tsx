import { ShieldCheck, Truck, CheckCircle, Snowflake, Database } from "lucide-react";

const ServicePromise = () => {
  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-foreground mb-6">
            Our Service Promise
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10">
            We provide reliable scheduled medical waste collection and transport support for healthcare facilities in Dubai.
            Each collection can include weighing records, service documentation, safe handling, and proper handover for
            approved disposal processes.
            Our goal is to help facilities maintain cleaner operations, safer waste segregation, and dependable collection
            routines.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-primary" />
              <span className="font-heading font-semibold text-foreground">Cooling-Equipped Fleet</span>
            </div>
            <div className="flex items-center gap-3">
              <Snowflake className="w-6 h-6 text-primary" />
              <span className="font-heading font-semibold text-foreground">120L Disinfected Containers</span>
            </div>
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" />
              <span className="font-heading font-semibold text-foreground">Electronic Tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <span className="font-heading font-semibold text-foreground">Full Compliance</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="font-heading font-semibold text-foreground">Daily to Weekly Visits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePromise;
