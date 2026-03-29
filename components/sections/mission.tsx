"use client";

import { AnimatedSection } from "@/components/animated-section";

const pillars = [
  {
    number: "1",
    title: "Повторна употреба",
    description:
      "Учим децата да превръщат пластмасови отпадъци в красиви творби",
  },
  {
    number: "2",
    title: "Рециклиране",
    description:
      "Всеки остатък от нашите работилници се изпраща за сертифицирано индустриално рециклиране",
  },
  {
    number: "3",
    title: "Нулев отпадък",
    description:
      "Гарантираме 0% отпадък останал след всяко събитие",
  },
];

export function MissionSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-4">
            Нашата мисия
          </h2>
          <p className="text-[#5a6b5a] max-w-2xl mx-auto">
            В gEko даваме нов живот на бутилките чрез творчество, а всеки остатък рециклираме индустриално за 100% чиста природа.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <AnimatedSection
              key={pillar.number}
              animation="fade-up"
              delay={index * 150}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#c8d96f] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#1a2e1a]">
                  {pillar.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#1a2e1a] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[#5a6b5a] text-sm leading-relaxed">
                {pillar.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
