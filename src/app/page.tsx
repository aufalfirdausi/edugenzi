import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { LearningMethodWidget } from "@/components/sections/LearningMethodWidget";
import { ValueProps } from "@/components/sections/ValueProps";
import { StatsBand } from "@/components/sections/StatsBand";
import { ProgramsShowcase } from "@/components/sections/ProgramsShowcase";
import { LearningMethods } from "@/components/sections/LearningMethods";
import { InstagramReels } from "@/components/sections/InstagramReels";
import { LearningJourney } from "@/components/sections/LearningJourney";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { FaqSection } from "@/components/sections/FaqSection";
export default function Home() {
  return (
    <div className="pb-16 relative">
      {/* 
        ========================================
        GROUP 1: Hero & Core Values
        (Yellow Gradient Background)
        ======================================== 
      */}
      <div className="bg-white">

        {/* 1. Hero / Main Header */}
        <div id="hero-section" className="section-wrapper">
          <Hero />
        </div>

        {/* 2. Learning Method Widget */}
        <div id="learning-method-section" className="section-wrapper">
          <LearningMethodWidget />
        </div>

        {/* 3. Trust Bar / Logos */}
        <div id="trust-bar-section" className="section-wrapper">
          <TrustBar />
        </div>

        {/* 4. Value Propositions */}
        <div id="value-props-section" className="section-wrapper">
          <ValueProps />
        </div>

        {/* 5. Statistics */}
        <div id="stats-band-section" className="section-wrapper">
          <StatsBand />
        </div>

        {/* 6. Programs Showcase */}
        <div id="programs-showcase-section" className="section-wrapper">
          <ProgramsShowcase />
        </div>

        {/* 6.5 Learning Methods */}
        <div id="learning-methods-section" className="section-wrapper">
          <LearningMethods />
        </div>

      </div>

      {/* 
        ========================================
        GROUP 2: Projects & Journey
        (Green Gradient Background)
        ======================================== 
      */}
      <div className="bg-white">

        {/* 7. Instagram Reels (formerly Projects Showcase) */}
        <div id="projects-showcase-section" className="section-wrapper">
          <InstagramReels />
        </div>

        {/* 8. Learning Journey Roadmap */}
        <div id="learning-journey-section" className="section-wrapper">
          <LearningJourney />
        </div>

      </div>

      {/* 
        ========================================
        GROUP 3: Trust & Conversion
        (Purple Gradient Background)
        ======================================== 
      */}
      <div className="bg-white">

        {/* 10. Consultation Call to Action */}
        <div id="consultation-cta-section" className="section-wrapper">
          <ConsultationCTA />
        </div>

        {/* 11. FAQ */}
        <div id="faq-section" className="section-wrapper">
          <FaqSection />
        </div>

      </div>
    </div>
  );
}
