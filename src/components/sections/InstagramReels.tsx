import Image from "next/image";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ButtonLink } from "@/components/ui/Button";

const MOCK_REELS = [
  {
    id: "1",
    mediaUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    caption: "Karya Game 2D buatan siswa Edugenzi! 🚀 #Edugenzi #CodingAnak",
    permalink: "https://instagram.com"
  },
  {
    id: "2",
    mediaUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    caption: "Presentasi proyek akhir kelas coding! Bangga banget liat percaya dirinya ✨",
    permalink: "https://instagram.com"
  },
  {
    id: "3",
    mediaUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    caption: "Mendesain karakter 3D pertama kali di kelas Design 3D. Seru abis! 🎨",
    permalink: "https://instagram.com"
  },
  {
    id: "4",
    mediaUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    caption: "Merakit robot pintar menggunakan Arduino. IoT for kids! 🤖",
    permalink: "https://instagram.com"
  },
  {
    id: "5",
    mediaUrl: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=600&auto=format&fit=crop",
    caption: "Latihan public speaking, siap jadi presenter masa depan! 🎤",
    permalink: "https://instagram.com"
  }
];

// Fallback interface representing the Behold response structure
interface BeholdPost {
  id: string;
  mediaUrl: string;
  thumbnailUrl?: string;
  permalink: string;
  caption: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  sizes?: {
    large?: { mediaUrl: string };
    medium?: { mediaUrl: string };
  };
}

async function getReelsData() {
  const url = process.env.NEXT_PUBLIC_BEHOLD_URL;
  if (!url) return null;

  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const data = await res.json();
    
    // Ensure we have an array
    if (Array.isArray(data)) return data as BeholdPost[];
    if (data.posts && Array.isArray(data.posts)) return data.posts as BeholdPost[];
    
    return null;
  } catch (error) {
    console.error("Failed to fetch Behold Instagram feed:", error);
    return null;
  }
}

export async function InstagramReels() {
  const fetchedData = await getReelsData();
  
  // Transform or fallback
  const reels = fetchedData ? fetchedData.slice(0, 5).map(item => {
    // If it's a video, we must use thumbnailUrl so we get a static cover instead of an mp4 file.
    let resolvedMediaUrl = item.mediaUrl;
    if (item.mediaType === "VIDEO" && item.thumbnailUrl) {
      resolvedMediaUrl = item.thumbnailUrl;
    } else if (item.sizes?.large?.mediaUrl) {
      resolvedMediaUrl = item.sizes.large.mediaUrl;
    }

    return {
      id: item.id,
      mediaUrl: resolvedMediaUrl,
      caption: item.caption || "",
      permalink: item.permalink || "https://instagram.com/edugenzi",
      isVideo: item.mediaType === "VIDEO"
    };
  }) : MOCK_REELS.map(r => ({ ...r, isVideo: true })); // default mock to true for UI play icons

  return (
    <section id="projects" className="mt-16 scroll-mt-24 sm:mt-20">
      <Container>
        <ScrollReveal direction="up" className="mb-10 sm:mb-12">
          <SectionHeading
            eyebrow="Karya Siswa"
            color="green"
            title="Bukti belajar yang nyata: karya & proyek di Instagram"
            description="Lihat langsung hasil karya dan proses belajar siswa-siswi Edugenzi."
            align="center"
          />
        </ScrollReveal>

        <div className="relative">
          {/* Mobile Snap & Desktop Flex */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-8 px-4 -mx-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:flex lg:justify-center">
            {reels.map((reel, idx) => (
              <ScrollReveal
                key={reel.id}
                direction="up"
                delay={idx * 100}
                className="snap-center shrink-0 w-[240px] sm:w-auto sm:shrink lg:flex-1 lg:max-w-[260px]"
              >
                <a
                  href={reel.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-slate-100 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Image
                    src={reel.mediaUrl}
                    alt="Instagram Reel"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay with Conditionally Rendered Play Icon */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {reel.isVideo && (
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Play className="size-6 text-[var(--brand)] fill-[var(--brand)] ml-1" />
                      </div>
                    )}
                  </div>

                  {/* Gradient Caption Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12">
                    <p className="text-white text-sm font-medium line-clamp-2 leading-snug">
                      {reel.caption}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal direction="up" delay={200} className="mt-8 flex justify-center">
          <ButtonLink
            href="https://instagram.com"
            target="_blank"
            variant="secondary"
          >
            Lihat Selengkapnya di Instagram @edugenzi
          </ButtonLink>
        </ScrollReveal>
      </Container>
    </section>
  );
}
