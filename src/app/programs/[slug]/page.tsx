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
    <div className="pb-16 md:pb-24 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="pt-12 pb-16 md:pt-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-12 gap-3 md:gap-16 items-center">
            
            {/* Left Column */}
            <div className="col-span-7 md:col-span-6 lg:max-w-xl">
              {/* Dot Pill */}
              <div className="inline-flex items-center justify-center size-6 sm:size-8 rounded-full bg-emerald-50 mb-3 sm:mb-6">
                <div className="size-1.5 sm:size-2 rounded-full bg-emerald-600"></div>
              </div>
              
              <h1 className="font-[var(--font-display)] text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight">
                {program.title}
              </h1>
              
              <p className="mt-2 sm:mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                {program.tagline}
              </p>
              
              <p className="mt-2 sm:mt-6 text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                {program.description}
              </p>
              
              <div className="mt-4 sm:mt-10">
                <Link
                  href={links.consultation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center size-8 sm:size-14 rounded-lg sm:rounded-2xl bg-emerald-700 hover:bg-emerald-800 transition-colors text-white shadow-lg"
                  aria-label="Konsultasi via WhatsApp"
                >
                  <ArrowUpRight className="size-4 sm:size-6" />
                </Link>
                <p className="mt-2 sm:mt-4 text-[10px] sm:text-xs md:text-sm text-slate-600">
                  Chat ke <span className="font-semibold text-slate-900">{links.whatsappNumberDisplay}</span>
                </p>
              </div>
            </div>

            {/* Right Column: Output Card / Image Container */}
            <div className="col-span-5 md:col-span-6 w-full h-full flex items-center justify-center">
              <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-square bg-[#F4F0FF] rounded-2xl md:rounded-[2rem] shadow-xl border border-indigo-50/50 overflow-hidden">
                <Image 
                  src={`/images/output-${program.slug}.jpg`} 
                  alt={`Contoh karya ${program.title}`} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 50vw" 
                />
              </div>
            </div>
            
          </div>
        </Container>
      </section>

      {/* 2. Program Summary Grid (3-column on desktop, 2-column on mobile) */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 md:gap-6">
            {program.highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-3 sm:p-4 md:p-8 rounded-2xl md:rounded-[2rem] shadow-sm border border-slate-100 flex flex-col sm:flex-row items-start gap-2.5 md:gap-4">
                <div className={`flex items-center justify-center size-8 sm:size-10 rounded-lg sm:rounded-xl shrink-0 ${getProjectBg(index)} md:mt-1`}>
                  <div className="scale-75 sm:scale-100">{getProjectIcon(program.slug, index)}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-xs sm:text-base md:text-lg lg:text-xl leading-tight">{highlight.title}</h3>
                  <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed line-clamp-3 md:line-clamp-none">
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
          <div className="relative bg-[#2B5F3A] rounded-[1.5rem] sm:rounded-[2.5rem] p-5 sm:p-10 md:p-16 overflow-hidden">
            {/* Decorative concentric circles */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-20 hidden md:block">
              <div className="size-[400px] border border-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="size-[600px] border border-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="size-[800px] border border-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative z-10 flex flex-row items-center justify-between gap-3 md:gap-10">
              <div className="flex-1 max-w-2xl">
                <span className="text-emerald-300 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest mb-1 sm:mb-4 block">
                  Mulai Dari Langkah Yang Tepat
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-6 leading-tight">
                  Masih ragu? Konsultasi dulu.
                </h2>
                <p className="text-emerald-50 text-[11px] sm:text-sm md:text-base lg:text-lg leading-snug opacity-90 max-w-xl line-clamp-2 sm:line-clamp-none">
                  Chat admin untuk detail level, jadwal, dan biaya supaya anak mulai dari titik yang tepat.
                </p>
              </div>

              <div className="flex flex-col items-end gap-1.5 sm:gap-3 shrink-0">
                <Link
                  href={links.consultation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-10 sm:size-16 bg-white rounded-xl sm:rounded-2xl text-emerald-800 hover:scale-105 transition-transform shadow-xl"
                  aria-label="Konsultasi via WhatsApp"
                >
                  <MessageCircle className="size-5 sm:size-7" />
                </Link>
                <p className="text-white font-medium tracking-wide text-[10px] sm:text-xs md:text-sm text-right">
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
