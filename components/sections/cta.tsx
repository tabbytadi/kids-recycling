"use client";

import { AnimatedSection } from "@/components/animated-section";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-[#4a7c4a] py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Включи се в следващата мисия
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Присъедини се към хиляди деца, които вече правят разлика. Всяка бутилка е стъпка към по-чиста планета!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/workshops"
              className="inline-flex items-center justify-center rounded-full bg-[#c8d96f] px-8 py-3 text-sm font-semibold text-[#1a2e1a] hover:bg-[#b8c95f] transition-colors"
            >
              Запиши се сега
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#4a7c4a] transition-colors"
            >
              Научи повече
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
