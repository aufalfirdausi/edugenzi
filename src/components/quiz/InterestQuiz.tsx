"use client";

import { useState, useRef } from "react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

export const CATEGORIES = [
  {
    id: "design", label: "Desain & Kreatif Visual", program: "Graphic Design & 3D",
    color: "var(--orange)", hex: "#F2954D", emoji: "🎨",
    oneLiner: "Punya kecenderungan kuat di dunia visual & kreatif!",
    statements: [
      "{name} suka menggambar, mewarnai, atau bikin sesuatu yang tampilannya menarik dilihat.",
      "{name} sering komentar soal warna, bentuk, atau tampilan sesuatu — misalnya kemasan, poster, atau aplikasi.",
      "{name} senang coba-coba aplikasi edit foto/video atau tools desain di gadget.",
      "{name} bisa fokus lama kalau lagi bikin sesuatu yang sifatnya visual atau kreatif.",
      "{name} suka menata kamar, memilih outfit, atau merapikan barang biar kelihatan bagus."
    ],
    insightSD: "Di usia SD, kecenderungan visual seperti ini biasanya berkembang paling baik lewat eksplorasi bebas — coret-coret, mix warna, susun bentuk tanpa takut salah. Program Graphic Design & 3D level awal mengemas dasar desain lewat project yang menyenangkan, sambil membangun rasa percaya diri berkarya.",
    insightSMP: "Di usia SMP, ketertarikan ini biasanya sudah bisa diarahkan ke tools & teknik yang lebih terstruktur — mulai kenal software desain, prinsip visual, sampai menghasilkan karya yang lebih 'jadi'. Program Graphic Design & 3D level ini fokus membentuk portofolio awal, bukan sekadar hobi coret-coret.",
    programInfo: "Graphic Design & 3D — anak belajar desain lewat project nyata, bukan teori kaku, dan setiap karyanya masuk ke Portfolio Digital yang bisa dilihat orang tua."
  },
  {
    id: "coding", label: "Coding & AI", program: "Coding & AI",
    color: "var(--navy)", hex: "#163C5A", emoji: "💻",
    oneLiner: "Punya kecenderungan kuat di logika & problem solving!",
    statements: [
      "{name} suka nanya 'kok bisa gitu' atau 'gimana cara kerjanya' soal game atau aplikasi yang dipakai.",
      "{name} senang menyusun langkah-langkah, misalnya lewat puzzle, Lego berinstruksi, atau board game strategi.",
      "{name} penasaran gimana cara membuat game atau aplikasi yang ia mainkan.",
      "{name} tetap coba lagi walau sudah gagal berkali-kali, misalnya waktu main game yang levelnya susah.",
      "{name} lebih nyaman dengan angka, pola, atau logika dibanding sekadar menghafal."
    ],
    insightSD: "Anak SD dengan pola pikir seperti ini biasanya cepat menangkap konsep coding kalau dikemas lewat visual & permainan, bukan langsung baris kode. Program Coding & AI level awal membangun computational thinking lewat block-based coding dulu, supaya fondasinya kuat.",
    insightSMP: "Di usia SMP, anak biasanya sudah siap naik level dari logika dasar ke coding yang lebih nyata — mulai kenal bahasa pemrograman sungguhan dan konsep AI sederhana. Ini momen yang pas untuk masuk program Coding & AI level lanjut, sebelum fase SMA yang lebih kompetitif.",
    programInfo: "Coding & AI — dari logika dasar (block-based) sampai pemrograman & konsep AI sederhana, dengan progres yang tercatat di Edugenzi Achievement Card (EAC)."
  },
  {
    id: "robotics", label: "Robotika & IoT", program: "Robotics & IoT",
    color: "var(--green)", hex: "#2FA36B", emoji: "🤖",
    oneLiner: "Punya kecenderungan kuat di bikin & merakit sesuatu yang benar-benar berfungsi!",
    statements: [
      "{name} suka membongkar atau merakit mainan dan alat elektronik di rumah.",
      "{name} tertarik sama robot, drone, atau alat yang bisa bergerak/merespons sendiri.",
      "{name} lebih suka belajar sambil praktik langsung, bukan cuma baca teori.",
      "{name} suka bikin sesuatu dari barang di rumah (kardus, lego, dll) jadi alat atau mainan baru.",
      "{name} penasaran gimana cara kerja alat sehari-hari, misalnya kipas angin atau mainan bertenaga baterai."
    ],
    insightSD: "Anak dengan rasa ingin tahu 'gimana cara kerjanya' seperti ini, di usia SD paling cocok belajar lewat rakit-bongkar yang konkret — robot sederhana, sensor dasar, sirkuit yang hasilnya langsung kelihatan. Program Robotics & IoT level awal fokus di situ: belajar sambil main.",
    insightSMP: "Di usia SMP, ketertarikan pada alat & mekanika ini bisa diarahkan ke project robotika yang lebih kompleks — pemrograman sensor, IoT sederhana, sampai ikut kompetisi. Ini fase penting untuk anak yang suka 'bikin sesuatu benar-benar berfungsi', bukan cuma teori.",
    programInfo: "Robotics & IoT — anak merakit & memprogram alat nyata, dari robot sederhana sampai project IoT, dengan pendampingan Edugenzi Care untuk orang tua di rumah."
  },
  {
    id: "speaking", label: "Public Speaking", program: "Public Speaking",
    color: "var(--sky)", hex: "#3FA9D6", emoji: "🎤",
    oneLiner: "Punya kecenderungan kuat di komunikasi & percaya diri tampil!",
    statements: [
      "{name} senang cerita panjang lebar soal pengalamannya ke orang lain.",
      "{name} cukup percaya diri kalau harus tampil di depan orang banyak.",
      "{name} bisa menyampaikan pendapat dengan cukup jelas, walau kadang belum runtut.",
      "{name} senang jadi 'pemimpin' saat main atau kerja kelompok.",
      "{name} nyaman ngobrol sama orang baru atau di lingkungan baru."
    ],
    insightSD: "Anak SD yang percaya diri bicara & suka cerita seperti ini biasanya berkembang pesat kalau sering dikasih 'panggung' kecil — cerita di depan kelas, presentasi sederhana. Program Public Speaking level Young Presenter fokus membangun keberanian tampil dan menyusun cerita dengan runtut.",
    insightSMP: "Di usia SMP, anak biasanya sudah siap diajak berpikir lebih kritis saat bicara — menyampaikan argumen, berdebat dengan data, bukan cuma bercerita. Program Public Speaking level Little Debater fokus ke situ: bicara yang punya isi, bukan cuma pede tampil.",
    programInfo: "Public Speaking — mulai dari Young Presenter (percaya diri & storytelling) sampai Little Debater (argumentasi & berpikir kritis), sesuai tahap usia anak."
  }
];

export const CHOICES = [
  { v: 1, t: "Tidak Sesuai" },
  { v: 2, t: "Kurang Sesuai" },
  { v: 3, t: "Sesuai" },
  { v: 4, t: "Sangat Sesuai" }
];

export function InterestQuiz() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = Intro, 1 = Quiz, 2 = Result

  // Form State
  const [parentName, setParentName] = useState("");
  const [parentWA, setParentWA] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [school, setSchool] = useState("");
  const [consent, setConsent] = useState(false);
  const [introError, setIntroError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Quiz State
  const [catIndex, setCatIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, (number | null)[]>>({});

  // Result Refs
  const resultCardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleStart = () => {
    if (!parentName || !parentWA || !childName || !childAge || !school) {
      setIntroError("Mohon lengkapi semua kolom di atas dulu, ya.");
      return;
    }
    if (!consent) {
      setIntroError("Mohon centang persetujuan penggunaan data dulu, ya.");
      return;
    }
    setIntroError("");

    const initialAnswers: Record<string, (number | null)[]> = {};
    CATEGORIES.forEach(c => {
      initialAnswers[c.id] = new Array(c.statements.length).fill(null);
    });
    setAnswers(initialAnswers);
    setCurrentStep(1);
  };

  const handleChoice = (catId: string, qIndex: number, val: number) => {
    setAnswers(prev => {
      const newAns = { ...prev };
      newAns[catId] = [...newAns[catId]];
      newAns[catId][qIndex] = val;
      return newAns;
    });
  };

  const submitLeadToSheets = async (topCategoryLabel: string) => {
    const url = process.env.NEXT_PUBLIC_SHEETDB_URL;
    if (!url) {
      console.warn("NEXT_PUBLIC_SHEETDB_URL is not defined.");
      return;
    }

    const leadData = {
      data: [{
        "WALI": parentName,
        "NOMOR-WALI": parentWA,
        "NAMA-SISWA": childName,
        "UMUR_SISWA": childAge,
        "SEKOLAH": school,
        "RESULT_CATEGORY": topCategoryLabel,
        "TIMESTAMP": new Date().toLocaleString("en-GB", { timeZone: "Asia/Jakarta" }).replace(",", "")
      }]
    };

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(leadData)
      });
    } catch (error) {
      console.error("Failed to submit lead data to sheets:", error);
    }
  };

  const handleNextCategory = async () => {
    if (catIndex < CATEGORIES.length - 1) {
      setCatIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIsSubmitting(true);

      const scores: Record<string, number> = {};
      CATEGORIES.forEach(c => {
        scores[c.id] = answers[c.id].reduce((a, b) => (a || 0) + (b || 0), 0) as number;
      });
      const ranked = [...CATEGORIES].sort((a, b) => scores[b.id] - scores[a.id]);
      const topCategoryLabel = ranked[0].label;

      await submitLeadToSheets(topCategoryLabel);

      setIsSubmitting(false);
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackCategory = () => {
    if (catIndex > 0) {
      setCatIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleRestart = () => {
    setParentName("");
    setParentWA("");
    setChildName("");
    setSchool("");
    setChildAge("");
    setConsent(false);
    setCatIndex(0);
    setCurrentStep(0);
  };

  const handleDownloadPDF = async () => {
    if (!resultCardRef.current) return;
    setIsDownloading(true);
    try {
      const dataUrl = await toPng(resultCardRef.current, {
        quality: 1,
        backgroundColor: "#ffffff",
        pixelRatio: 2,
      });

      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Hasil-Asesmen-Edugenzi-${childName.replace(/\s+/g, "-")}.pdf`);
    } catch (error) {
      console.error("Gagal membuat PDF:", error);
      alert("Gagal mengunduh PDF. Silakan coba lagi.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Intro View Render
  if (currentStep === 0) {
    return (
      <section className="py-12 md:py-20">
        <Container>
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
                Kuis Minat & Bakat Edugenzi
              </span>
              <h1 className="font-[var(--font-display)] text-3xl font-bold text-[var(--ink)] mb-4">
                Temukan Arah Belajar yang Paling Cocok untuk Anak Anda
              </h1>
              <p className="text-[var(--muted)] text-sm md:text-base">
                Isi beberapa pernyataan singkat tentang kebiasaan sehari-hari anak Anda. Dalam 3 menit, Anda akan dapat gambaran awal kecenderungan anak di antara <strong>Desain, Coding & AI, Robotika,</strong> atau <strong>Public Speaking</strong> — lengkap dengan hasil yang bisa langsung diunduh.
              </p>
            </div>

            <Card className="p-6 md:p-8">
              <div className="grid gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[var(--ink)] mb-2">Nama Orang Tua / Wali</label>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="cth. Ibu Sarah"
                    className="w-full min-h-[48px] rounded-xl border border-[var(--border)] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--ink)] mb-2">Nomor WhatsApp Orang Tua</label>
                  <input
                    type="tel"
                    value={parentWA}
                    onChange={(e) => setParentWA(e.target.value)}
                    placeholder="cth. 081234567890"
                    className="w-full min-h-[48px] rounded-xl border border-[var(--border)] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--ink)] mb-2">Nama Anak</label>
                  <input
                    type="text"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="cth. Raka"
                    className="w-full min-h-[48px] rounded-xl border border-[var(--border)] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--ink)] mb-2">Usia Anak</label>
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full min-h-[48px] rounded-xl border border-[var(--border)] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand)] bg-white"
                  >
                    <option value="">Pilih usia</option>
                    {Array.from({ length: 13 }, (_, i) => i + 6).map(age => (
                      <option key={age} value={age}>{age} tahun</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--ink)] mb-2">Asal Sekolah</label>
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="cth. SD Cendekia"
                    className="w-full min-h-[48px] rounded-xl border border-[var(--border)] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                  />
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 flex-shrink-0"
                  />
                  <label htmlFor="consent" className="text-xs text-[var(--muted)] leading-relaxed cursor-pointer">
                    Saya setuju data ini digunakan tim Edugenzi untuk menghubungi saya terkait hasil kuis dan info program. Data tidak dipakai untuk hal lain.
                  </label>
                </div>

                {introError && (
                  <p className="text-red-500 text-sm font-medium">{introError}</p>
                )}

                <button
                  onClick={handleStart}
                  className="mt-4 w-full min-h-[48px] rounded-xl bg-blue-900 px-6 py-3.5 font-bold text-white transition-all hover:bg-blue-800 shadow-md"
                >
                  Mulai Kuis →
                </button>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    );
  }

  // Quiz View Render
  if (currentStep === 1) {
    const cat = CATEGORIES[catIndex];
    const catAnswers = answers[cat.id] || [];
    const allAnswered = catAnswers.every(v => v !== null);

    return (
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Progress Hexagons */}
            <div className="flex justify-center gap-2 mb-6">
              {CATEGORIES.map((c, i) => (
                <div
                  key={c.id}
                  className="w-8 h-8 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i <= catIndex ? c.hex : "#E1E8ED",
                    opacity: i === catIndex ? 0.6 : 1
                  }}
                />
              ))}
            </div>

            <div className="text-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-bold"
                style={{ backgroundColor: cat.hex }}
              >
                {cat.emoji} {cat.label} · {catIndex + 1}/{CATEGORIES.length}
              </span>
            </div>

            <Card className="p-6 md:p-8">
              <div className="space-y-10">
                {cat.statements.map((rawText, si) => {
                  const text = rawText.replace(/\{name\}/g, childName || "Anak");
                  return (
                    <div key={si} className="space-y-4">
                      <p className="font-semibold text-[var(--ink)] leading-relaxed">
                        {si + 1}. {text}
                      </p>
                      <div className="grid gap-4">
                        {CHOICES.map(choice => {
                          const isSelected = catAnswers[si] === choice.v;
                          return (
                            <button
                              key={choice.v}
                              onClick={() => handleChoice(cat.id, si, choice.v)}
                              className={`w-full min-h-[48px] text-left px-4 py-3 rounded-xl border-[1.5px] text-base md:text-sm transition-all duration-200 ${isSelected
                                  ? "border-[var(--sel-color)] bg-slate-50 font-bold text-[var(--ink)] shadow-sm"
                                  : "border-[var(--border)] text-[var(--muted)] hover:border-slate-300 hover:bg-slate-50"
                                }`}
                              style={{ "--sel-color": cat.hex } as React.CSSProperties}
                            >
                              {choice.t}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 mt-10 pt-6 border-t border-[var(--border)]">
                {catIndex > 0 && (
                  <button
                    onClick={handleBackCategory}
                    className="flex-1 rounded-xl border-[1.5px] border-[var(--border)] px-4 py-3 font-semibold text-[var(--ink)] hover:bg-slate-50 transition-colors"
                  >
                    Kembali
                  </button>
                )}
                <button
                  onClick={handleNextCategory}
                  disabled={!allAnswered || isSubmitting}
                  className="flex-[2] rounded-xl bg-blue-900 px-4 py-3 font-bold text-white transition-all hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  {isSubmitting ? "Menyiapkan Hasil..." : catIndex === CATEGORIES.length - 1 ? "Lihat Hasil →" : "Lanjut →"}
                </button>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    );
  }

  // Result View Render
  if (currentStep === 2) {
    // Compute Scores
    const scores: Record<string, number> = {};
    CATEGORIES.forEach(c => {
      scores[c.id] = answers[c.id].reduce((a, b) => (a || 0) + (b || 0), 0) as number;
    });

    const maxPossible = CATEGORIES[0].statements.length * 4;
    const ranked = [...CATEGORIES].sort((a, b) => scores[b.id] - scores[a.id]);
    const top = ranked[0];
    const second = ranked[1];
    const isCombo = (scores[top.id] - scores[second.id]) <= 3;
    const ageTier = parseInt(childAge, 10) <= 12 ? "SD" : "SMP";

    const insightText = ageTier === "SD"
      ? top.insightSD.replace(/\{name\}/g, childName)
      : top.insightSMP.replace(/\{name\}/g, childName);

    const waMsg = `Halo, saya ${parentName} ingin tanya-tanya soal program Edugenzi untuk anak saya ${childName} (${childAge} tahun, ${school}). Dari hasil kuis minat & bakat, kecenderungannya di ${top.label}. Boleh info lebih lanjut?`;
    const waLink = `https://wa.me/6281366660885?text=${encodeURIComponent(waMsg)}`;

    return (
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">

            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-[var(--muted)] text-xs font-bold uppercase tracking-wider mb-3">
                Hasil Kuis
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--ink)]">
                Ini kecenderungan yang kami tangkap
              </h2>
            </div>

            {/* Result Card for PDF */}
            <div ref={resultCardRef} className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 mb-6">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ backgroundColor: `${top.hex}22` }}
                >
                  {top.emoji}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500 mb-1">
                    Hasil untuk {childName} ({childAge} th)
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-[var(--ink)]">
                    {top.label}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {ranked.map(c => {
                  const pct = Math.round((scores[c.id] / maxPossible) * 100);
                  return (
                    <div key={c.id}>
                      <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
                        <span>{c.emoji} {c.label}</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${pct}%`, backgroundColor: c.hex }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm font-medium text-slate-600 italic">
                "{top.oneLiner}"
              </p>
            </div>

            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="w-full mb-10 rounded-xl border-[1.5px] border-[var(--border)] bg-white px-6 py-3.5 font-bold text-blue-900 transition-all hover:bg-slate-50 shadow-sm disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isDownloading ? "Menyiapkan PDF..." : "⬇ Download Hasil PDF"}
            </button>

            <Card className="p-6 md:p-8 space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-900 mb-3">Apa artinya ini?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {insightText}
                </p>
              </div>

              {isCombo && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600 mb-3">Perlu diperhatikan</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Menariknya, {childName} juga menunjukkan kecenderungan yang cukup kuat di {second.label}. Kombinasi ini cukup umum dan justru bisa jadi kelebihan tersendiri — ada baiknya dibahas lebih lanjut saat konsultasi.
                  </p>
                </div>
              )}

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-green-700 mb-3">Rekomendasi Program</h3>
                <p className="text-sm font-semibold text-slate-800 mb-3">
                  {top.programInfo}
                </p>
                <p className="text-xs text-slate-500 italic leading-relaxed">
                  Catatan: kuis ini adalah gambaran awal berdasarkan pengamatan orang tua, bukan tes psikologi formal. Cara terbaik memastikannya tetap lewat sesi konsultasi dan mencoba kelas percobaan langsung.
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--border)]">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] px-6 py-3.5 font-bold text-white transition-all hover:bg-[#20b858] shadow-md mb-4"
                >
                  💬 Konsultasi Gratis via WhatsApp
                </a>

                <button
                  onClick={handleRestart}
                  className="w-full text-sm font-semibold text-slate-500 hover:text-slate-800 underline decoration-slate-300 underline-offset-4"
                >
                  Isi ulang untuk anak lain
                </button>
              </div>
            </Card>

          </div>
        </Container>
      </section>
    );
  }

  return null;
}
