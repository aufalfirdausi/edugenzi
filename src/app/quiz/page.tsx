import type { Metadata } from "next";
import { OrganicBackground } from "@/components/ui/OrganicBackground";
import { InterestQuiz } from "@/components/quiz/InterestQuiz";

export const metadata: Metadata = {
  title: "Kuis Minat & Bakat Anak",
  description: "Temukan potensi Anak Anda di Edugenzi.",
};

export default function QuizPage() {
  return (
    <div className="relative min-h-screen bg-[var(--surface-sunken)]">
      <OrganicBackground />
      
      {/* Spacer for header */}
      <div className="h-16" />
      
      <main className="relative z-10">
        <InterestQuiz />
      </main>
    </div>
  );
}
