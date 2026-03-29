"use client";

import { AnimatedSection } from "@/components/animated-section";
import Image from "next/image";

const animators = [
  {
    name: "Габи Иванова",
    experience: "15 години опит в детско артистично образование",
  },
  {
    name: "Криси Петкова",
    experience: "15 години опит в детско артистично образование",
  },
  {
    name: "Ани Георгиева",
    experience: "15 години опит в детско артистично образование",
  },
];

export function AnimatorsSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-4">
            Аниматори
          </h2>
          <p className="text-[#5a6b5a]">Запознай се с екипа</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {animators.map((animator, index) => (
            <AnimatedSection
              key={animator.name}
              animation="fade-up"
              delay={index * 150}
              className="text-center"
            >
              <div className="relative mb-4">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-[#f0f4e8] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c8d96f]/50 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-3xl">👤</span>
                    </div>
                    <span className="text-xs text-[#5a6b5a]">Photo</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#1a2e1a] mb-1">
                {animator.name}
              </h3>
              <p className="text-sm text-[#5a6b5a]">{animator.experience}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
