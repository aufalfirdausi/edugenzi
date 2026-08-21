export type Program = {
  slug: "coding-ai" | "graphic-design-3d" | "robotics-iot" | "public-speaking";
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  highlights: { title: string; desc: string }[];
  outcomes: string[];
  whoFor: string[];
  projectIdeas: string[];
};

export const programs: Program[] = [
  {
    slug: "graphic-design-3d",
    title: "Design Grafis & 3D",
    shortTitle: "Design & 3D",
    tagline: "Dari coretan ide sampai karya visual yang bisa dipamerkan — untuk anak SD sampai remaja SMA.",
    description:
      "Siswa belajar mengubah ide jadi karya visual, mulai dari desain poster dan logo sederhana, sampai eksplorasi model 3D. Materinya disesuaikan bertahap sesuai usia dan kemampuan anak, dengan fokus melatih selera visual dan keberanian bereksplorasi.",
    highlights: [
      { title: "Poster Event Sekolah", desc: "Mampu membuat karya desain dasar seperti poster dan logo" },
      { title: "Logo & Mockup Sederhana", desc: "Memahami prinsip visual: warna, layout, dan tipografi" },
      { title: "Model 3D Karakter / Objek", desc: "Mengenal dasar pemodelan 3D" },
    ],
    outcomes: [
      "Mampu membuat karya desain dasar seperti poster dan logo",
      "Memahami prinsip visual: warna, layout, dan tipografi",
      "Mengenal dasar pemodelan 3D",
    ],
    whoFor: [
      "Suka menggambar, desain, atau eksplorasi visual",
      "Ingin punya portofolio kreatif untuk sekolah atau kompetisi",
      "Penasaran dengan dunia desain 3D",
    ],
    projectIdeas: ["Poster Event Sekolah", "Logo & Mockup Sederhana", "Model 3D Karakter/Objek"],
  },
  {
    slug: "coding-ai",
    title: "Coding & AI",
    shortTitle: "Coding & AI",
    tagline: "Dari langkah pertama coding sampai proyek AI pertama siswa — untuk anak SD sampai remaja SMA.",
    description:
      "Siswa belajar berpikir logis dan terstruktur lewat pemrograman — dimulai dari dasar untuk pemula, lalu bertahap mengenal konsep AI sederhana lewat proyek yang relevan dengan kehidupan sehari-hari.",
    highlights: [
      { title: "Materi Pemula", desc: "Belajar langkah demi langkah untuk pemula" },
      { title: "Karya Nyata", desc: "Setiap tahap belajar menghasilkan karya nyata: game, animasi, atau aplikasi sederhana" },
      { title: "Logika Pemrograman", desc: "Latih problem solving dan logika" },
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
    projectIdeas: ["Mini Game: Space Runner", "Chatbot sederhana", "Aplikasi edukasi mini"],
  },
  {
    slug: "robotics-iot",
    title: "Robotika & IoT",
    shortTitle: "Robotics & IoT",
    tagline: "Rakit, program, dan kendalikan perangkat cerdas — untuk anak SD sampai remaja SMA.",
    description:
      "Siswa belajar merakit dan memprogram perangkat sederhana — dari lampu otomatis sampai robot dasar. Program ini menggabungkan sains, teknik, dan pemrograman lewat praktik langsung menggunakan tangan.",
    highlights: [
      { title: "Praktik Langsung", desc: "Hands-on: merakit + praktik langsung" },
      { title: "Perangkat Keras", desc: "Pengenalan sensor, aktuator, dan logika kontrol" },
      { title: "Internet of Things", desc: "Konsep IoT yang mudah dipahami" },
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
    projectIdeas: ["Lampu Otomatis Sederhana", "Alarm Sensor Gerak", "Robot Mini Line Follower"],
  },
  {
    slug: "public-speaking",
    title: "Public Speaking",
    shortTitle: "Public Speaking",
    tagline: "Latih percaya diri, komunikasi, dan berani tampil — untuk anak SD sampai remaja SMA.",
    description:
      "Siswa dilatih berani bicara di depan orang lain — mulai dari bercerita, presentasi sederhana, sampai tampil percaya diri di depan kelas. Cocok untuk siswa pemalu maupun yang sudah percaya diri tapi ingin lebih terstruktur.",
    highlights: [
      { title: "Latihan Terstruktur", desc: "Latihan bertahap dan terstruktur" },
      { title: "Praktik Tampil", desc: "Latihan tampil langsung di depan teman sekelas" },
      { title: "Penyampaian Pesan", desc: "Teknik penyampaian pesan" }
    ],
    outcomes: ["Lebih percaya diri saat presentasi", "Mampu menyusun pesan dengan jelas", "Berani tampil di depan umum"],
    whoFor: [
      "Anak & remaja yang ingin lebih percaya diri",
      "Sering presentasi di sekolah",
      "Ingin kemampuan komunikasi yang kuat",
    ],
    projectIdeas: ["Presentasi 3 Menit", "Storytelling", "Pitch Ide Sederhana"],
  },
];

export const programBySlug = Object.fromEntries(programs.map((p) => [p.slug, p])) as Record<
  Program["slug"],
  Program
>;

