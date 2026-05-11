'use client';

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do we ensure Dubai Municipality compliance?",
    answer:
      "All our operations strictly adhere to Dubai Municipality regulations for medical waste management. Every collection is weighed, electronically logged, and processed using government-approved disposal methods.",
  },
  {
    question: "What qualifications does the Safaa Albea team hold?",
    answer:
      "Our team is trained in hazardous materials handling, infection control protocols, and emergency response procedures. All drivers hold valid UAE hazmat transport licenses.",
  },
    {
    question: "How is waste tracked from collection to disposal?",
    answer:
      "We use an electronic database that records the weight, type, and origin of every waste container. Facilities receive detailed compliance reports for their records."
     },
  {
    question: "How often do you collect medical waste?",
    answer:
      "We offer flexible collection schedules including daily, weekly, or custom visit plans depending on the facility’s waste volume and regulatory requirements.",
  },
    {
    question: "Do you provide waste containers for facilities?",
    answer:
      "Yes. We supply disinfected, compliant medical waste containers for safe storage and transport. Our team replaces containers during every scheduled collection visit to ensure hygiene and regulatory compliance.",
  },
];

const ComplianceFAQSection = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq"  className="py-20 bg-accent/10">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-14">

          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-foreground mb-4">
            Compliance & FAQ
          </h2>

          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />

        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden transition-all"
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >

                  <div className="flex items-center gap-3">

                    <HelpCircle className="w-5 h-5 text-secondary" />

                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      {faq.question}
                    </h3>

                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-secondary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 px-6 pb-6" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ComplianceFAQSection;
