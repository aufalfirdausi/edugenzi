<div align="center">
  <h1>🚀 Edugenzi</h1>
  <p><strong>Kursus Teknologi & Kreativitas untuk Anak dan Remaja (6-18 Tahun)</strong></p>
  <p>Belajar Sambil Berkarya: Coding, Desain, Robotik & Public Speaking</p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js" alt="Next.js" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-blue?style=flat&logo=react" alt="React" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-blue?style=flat&logo=typescript" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=flat&logo=tailwind-css" alt="Tailwind CSS" /></a>
  </p>
</div>

<br />

## 🌟 Tentang Edugenzi
Edugenzi adalah platform website profil untuk tempat kursus teknologi yang dirancang dengan metode belajar sambil praktik. Edugenzi berfokus pada pengembangan keterampilan digital anak dan remaja melalui proyek nyata yang membangun kreativitas dan kemampuan *problem solving*.

> **Catatan**: Website ini dirancang sangat ringan, dengan **Zero-runtime JavaScript** (menggunakan React Server Components) dan mendukung rendering statis (SSG-first).

## ✨ Highlight Fitur UI/UX
- **Desain Modern & Playful**: Menggunakan palet warna yang cerah dan *friendly* (Cream, Green, Yellow, Purple) yang cocok untuk target audiens anak dan remaja.
- **Glassmorphism & Shadows**: Elemen UI menggunakan efek transparan yang elegan dan *soft shadows* untuk memberikan kesan premium.
- **Responsif (Mobile-first)**: Layout yang rapi dan optimal di berbagai ukuran perangkat, dari *smartphone* hingga *desktop*.
- **Komponen Modular**: Struktur komponen yang rapi seperti `SectionHeading`, `Card`, dan `Container` untuk konsistensi desain.
- **Performa Tinggi**: 100% Server Components tanpa *client-side runtime* tambahan.

## 🛠 Tech Stack
Project ini dibangun menggunakan teknologi web modern untuk menjamin performa yang cepat, *SEO-friendly*, dan kode yang *maintainable*:

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | Next.js (App Router) |
| **UI Library** | React |
| **Styling** | Tailwind CSS v4 |
| **Bahasa** | TypeScript (Strict Mode) |
| **Fonts** | Fraunces (Display) & Poppins (Body) dari `next/font/google` |

## 🚀 Getting Started

Ikuti langkah-langkah berikut untuk menjalankan project ini secara lokal di komputer Anda:

### 1. Prerequisites
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) di perangkat Anda.

### 2. Install Dependencies
Clone repository ini dan masuk ke dalam direktori project, lalu jalankan:
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3. Jalankan Development Server
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya. Project ini mendukung *Hot Module Replacement* (HMR), sehingga setiap perubahan kode akan langsung terlihat.

## 📂 Struktur Folder
```text
src/
├── app/                    # Routing Next.js, Layouts, dan Pages (SSG)
├── components/             # Reusable UI Components
│   ├── sections/           # Komponen spesifik per bagian (Hero, FAQ, dll)
│   ├── site/               # Komponen global (Header, Footer, SkipLink)
│   └── ui/                 # Komponen dasar (Button, Card, Container)
├── content/                # Data statis (Programs, Projects, Testimonials, FAQs)
└── lib/                    # Utilities dan helpers
public/                     # Aset statis (Favicon, Logo, Gambar)
```

## 📝 Kontribusi
Jika Anda ingin berkontribusi atau memodifikasi project ini:
1. Pastikan Anda membaca `PROJECT_CONTEXT.md` dan pedoman pengembangan.
2. Prioritaskan penggunaan **Server Components** & Tailwind CSS v4.
3. Data konten (Copywriting, FAQ, List Program) berada di dalam folder `src/content/`. Anda dapat memperbarui konten di sana tanpa perlu mengubah struktur komponen UI.
4. Selalu perhatikan aksesibilitas (A11y) dan semantic HTML.

---
<div align="center">
  Dibuat dengan ❤️ untuk generasi digital masa depan.
</div>
