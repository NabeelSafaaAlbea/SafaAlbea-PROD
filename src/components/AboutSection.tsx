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
              Safaa Albea Waste Collection & Transport is a premier provider of specialized medical and biohazardous waste management in the UAE. With a deep commitment to environmental safety and public health, we bridge the gap between healthcare activities and safe, compliant disposal.
            </p>
            <p>
              Our highly trained team operates a{" "}
              <strong className="text-foreground font-semibold">
                specialized vehicle fleet equipped with advanced cooling systems
              </strong>
              , ensuring that sensitive waste from hospitals, laboratories, pharmacies, and clinics is transported under strictly monitored hygienic conditions.
            </p>
            <p>
              At Safaa Albea, we don't just collect waste; we provide total peace of mind through a{" "}
              <strong className="text-foreground font-semibold">
                visit-based service model
              </strong>{" "}
              that guarantees no hazardous material ever enters the general waste stream.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
