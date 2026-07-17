import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ValueProps } from "@/components/sections/ValueProps";
import { StatsBand } from "@/components/sections/StatsBand";
import { ProgramsShowcase } from "@/components/sections/ProgramsShowcase";
import { LearningMethods } from "@/components/sections/LearningMethods";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { LearningJourney } from "@/components/sections/LearningJourney";
import { InstructorCredibility } from "@/components/sections/InstructorCredibility";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { FaqSection } from "@/components/sections/FaqSection";
import { OrganicBackground } from "@/components/ui/OrganicBackground";

export default function Home() {
  return (
    <div className="pb-16 relative">
      <OrganicBackground />
      <Hero />
      <TrustBar />
      <ValueProps />
      <StatsBand />
      <ProgramsShowcase />
      <LearningMethods />
      <ProjectsShowcase />
      <LearningJourney />
      <InstructorCredibility />
      <ConsultationCTA />
      <FaqSection />
    </div>
  );
}
