export type Program = {
  slug: "coding-ai" | "graphic-design-3d" | "robotics-iot" | "public-speaking";
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  highlights: string[];
  outcomes: string[];
  whoFor: string[];
  projectIdeas: string[];
};

export const programs: Program[] = [
  {
    slug: "coding-ai",
    title: "Coding & AI",
    shortTitle: "Coding & AI",
    tagline: "Dari dasar pemrograman sampai penerapan AI yang relevan.",
    description:
      "Program Coding & AI dirancang untuk membekali peserta dengan keterampilan berpikir komputasional serta pengenalan dunia kecerdasan buatan. Peserta akan memulai dari dasar-dasar pemrograman hingga penerapan AI dalam kehidupan.",
    highlights: [
      "Belajar langkah demi langkah untuk pemula",
      "Project-based learning (belajar lewat proyek nyata)",
      "Latih problem solving dan logika",
    ],
    outcomes: [
      "Memahami konsep dasar pemrograman",
      "Mampu membuat proyek sederhana (game/aplikasi)",
      "Mengenal konsep AI dan contoh penerapannya",
    ],
    whoFor: [
      "Anak & remaja yang ingin mulai belajar coding dari nol",
      "Suka tantangan logika dan pemecahan masalah",
      "Ingin membangun portofolio proyek sejak dini",
    ],
    projectIdeas: ["Mini game sederhana", "Chatbot sederhana", "Aplikasi edukasi mini"],
  },
  {
    slug: "graphic-design-3d",
    title: "Desain Grafis & 3D",
    shortTitle: "Design & 3D",
    tagline: "Ubah ide jadi karya visual: desain hingga model 3D interaktif.",
    description:
      "Program Desain Grafis & 3D dirancang untuk melatih kreativitas sekaligus keterampilan digital anak dan remaja. Peserta belajar mengubah ide menjadi karya visual menarik, dari desain sederhana hingga model 3D interaktif.",
    highlights: [
      "Kreativitas + skill digital yang relevan",
      "Latihan portofolio sejak awal",
      "Pendampingan bertahap",
    ],
    outcomes: ["Mampu membuat karya desain dasar", "Memahami prinsip visual", "Membuat model 3D sederhana"],
    whoFor: [
      "Suka menggambar, desain, atau visual",
      "Ingin punya portofolio kreatif untuk sekolah/kompetisi",
      "Penasaran dengan dunia 3D",
    ],
    projectIdeas: ["Poster event sekolah", "Logo sederhana", "Model 3D karakter/objek"],
  },
  {
    slug: "robotics-iot",
    title: "Robotika & IoT",
    shortTitle: "Robotics & IoT",
    tagline: "Rakit, program, dan kendalikan perangkat cerdas.",
    description:
      "Program Robotika & IoT mengajak anak dan remaja menjelajahi teknologi masa depan dengan merakit, memprogram, dan mengendalikan perangkat cerdas. Peserta belajar bagaimana robot dan perangkat dapat bekerja otomatis.",
    highlights: [
      "Hands-on: merakit + praktik langsung",
      "Pengenalan sensor, aktuator, dan logika kontrol",
      "Konsep IoT yang mudah dipahami",
    ],
    outcomes: [
      "Mengenal komponen dasar robotika",
      "Membuat proyek perangkat sederhana",
      "Memahami konsep otomasi dan IoT",
    ],
    whoFor: [
      "Suka merakit dan bereksperimen",
      "Tertarik perangkat otomatis",
      "Ingin belajar teknologi masa depan secara praktis",
    ],
    projectIdeas: ["Lampu otomatis sederhana", "Alarm sensor gerak", "Robot mini line follower (konsep)"],
  },
  {
    slug: "public-speaking",
    title: "Public Speaking",
    shortTitle: "Public Speaking",
    tagline: "Latih percaya diri, komunikasi, dan berani tampil.",
    description:
      "Program Public Speaking dirancang untuk melatih kepercayaan diri, kemampuan komunikasi, dan keterampilan berbicara di depan umum. Peserta belajar menyampaikan ide dengan jelas, menarik, dan penuh percaya diri.",
    highlights: ["Latihan bertahap dan terstruktur", "Teknik penyampaian pesan", "Build confidence lewat praktik"],
    outcomes: ["Lebih percaya diri saat presentasi", "Mampu menyusun pesan dengan jelas", "Berani tampil di depan umum"],
    whoFor: [
      "Anak & remaja yang ingin lebih percaya diri",
      "Sering presentasi di sekolah",
      "Ingin kemampuan komunikasi yang kuat",
    ],
    projectIdeas: ["Presentasi 3 menit", "Storytelling", "Pitch ide sederhana"],
  },
];

export const programBySlug = Object.fromEntries(programs.map((p) => [p.slug, p])) as Record<
  Program["slug"],
  Program
>;

