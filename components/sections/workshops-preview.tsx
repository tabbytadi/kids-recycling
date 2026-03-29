"use client";

import { AnimatedSection } from "@/components/animated-section";
import Link from "next/link";
import { Calendar, Clock, MapPin, Recycle, Users } from "lucide-react";

const workshops = [
  {
    title: "Разходка из Витоша",
    date: "17 Април 2026",
    time: "10:00 - 14:00",
    location: "Витоша",
    bottles: "4 бутилки (1.5L)",
    participants: "20 участници",
    tags: ["Премиум", "10-12 години"],
    tagColors: ["bg-[#c8d96f]", "bg-[#c8d96f]"],
  },
  {
    title: "Ден във фермата",
    date: "18 Април 2026",
    time: "10:00 - 14:00",
    location: "с. Нови Хан",
    bottles: "6 бутилки (1.5L)",
    participants: "20 участници",
    tags: ["Премиум", "10-12 години"],
    tagColors: ["bg-[#c8d96f]", "bg-[#c8d96f]"],
  },
  {
    title: "Засаждане на дърво",
    date: "17 Април 2026",
    time: "10:00 - 14:00",
    location: "Витоша",
    bottles: "4 бутилки (1.5L)",
    participants: "20 участници",
    tags: ["Средни", "7-9 години"],
    tagColors: ["bg-[#4a7c4a] text-white", "bg-[#c8d96f]"],
  },
];

export function WorkshopsPreviewSection() {
  return (
    <section className="bg-[#f5f5dc] py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-4">
            Разгледай работилниците
          </h2>
          <p className="text-[#5a6b5a]">Намери перфектното приключение</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {workshops.map((workshop, index) => (
            <AnimatedSection
              key={workshop.title}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Image placeholder */}
                <div className="relative h-48 bg-[#e8ecd8]">
                  <div className="absolute top-3 left-3 flex gap-2">
                    {workshop.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${workshop.tagColors[i]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-[#5a6b5a]">Workshop Image</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-[#1a2e1a]">{workshop.title}</h3>
                  
                  <div className="space-y-2 text-sm text-[#5a6b5a]">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{workshop.date}</span>
                      <span className="mx-1">|</span>
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Recycle size={14} />
                      <span>Необходими: {workshop.bottles}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} />
                      <span>{workshop.participants}</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 py-2.5 rounded-full border-2 border-[#c8d96f] text-[#1a2e1a] font-medium hover:bg-[#c8d96f] transition-colors">
                    Запиши се
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={400} className="text-center">
          <Link
            href="/workshops"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#1a2e1a] bg-transparent px-8 py-3 text-sm font-semibold text-[#1a2e1a] hover:bg-[#1a2e1a] hover:text-white transition-colors"
          >
            Виж още
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
