"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    image: "/images/service1.png",
    title: "Biohazardous Waste Management",
    description:
      "We collect bandages, syringes, needles, sharps, pharmaceutical products, laboratory waste, human and animal tissues, and blood and body secretions — all handled with strict safety protocols.",
  },
  {
    image: "/images/service2.png",
    title: "Sharps & Needle Disposal",
    description:
      "Our vehicles are equipped with advanced cooling systems to safely transport biohazardous materials. We provide and replace 120-liter disinfected containers at every visit.",
  },
  {
    image: "/images/service3.png",
    title: "Dental Clinic Waste Solutions",
    description:
      "All waste is weighed and electronically recorded in our database, ensuring full traceability and compliance from collection to final disposal.",
  },
  // {
  //   image: "/images/service4.png",
  //   title: "Environmentally Safe Disposal",
  //   description:
  //     "We use environmentally friendly technology for the final processing and safe disposal of all collected medical waste.",
  // },
];



export default function ServicesSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % services.length);
  const prev = () => setIndex((prev) => (prev - 1 + services.length) % services.length);

  const service = services[index];

  return (
    <section
      id="services"
      className="py-24"
      style={{ background: "var(--section-gradient)" }}
    >
      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-card border border-border rounded-xl shadow-md p-10">

          {/* Image Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={service.image}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-md w-full"
              />
            </motion.div>
          </AnimatePresence>

          {/* Text */}
          <div>

            <AnimatePresence mode="wait">
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Static Buttons (No animation) */}
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition"
              >
                <ArrowRight size={20} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}