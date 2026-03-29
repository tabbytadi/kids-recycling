"use client";

import { AnimatedSection } from "@/components/animated-section";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Curved background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#c8d96f]" style={{
        borderTopLeftRadius: '50% 100%',
        borderTopRightRadius: '50% 100%',
      }} />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 relative z-10">
            <AnimatedSection animation="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2e1a] leading-tight text-balance">
                gEko: Превърни старата си бутилка в супер сила!
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right" delay={100}>
              <p className="text-lg text-[#5a6b5a] max-w-lg">
                Креативни работилници за деца. Ти носиш пластмасови бутилки от вкъщи, ние носим артистичното вдъхновение.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/workshops"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#1a2e1a] bg-transparent px-6 py-3 text-sm font-semibold text-[#1a2e1a] hover:bg-[#1a2e1a] hover:text-white transition-colors"
                >
                  Изследвай работилниците
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#1a2e1a] bg-transparent px-6 py-3 text-sm font-semibold text-[#1a2e1a] hover:bg-[#1a2e1a] hover:text-white transition-colors"
                >
                  Научи повече
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="flex gap-12 pt-6">
                <div>
                  <div className="text-3xl font-bold text-[#1a2e1a]">5т +</div>
                  <div className="text-sm text-[#5a6b5a]">Рециклирано</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1a2e1a]">2,000+</div>
                  <div className="text-sm text-[#5a6b5a]">Преработени бутилки</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1a2e1a]">0%</div>
                  <div className="text-sm text-[#5a6b5a]">Отпадък</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Mascot */}
          <AnimatedSection animation="fade-left" delay={200} className="relative z-10">
            <div className="relative flex justify-center">
              <div className="relative w-64 h-80 md:w-80 md:h-96">
                {/* Placeholder for mascot image */}
                <div className="w-full h-full bg-gradient-to-b from-[#7cb342] to-[#558b2f] rounded-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 mx-auto bg-white/20 rounded-full mb-4 flex items-center justify-center">
                      <span className="text-6xl">🐸</span>
                    </div>
                    <p className="text-sm opacity-80">Mascot Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
