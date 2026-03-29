"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Calendar, MapPin, Recycle, Users } from "lucide-react";
import { useState } from "react";

const ageFilters = ["Всички възрасти", "4-6 години", "7-9 години", "10-12 години"];
const difficultyFilters = ["Всички", "Базови", "Средни", "Премиум"];

const allWorkshops = [
  {
    id: 1,
    title: "Разходка из Витоша",
    date: "18 април 2026",
    time: "10:00 - 14:00",
    location: "Витоша",
    bottles: "4 бутилки (1.5L)",
    participants: "20 участници",
    tags: ["Премиум", "10-12 години"],
    tagColors: ["bg-[#c8d96f]", "bg-[#c8d96f]"],
    difficulty: "Премиум",
    age: "10-12 години",
  },
  {
    id: 2,
    title: "Ден във фермата",
    date: "19 април 2026",
    time: "10:00 - 14:00",
    location: "с. Нови Хан",
    bottles: "6 бутилки (1.5L)",
    participants: "20 участници",
    tags: ["Премиум", "10-12 години"],
    tagColors: ["bg-[#c8d96f]", "bg-[#c8d96f]"],
    difficulty: "Премиум",
    age: "10-12 години",
  },
  {
    id: 3,
    title: "Засаждане на дърво",
    date: "25 април 2026",
    time: "10:00 - 14:00",
    location: "Южен парк",
    bottles: "4 бутилки (1.5L)",
    participants: "20 участници",
    tags: ["Средни", "7-9 години"],
    tagColors: ["bg-[#4a7c4a] text-white", "bg-[#c8d96f]"],
    difficulty: "Средни",
    age: "7-9 години",
  },
  {
    id: 4,
    title: "Отглеждане на растение",
    date: "16 май 2026",
    time: "10:00 - 14:00",
    location: 'ДГ "Дружба"',
    bottles: "4 бутилки (1.5L)",
    participants: "20 участници",
    tags: ["Премиум", "10-12 години"],
    tagColors: ["bg-[#c8d96f]", "bg-[#c8d96f]"],
    difficulty: "Премиум",
    age: "10-12 години",
  },
  {
    id: 5,
    title: "Устойчив начин на живот",
    date: "17 май 2026",
    time: "10:00 - 14:00",
    location: "Младост",
    bottles: "6 бутилки (1.5L)",
    participants: "20 участници",
    tags: ["Премиум", "10-12 години"],
    tagColors: ["bg-[#c8d96f]", "bg-[#c8d96f]"],
    difficulty: "Премиум",
    age: "10-12 години",
  },
  {
    id: 6,
    title: "Изработване на цветя",
    date: "24 май 2026",
    time: "10:00 - 14:00",
    location: 'ДГ "Дружба"',
    bottles: "4 бутилки (1.5L)",
    participants: "20 участници",
    tags: ["Средни", "7-9 години"],
    tagColors: ["bg-[#4a7c4a] text-white", "bg-[#c8d96f]"],
    difficulty: "Средни",
    age: "7-9 години",
  },
];

export default function WorkshopsPage() {
  const [selectedAge, setSelectedAge] = useState("Всички възрасти");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Всички");

  const filteredWorkshops = allWorkshops.filter((workshop) => {
    const ageMatch =
      selectedAge === "Всички възрасти" || workshop.age === selectedAge;
    const difficultyMatch =
      selectedDifficulty === "Всички" ||
      workshop.difficulty === selectedDifficulty;
    return ageMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#f5f5dc]">
        {/* Hero section with wave */}
        <div className="bg-background relative pb-16">
          <div className="container mx-auto px-4 py-12 text-center">
            <AnimatedSection>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-4">
                Открий своята следваща мисия
              </h1>
              <p className="text-[#5a6b5a]">
                Разгледай нашия каталог от творчески мисии
              </p>
            </AnimatedSection>
          </div>
          
          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#c8d96f]" style={{
            borderTopLeftRadius: '50% 100%',
            borderTopRightRadius: '50% 100%',
          }} />
        </div>

        {/* Filters */}
        <div className="bg-[#c8d96f] py-8">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                {/* Age filter */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-medium text-[#1a2e1a]">Възраст:</span>
                  <div className="flex flex-wrap gap-2">
                    {ageFilters.map((age) => (
                      <button
                        key={age}
                        onClick={() => setSelectedAge(age)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedAge === age
                            ? "bg-[#4a7c4a] text-white"
                            : "bg-white/80 text-[#1a2e1a] hover:bg-white"
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty filter */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-medium text-[#1a2e1a]">Трудност:</span>
                  <div className="flex flex-wrap gap-2">
                    {difficultyFilters.map((diff) => (
                      <button
                        key={diff}
                        onClick={() => setSelectedDifficulty(diff)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedDifficulty === diff
                            ? "bg-[#4a7c4a] text-white"
                            : "bg-white/80 text-[#1a2e1a] hover:bg-white"
                        }`}
                      >
                        {diff}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Workshops grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkshops.map((workshop, index) => (
              <AnimatedSection
                key={workshop.id}
                animation="fade-up"
                delay={index * 100}
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

                    <button className="w-full mt-4 py-2.5 rounded-full bg-[#c8d96f] text-[#1a2e1a] font-medium hover:bg-[#b8c95f] transition-colors">
                      Запиши се
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Load more button */}
          <AnimatedSection animation="fade-up" delay={400} className="text-center mt-12">
            <button className="inline-flex items-center justify-center rounded-full border-2 border-[#1a2e1a] bg-transparent px-8 py-3 text-sm font-semibold text-[#1a2e1a] hover:bg-[#1a2e1a] hover:text-white transition-colors">
              Виж още
            </button>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
