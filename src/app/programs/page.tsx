import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramsShowcase } from "@/components/sections/ProgramsShowcase";

export default function ProgramsPage() {
  return (
    <div className="pb-16 pt-10 sm:pt-14">
      <Container>
        <SectionHeading
          eyebrow="Program Edugenzi"
          title="Pilih jalur belajar yang paling cocok"
          description="Empat program inti untuk membangun skill digital dan percaya diri anak sejak dini."
        />
      </Container>
      <ProgramsShowcase />
    </div>
  );
}

