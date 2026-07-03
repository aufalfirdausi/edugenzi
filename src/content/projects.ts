export type ProjectItem = {
  title: string;
  program: string;
  description: string;
  tags: string[];
};

/**
 * Placeholder showcase. Replace with real student projects + screenshots.
 */
export const projects: ProjectItem[] = [
  {
    title: "Mini Game: Space Runner",
    program: "Coding & AI",
    description: "Belajar logika, loop, dan scoring lewat game 2D sederhana.",
    tags: ["Game", "Logic", "Project"],
  },
  {
    title: "Poster Kampanye Sekolah",
    program: "Desain Grafis & 3D",
    description: "Dari layout, typography, hingga warna yang konsisten.",
    tags: ["Design", "Typography", "Brand"],
  },
  {
    title: "Lampu Otomatis Berbasis Sensor",
    program: "Robotika & IoT",
    description: "Mengenal sensor, output, dan konsep otomasi perangkat.",
    tags: ["Sensor", "Automation", "IoT"],
  },
  {
    title: "Storytelling 3 Menit",
    program: "Public Speaking",
    description: "Melatih struktur cerita, intonasi, dan ekspresi panggung.",
    tags: ["Confidence", "Speech", "Stage"],
  },
];

