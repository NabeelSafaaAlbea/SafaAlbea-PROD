import Image from "next/image";

const HeroSection = () => {
  return (
 <section id="home" className="relative min-h-screen flex items-start pt-16">


<div className="absolute inset-0 z-0">
    <Image
      src="/images/hero-bg.jpg"
      alt="Biohazardous Waste Management Background"
      fill
      priority
      className="object-cover"
    />
  </div>

  <div
    className="absolute inset-0"
    style={{ background: "var(--hero-overlay)" }}
  />

 <div className="relative z-10 container mx-auto px-6 pt-16 pb-10">
    <div className="max-w-3xl animate-fade-in-up">
      <p className="text-primary-foreground/70 font-body text-lg mb-2" dir="rtl">
        صفاء البيئة لجمع ونقل النفايات
      </p>

     <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-primary-foreground leading-tight mb-4">

        Professional Medical Waste<br />
        <span className="text-secondary">
          Collection & Transport in Dubai
        </span>
      </h1>

    <p className="text-lg md:text-xl text-primary-foreground/90 font-body mb-6 max-w-2xl">
        We specialize in the collection, transport, and safe disposal of medical
        and biohazardous waste from hospitals, laboratories, blood banks,
        dialysis centers, clinics, pharmacies, and research facilities across
        the UAE.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#quote"
       className="inline-block bg-secondary text-secondary-foreground font-heading font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:brightness-110"  >
          Request a Quote
        </a>

        <a
          href="#services"
       className="inline-block border-2 border-primary-foreground text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:bg-primary-foreground/10 hover:scale-105"   >
          Our Services
        </a>
      </div>

    </div>
  </div>

</section>
  );
};

export default HeroSection;
