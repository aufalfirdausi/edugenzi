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
      <section className="pt-6 sm:pt-12 lg:pt-32 pb-12 lg:pb-16">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-3 sm:gap-12 items-start">
            {/* Left Column (Typography & CTA) */}
            <ScrollReveal direction="right" className="col-span-7 md:col-span-6 flex flex-col z-10">
              <h1 className="font-[var(--font-display)] text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-slate-900 ">
                Kenali Edugenzi<br />Lebih Dekat
              </h1>
              <p className="mt-2 sm:mt-6 mb-6 sm:mb-10 text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed">
                Temukan Visi, Misi, dan Komitmen Kami Membentuk Generasi Digital yang Percaya Diri
              </p>
              <Link
                href="#filosofi-logo"
                className="inline-block w-fit px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3 md:py-4 lg:py-5 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors shadow-md"
              >
                Pelajari Selengkapnya
              </Link>

              <div className="relative w-full max-w-[12rem] sm:max-w-xs aspect-square mt-8 sm:mt-16 bg-white rounded-2xl sm:rounded-[40px] shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <Image src="/logo-edugenzi.png" alt="Logo Edugenzi" fill className="object-contain p-4" />
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column (Image with Glow Effect) */}
            <ScrollReveal direction="left" className="col-span-5 md:col-span-6 relative">
              <div className="relative">
                {/* Glowing Background Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 via-white to-orange-100 opacity-70 blur-3xl -z-10 rounded-full" />

                {/* Image Placeholder */}
                <div className="aspect-[1/1] w-full bg-slate-200 rounded-[2rem] shadow-lg relative overflow-hidden">
                  <Image src="/hero-tentang-kami.png" alt="Hero Tentang Kami" fill className="object-cover" />
                </div>
              </div>

              <div className="mt-16">
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4">Tentang Edugenzi</h3>
                <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed mb-4">
                  Edugenzi adalah tempat belajar yang membantu anak mengembangkan kreativitas, logika, komunikasi, dan keterampilan teknologi melalui pengalaman belajar yang menyenangkan, interaktif, dan berbasis proyek nyata.
                </p>
                <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
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
            <h2 className="font-[var(--font-display)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-slate-900 mb-16">
              Filosofi Logo Edugenzi
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {/* 1 */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Image src="/hexagon.png" alt="Hexagon Segi Enam" width={24} height={24} className="object-contain w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-base md:text-lg lg:text-xl mb-1">Hexagon Segi Enam</h3>
                    <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">Melambangkan struktur yang kuat, efisiensi, dan keterhubungan teknologi dengan kreativitas yang tak terbatas.</p>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Image src="/tumpukan-buku.png" alt="Tumpukan Buku" width={24} height={24} className="object-contain w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-base md:text-lg lg:text-xl mb-1">Tumpukan Buku</h3>
                    <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">Simbol pengetahuan mendalam dan fondasi belajar yang selalu kami kedepankan dalam setiap program.</p>
                  </div>
                </div>
                {/* 3 */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Image src="/huruf-e.png" alt="Huruf E" width={24} height={24} className="object-contain w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-base md:text-lg lg:text-xl mb-1">Huruf E</h3>
                    <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">Representasi dari Edugenzi; ekosistem pendidikan (Education) yang adaptif terhadap perubahan zaman.</p>
                  </div>
                </div>
                {/* 4 */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Image src="/wajah-tersenyum.png" alt="Wajah Senyum" width={24} height={24} className="object-contain w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-base md:text-lg lg:text-xl mb-1">Wajah Senyum</h3>
                    <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">Pengingat bahwa proses belajar harus selalu menyenangkan, positif, dan ramah bagi anak-anak.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up">
            <p className="text-center text-slate-600 max-w-2xl mx-auto leading-relaxed text-[11px] sm:text-sm md:text-base lg:text-lg italic">
              Logo ini bukan sekadar gambar, melainkan representasi dari komitmen kami untuk terus mendidik generasi masa depan yang cerdas, kreatif, dan berkarakter.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Section: Sambutan dari Pendiri */}
      <section className="py-12 md:py-24">
        <Container>
          <ScrollReveal direction="up">
            <h2 className="font-[var(--font-display)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-slate-900 mb-16">
              Sambutan dari Pendiri Edugenzi
            </h2>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal direction="up" className="w-1/2 max-w-[200px] sm:max-w-[240px] md:max-w-none md:w-5/12 shrink-0">
              <div className="aspect-[4/5] bg-slate-200 rounded-3xl w-full shadow-lg relative overflow-hidden">
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <Image src="/founder.png" alt="Founder Edugenzi" fill className="object-cover" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" className="w-full md:w-7/12">
              <div className="border-l-4 border-[var(--brand)] pl-4 sm:pl-6 lg:pl-8 space-y-4 sm:space-y-6">
                <p className="text-[11px] sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-700">
                  "Sejak awal mula kami mendirikan Edugenzi, mimpi kami sangatlah sederhana: kami ingin anak-anak Indonesia, khususnya di Aceh, tidak hanya menjadi konsumen teknologi, tetapi mampu menjadi produsen karya digital yang bermakna. Dunia bergerak begitu cepat, dan pendidikan tradisional seringkali kesulitan untuk mengejar ketertinggalan tersebut."
                </p>
                <p className="text-[11px] sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-700">
                  "Kami merancang ekosistem belajar ini bukan hanya untuk mencetak programmer atau desainer hebat, melainkan untuk melatih cara berpikir kritis, memecahkan masalah, dan menumbuhkan rasa percaya diri yang tinggi saat mereka berkarya."
                </p>
                <p className="text-[11px] sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-700">
                  "Mari bersama-sama kita persiapkan mereka hari ini, agar mereka siap memimpin masa depannya esok hari."
                </p>
                <div className="pt-4">
                  <p className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-slate-900 font-[var(--font-display)]">
                    Semoga Raharja Wijaya
                  </p>
                  <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-500 font-medium">Founder Edugenzi</p>
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
                <h2 className="font-[var(--font-display)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-6">
                  Visi Edugenzi
                </h2>
                <p className="text-[11px] sm:text-sm md:text-xl lg:text-2xl leading-relaxed text-slate-700">
                  "Menjadi lembaga pendidikan teknologi dan bisnis yang menumbuhkan anak Indonesia sebagai pencipta karya digital yang percaya diri, bertanggung jawab, dan siap menghadapi perubahan zaman."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                <h2 className="font-[var(--font-display)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-8 text-center">
                  Misi Edugenzi
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                  <li className="flex gap-2 sm:gap-4 items-start">
                    <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5 sm:mt-1 w-4 h-4 sm:w-6 sm:h-6" />
                    <span className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed">
                      Menyelenggarakan pembelajaran teknologi berjenjang yang terukur, sesuai tahap perkembangan usia, dan berbasis proyek nyata.
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-4 items-start">
                    <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5 sm:mt-1 w-4 h-4 sm:w-6 sm:h-6" />
                    <span className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed">
                      Menghadirkan pengalaman belajar yang aman, menyenangkan, dan menghargai proses, tidak hanya hasil akhir.
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-4 items-start">
                    <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5 sm:mt-1 w-4 h-4 sm:w-6 sm:h-6" />
                    <span className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed">
                      Membangun kemitraan dengan sekolah dan orang tua sebagai satu kesatuan ekosistem pendukung perkembangan anak.
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-4 items-start">
                    <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5 sm:mt-1 w-4 h-4 sm:w-6 sm:h-6" />
                    <span className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed">
                      Mendokumentasikan karya siswa sebagai portofolio digital yang dapat dibawa dan dikembangkan hingga jenjang pendidikan berikutnya.
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
              <h2 className="font-[var(--font-display)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-6">
                Fondasi Kurikulum Edugenzi
              </h2>
              <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                Kami membangun standar pembelajaran yang memastikan setiap anak mendapatkan perhatian, praktik nyata, serta dokumentasi progres yang jelas.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 h-full">
                <Heart className="text-emerald-600 mb-3 sm:mb-6 w-6 h-6 sm:w-9 sm:h-9" />
                <h3 className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-slate-900 mb-3">Edugenzi Care</h3>
                <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                  Laporan rutin bulanan kepada orang tua mengenai perkembangan anak, bukan hanya dari sisi nilai tapi juga karakter dan minat.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 2 */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 h-full">
                <Wrench className="text-blue-600 mb-3 sm:mb-6 w-6 h-6 sm:w-9 sm:h-9" />
                <h3 className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-slate-900 mb-3">Project-Based Practice</h3>
                <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                  Setiap materi selalu ditutup dengan pembuatan proyek riil. Teori hanya 20%, sementara praktik dan eksekusi memakan porsi 80%.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 3 */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 h-full">
                <Trophy className="text-orange-500 mb-3 sm:mb-6 w-6 h-6 sm:w-9 sm:h-9" />
                <h3 className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-slate-900 mb-3">Edugenzi Achievement Card (EAC)</h3>
                <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                  Buku progres digital yang mencatat pencapaian, level, dan badge khusus yang didapat anak setiap menyelesaikan milestones.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 4 */}
            <ScrollReveal direction="up" delay={400}>
              <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 h-full">
                <Folder className="text-sky-500 mb-3 sm:mb-6 w-6 h-6 sm:w-9 sm:h-9" />
                <h3 className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-slate-900 mb-3">Digital Portfolio</h3>
                <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
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
            <h2 className="font-[var(--font-display)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-slate-900 mb-16">
              Kenapa Memilih Edugenzi?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-md border border-slate-100 text-center h-full flex flex-col items-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-3 sm:mb-6">
                  <Sparkles className="w-5 h-5 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-slate-900 mb-3">Praktis & Relevan</h3>
                <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                  Materi yang diajarkan selalu menggunakan tools standar industri yang sangat relevan dengan kebutuhan masa kini.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 2 */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-md border border-slate-100 text-center h-full flex flex-col items-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center mb-3 sm:mb-6">
                  <UserCheck className="w-5 h-5 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-slate-900 mb-3">Pendekatan Personal</h3>
                <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                  Kelas kecil maksimal 6 anak, memastikan setiap instruktur bisa fokus membimbing perkembangan individual masing-masing.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 3 */}
            <ScrollReveal direction="up" delay={300} className="col-span-2 md:col-span-1">
              <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-md border border-slate-100 text-center h-full flex flex-col items-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-orange-50 text-orange-500 mx-auto flex items-center justify-center mb-3 sm:mb-6">
                  <TrendingUp className="w-5 h-5 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-slate-900 mb-3">Kurikulum Berjenjang</h3>
                <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
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
              <h2 className="font-[var(--font-display)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-8">
                Siap Kenalkan Anak dengan Dunia Teknologi?
              </h2>
              <ButtonLink
                href={links.consultation}
                className="bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full px-4 py-2 sm:px-6 sm:py-3.5 md:px-8 md:py-4 text-[10px] sm:text-base md:text-lg font-bold w-full md:w-auto text-center"
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
