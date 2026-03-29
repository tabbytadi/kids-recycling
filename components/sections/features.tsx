"use client";

import { AnimatedSection } from "@/components/animated-section";
import Image from "next/image";

const features = [
  {
    title: "Декорация за стая",
    description: "Украси своето пространство",
    position: "top-left",
  },
  {
    title: "Маски на супер герой",
    description: "От бутилка до герой",
    position: "top-right",
  },
  {
    title: "Арт проекти",
    description: "Безкрайно творчество",
    position: "bottom-left",
  },
  {
    title: "Еко цветя",
    description: "Вечна красота",
    position: "bottom-right",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-[#c8d96f] py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-4">
            Новият живот на бутилката
          </h2>
          <p className="text-[#1a2e1a]/80">
            Открий безкрайните възможности за трансформация
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Center bottle image */}
          <AnimatedSection animation="zoom" className="flex justify-center mb-8">
            <div className="relative w-48 h-64 md:w-64 md:h-80">
              <div className="w-full h-full bg-[#4a7c4a]/20 rounded-3xl flex items-center justify-center">
                <div className="text-center text-[#1a2e1a]">
                  <div className="w-20 h-32 mx-auto bg-[#4a7c4a]/30 rounded-lg mb-2" />
                  <p className="text-xs opacity-60">Bottle Placeholder</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Feature cards positioned around */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={index * 100}
                className="flex items-center gap-4"
              >
                <div className="w-24 h-24 bg-[#fdfdf5] rounded-2xl overflow-hidden flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center bg-[#f0f4e8]">
                    <span className="text-xs text-[#5a6b5a]">Image</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a2e1a]">{feature.title}</h3>
                  <p className="text-sm text-[#1a2e1a]/70">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
