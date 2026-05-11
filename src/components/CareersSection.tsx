


const CareersSection = () => {

  return (
    <section id="careers" className="py-20 bg-muted">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-14">

          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-foreground mb-4">
            Careers at Safaa Albea
          </h2>

          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
         We are looking for a dedicated Salesperson to join our growing team in Dubai and help expand our medical waste management services.
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <h3 className="text-lg font-bold font-heading text-foreground mb-4">
            Salesperson — Requirements</h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span>Experience in B2B sales, preferably in healthcare or waste management</li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span>Valid UAE driving license and residency visa</li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span>Fluent in English and Arabic</li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span>Strong understanding of Dubai Municipality regulations</li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span>Self-motivated with excellent communication skills</li></ul>
                <a href="#quote" className="inline-block mt-6 bg-secondary text-secondary-foreground font-heading font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 transition-all">Apply Now</a></div>

      </div>
    </section>
  );
};

export default CareersSection;
