import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { MissionSection } from "@/components/sections/mission";
import { AnimatorsSection } from "@/components/sections/animators";
import { WorkshopsPreviewSection } from "@/components/sections/workshops-preview";
import { CTASection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <MissionSection />
        <AnimatorsSection />
        <WorkshopsPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
