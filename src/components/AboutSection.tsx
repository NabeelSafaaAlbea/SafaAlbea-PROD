const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-foreground mb-2">
              About Us
            </h2>
            {/* <p className="text-muted-foreground font-body text-lg" dir="rtl">
              صفاء البيئة لجمع ونقل النفايات
            </p> */}
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
          </div>
          <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
            <p>
              Safaa Albea Waste Collection & Transport is a Dubai-based medical waste collection and transport service
              provider. We help healthcare facilities manage clinical waste, sharps waste, pharmaceutical waste, and expired
              medicines through safe handling, scheduled collection, proper weighing, and documented handover procedures.
            </p>
            <p>
              Our service is designed to support healthcare providers with{" "}
              <strong className="text-foreground font-semibold">
                reliable, hygienic, and regulation-conscious waste
              </strong>
              , movement from the facility to the approved disposal process.
            </p>
            <p>
              We focus on professionalism, clear documentation,{" "}
              <strong className="text-foreground font-semibold">
                timely service, and responsible handling
              </strong>{" "}
              so that healthcare
              facilities can manage their waste requirements with confidence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
