import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { links } from "@/lib/links";
import { programBySlug, programs, type Program } from "@/content/programs";
import { ArrowUpRight, Sparkles, MessageCircle, Check, LayoutTemplate, PenTool, Box, MonitorPlay, Bot, Lightbulb, Cpu, Radio, Video, Mic, Presentation } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: Program["slug"] }>;
};

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programBySlug[slug];
  if (!program) return {};

  return {
    title: program.title,
    description: program.description,
  };
}

// Map slugs to short badge names
const badgeMap: Record<string, string> = {
  "graphic-design-3d": "3D + Visual",
  "coding-ai": "Code + Logic",
  "robotics-iot": "Hardware + Code",
  "public-speaking": "Speak + Confident"
};

// Map project ideas to icons
const getProjectIcon = (slug: string, index: number) => {
  if (slug === "graphic-design-3d") {
    if (index === 0) return <LayoutTemplate size={20} className="text-yellow-600" />;
    if (index === 1) return <PenTool size={20} className="text-emerald-600" />;
    return <Box size={20} className="text-indigo-600" />;
  }
  if (slug === "coding-ai") {
    if (index === 0) return <MonitorPlay size={20} className="text-yellow-600" />;
    if (index === 1) return <Bot size={20} className="text-emerald-600" />;
    return <Lightbulb size={20} className="text-indigo-600" />;
  }
  if (slug === "robotics-iot") {
    if (index === 0) return <Lightbulb size={20} className="text-yellow-600" />;
    if (index === 1) return <Radio size={20} className="text-emerald-600" />;
    return <Cpu size={20} className="text-indigo-600" />;
  }
  if (slug === "public-speaking") {
    if (index === 0) return <Presentation size={20} className="text-yellow-600" />;
    if (index === 1) return <Video size={20} className="text-emerald-600" />;
    return <Mic size={20} className="text-indigo-600" />;
  }
  return <LayoutTemplate size={20} className="text-slate-600" />;
};

const getProjectBg = (index: number) => {
  if (index === 0) return "bg-yellow-50";
  if (index === 1) return "bg-emerald-50";
  return "bg-indigo-50";
};

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = programBySlug[slug];
  if (!program) return notFound();

  return (
    <div className="pb-24 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            
            {/* Left Column */}
            <div className="max-w-xl">
              {/* Dot Pill */}
              <div className="inline-flex items-center justify-center size-8 rounded-full bg-emerald-50 mb-6">
                <div className="size-2 rounded-full bg-emerald-600"></div>
              </div>
              
              <h1 className="font-[var(--font-display)] text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                {program.title}
              </h1>
              
              <p className="mt-8 text-lg font-bold text-slate-900 leading-relaxed">
                {program.tagline}
              </p>
              
              <p className="mt-6 text-base text-slate-600 leading-relaxed">
                {program.description}
              </p>
              
              <div className="mt-10">
                <Link
                  href={links.consultation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center size-14 rounded-2xl bg-emerald-700 hover:bg-emerald-800 transition-colors text-white shadow-lg"
                  aria-label="Konsultasi via WhatsApp"
                >
                  <ArrowUpRight size={24} />
                </Link>
                <p className="mt-4 text-sm text-slate-600">
                  Chat langsung ke <span className="font-semibold text-slate-900">{links.whatsappNumberDisplay}</span>
                </p>
              </div>
            </div>

            {/* Right Column: Output Card / Image Container */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[#F4F0FF] rounded-[2rem] shadow-xl border border-indigo-50/50 overflow-hidden">
                <Image 
                  src={`/images/output-${program.slug}.jpg`} 
                  alt={`Contoh karya ${program.title}`} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>
            
          </div>
        </Container>
      </section>

      {/* 2. Program Summary Grid (3-column) */}
      <section className="pb-24">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {program.highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 flex items-start gap-4">
                <div className={`flex items-center justify-center size-10 rounded-xl shrink-0 ${getProjectBg(index)} mt-1`}>
                  {getProjectIcon(program.slug, index)}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-base md:text-lg">{highlight.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {highlight.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Green CTA Banner */}
      <section>
        <Container>
          <div className="relative bg-[#2B5F3A] rounded-[2.5rem] p-10 md:p-16 overflow-hidden">
            {/* Decorative concentric circles */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-20 hidden md:block">
              <div className="size-[400px] border border-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="size-[600px] border border-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="size-[800px] border border-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div className="max-w-2xl">
                <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4 block">
                  Mulai Dari Langkah Yang Tepat
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Masih ragu? Konsultasi dulu biar jelas.
                </h2>
                <p className="text-emerald-50 text-base md:text-lg leading-relaxed opacity-90 max-w-xl">
                  Chat admin kami untuk tahu lebih detail soal level belajar, jadwal, dan biaya — supaya anak mulai dari titik yang paling tepat.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
                <Link
                  href={links.consultation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-16 bg-white rounded-2xl text-emerald-800 hover:scale-105 transition-transform shadow-xl"
                  aria-label="Konsultasi via WhatsApp"
                >
                  <MessageCircle size={28} />
                </Link>
                <p className="text-white font-medium tracking-wide">
                  {links.whatsappNumberDisplay}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
