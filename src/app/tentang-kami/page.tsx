import Image from "next/image";
import { Metadata } from "next";
import { OrganicBackground } from "@/components/ui/OrganicBackground";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/links";
import {
  CheckCircle2,
  Heart,
  Wrench,
  Trophy,
  Folder,
  Sparkles,
  UserCheck,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali lebih dekat Edugenzi, visi, misi, dan cerita di balik berdirinya lembaga kursus teknologi untuk anak dan remaja di Banda Aceh.",
};

export default function TentangKamiPage() {
  return (
    <div className="pb-0 relative overflow-hidden">
      <OrganicBackground />

      {/* 1. Hero Section */}
      <section className="pt-20 lg:pt-32 pb-12 lg:pb-16">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column (Typography & CTA) */}
            <ScrollReveal direction="right">
              <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                Kenali Edugenzi<br />Lebih Dekat
              </h1>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                Temukan Visi, Misi, dan Komitmen Kami Membentuk Generasi Digital yang Percaya Diri
              </p>
              <Link
                href="#filosofi-logo"
                className="inline-block mt-8 px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors shadow-md"
              >
                Pelajari Selengkapnya
              </Link>

              <div className="relative w-64 h-64 md:w-80 md:h-80 mt-55 bg-white rounded-[40px] shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <Image src="/logo-edugenzi.png" alt="Logo Edugenzi" fill className="object-contain p-4" />
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column (Image with Glow Effect) */}
            <ScrollReveal direction="left">
              <div className="relative">
                {/* Glowing Background Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 via-white to-orange-100 opacity-70 blur-3xl -z-10 rounded-full" />

                {/* Image Placeholder */}
                <div className="aspect-[4/3] w-full bg-slate-200 rounded-[2rem] shadow-lg relative overflow-hidden">
                  <Image src="/hero-tentangkami.jpg" alt="Edugenzi" fill className="object-cover" />
                </div>
              </div>

              <div className="mt-16">
                <h3 className="font-bold text-slate-900 text-2xl mb-4">Tentang Edugenzi</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Edugenzi adalah tempat belajar yang membantu anak mengembangkan kreativitas, logika, komunikasi, dan keterampilan teknologi melalui pengalaman belajar yang menyenangkan, interaktif, dan berbasis proyek nyata.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Kami percaya bahwa setiap anak memiliki potensi untuk menjadi pencipta, bukan sekadar pengguna teknologi.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Filosofi Logo */}
      <section id="filosofi-logo" className="py-12 md:py-20 bg-teal-50/30">
        <Container>
          <ScrollReveal direction="up">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
              Filosofi Logo Edugenzi
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <div className="space-y-6">
                {/* 1 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Image src="/hexagon.png" alt="Hexagon Segi Enam" width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Hexagon Segi Enam</h3>
                    <p className="text-slate-600 leading-relaxed">Melambangkan struktur yang kuat, efisiensi, dan keterhubungan teknologi dengan kreativitas yang tak terbatas.</p>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Image src="/tumpukan-buku.png" alt="Tumpukan Buku" width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Tumpukan Buku</h3>
                    <p className="text-slate-600 leading-relaxed">Simbol pengetahuan mendalam dan fondasi belajar yang selalu kami kedepankan dalam setiap program.</p>
                  </div>
                </div>
                {/* 3 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Image src="/huruf-e.png" alt="Huruf E" width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Huruf E</h3>
                    <p className="text-slate-600 leading-relaxed">Representasi dari Edugenzi; ekosistem pendidikan (Education) yang adaptif terhadap perubahan zaman.</p>
                  </div>
                </div>
                {/* 4 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Image src="/wajah-tersenyum.png" alt="Wajah Senyum" width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Wajah Senyum</h3>
                    <p className="text-slate-600 leading-relaxed">Pengingat bahwa proses belajar harus selalu menyenangkan, positif, dan ramah bagi anak-anak.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up">
            <p className="text-center text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg italic">
              Logo ini bukan sekadar gambar, melainkan representasi dari komitmen kami untuk terus mendidik generasi masa depan yang cerdas, kreatif, dan berkarakter.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Section: Sambutan dari Pendiri */}
      <section className="py-12 md:py-24">
        <Container>
          <ScrollReveal direction="up">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
              Sambutan dari Pendiri Edugenzi
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal direction="right" className="md:col-span-5 order-2 md:order-1">
              <div className="aspect-[4/5] bg-slate-200 rounded-3xl w-full shadow-lg relative overflow-hidden">
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <Image src="/founder.png" alt="Founder Edugenzi" fill className="object-cover" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="md:col-span-7 order-1 md:order-2">
              <div className="border-l-4 border-emerald-600 pl-6 lg:pl-8 space-y-6">
                <p className="text-lg leading-relaxed text-slate-700">
                  "Sejak awal mula kami mendirikan Edugenzi, mimpi kami sangatlah sederhana: kami ingin anak-anak Indonesia, khususnya di Aceh, tidak hanya menjadi konsumen teknologi, tetapi mampu menjadi produsen karya digital yang bermakna. Dunia bergerak begitu cepat, dan pendidikan tradisional seringkali kesulitan untuk mengejar ketertinggalan tersebut."
                </p>
                <p className="text-lg leading-relaxed text-slate-700">
                  "Kami merancang ekosistem belajar ini bukan hanya untuk mencetak programmer atau desainer hebat, melainkan untuk melatih cara berpikir kritis, memecahkan masalah, dan menumbuhkan rasa percaya diri yang tinggi saat mereka berkarya."
                </p>
                <p className="text-lg leading-relaxed text-slate-700">
                  "Mari bersama-sama kita persiapkan mereka hari ini, agar mereka siap memimpin masa depannya esok hari."
                </p>
                <div className="pt-4">
                  <p className="font-bold text-xl text-slate-900 font-[var(--font-display)]">
                    Semoga Raharja Wijaya
                  </p>
                  <p className="text-slate-500 font-medium">Founder Edugenzi</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 3. Section: Visi & Misi */}
      <section className="py-12 md:py-24 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Visi Edugenzi
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                  "Menjadi ekosistem pendidikan teknologi terbaik di Aceh yang mencetak generasi muda yang kreatif, inovatif, dan siap menghadapi tantangan masa depan."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                <h2 className="font-[var(--font-display)] text-3xl font-bold text-slate-900 mb-8 text-center">
                  Misi Edugenzi
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg text-slate-700 leading-relaxed">
                      Menyediakan kurikulum berbasis proyek (Project-Based Learning) yang relevan dengan perkembangan industri.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg text-slate-700 leading-relaxed">
                      Menciptakan lingkungan belajar yang interaktif, menyenangkan, kolaboratif, dan suportif.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg text-slate-700 leading-relaxed">
                      Mengembangkan bukan hanya hard skills (coding, desain) tetapi juga soft skills (komunikasi, problem solving).
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg text-slate-700 leading-relaxed">
                      Mendampingi setiap anak secara personal agar mereka dapat menemukan minat dan bakat uniknya.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg text-slate-700 leading-relaxed">
                      Membangun kolaborasi erat dengan orang tua untuk mengoptimalkan potensi anak di dalam dan luar kelas.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 4. Section: Fondasi Kurikulum */}
      <section className="py-12 md:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Fondasi Kurikulum Edugenzi
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Kami membangun standar pembelajaran yang memastikan setiap anak mendapatkan perhatian, praktik nyata, serta dokumentasi progres yang jelas.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 h-full">
                <Heart className="text-emerald-600 mb-6" size={36} />
                <h3 className="font-bold text-xl text-slate-900 mb-3">Edugenzi Care</h3>
                <p className="text-slate-600 leading-relaxed">
                  Laporan rutin bulanan kepada orang tua mengenai perkembangan anak, bukan hanya dari sisi nilai tapi juga karakter dan minat.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 2 */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 h-full">
                <Wrench className="text-blue-600 mb-6" size={36} />
                <h3 className="font-bold text-xl text-slate-900 mb-3">Project-Based Practice</h3>
                <p className="text-slate-600 leading-relaxed">
                  Setiap materi selalu ditutup dengan pembuatan proyek riil. Teori hanya 20%, sementara praktik dan eksekusi memakan porsi 80%.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 3 */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 h-full">
                <Trophy className="text-orange-500 mb-6" size={36} />
                <h3 className="font-bold text-xl text-slate-900 mb-3">Edugenzi Achievement Card (EAC)</h3>
                <p className="text-slate-600 leading-relaxed">
                  Buku progres digital yang mencatat pencapaian, level, dan badge khusus yang didapat anak setiap menyelesaikan milestones.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 4 */}
            <ScrollReveal direction="up" delay={400}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 h-full">
                <Folder className="text-sky-500 mb-6" size={36} />
                <h3 className="font-bold text-xl text-slate-900 mb-3">Digital Portfolio</h3>
                <p className="text-slate-600 leading-relaxed">
                  Hasil akhir dari setiap karya disimpan dengan rapi dalam bentuk portofolio digital yang dapat dibanggakan oleh anak dan orang tua.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 5. Section: Kenapa Memilih Edugenzi */}
      <section className="py-12 md:py-24 bg-slate-50">
        <Container>
          <ScrollReveal direction="up">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
              Kenapa Memilih Edugenzi?
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-6">
                  <Sparkles size={32} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">Praktis & Relevan</h3>
                <p className="text-slate-600 leading-relaxed">
                  Materi yang diajarkan selalu menggunakan tools standar industri yang sangat relevan dengan kebutuhan masa kini.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 2 */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center mb-6">
                  <UserCheck size={32} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">Pendekatan Personal</h3>
                <p className="text-slate-600 leading-relaxed">
                  Kelas kecil maksimal 6 anak, memastikan setiap instruktur bisa fokus membimbing perkembangan individual masing-masing.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 3 */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-500 mx-auto flex items-center justify-center mb-6">
                  <TrendingUp size={32} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">Kurikulum Berjenjang</h3>
                <p className="text-slate-600 leading-relaxed">
                  Dari level pemula hingga mahir, dirancang khusus untuk memastikan anak tumbuh seiring bertambahnya usia.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 6. Section: CTA Block */}
      <section className="py-16 md:py-24 bg-slate-900">
        <Container>
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto px-4">
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Siap Kenalkan Anak dengan Dunia Teknologi?
              </h2>
              <ButtonLink
                href={links.consultation}
                className="bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-bold w-full md:w-auto text-center"
                external
              >
                Konsultasi via WhatsApp
              </ButtonLink>
            </div>
          </ScrollReveal>
        </Container>
      </section>

    </div>
  );
}
