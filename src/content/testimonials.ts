export type Testimonial = {
  name: string;
  relation: string;
  quote: string;
};

/**
 * Catatan: ini placeholder yang aman untuk UI.
 * Ganti dengan testimoni nyata untuk meningkatkan trust + conversion.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Orang Tua Siswa",
    relation: "Banda Aceh",
    quote:
      "Anak jadi lebih percaya diri dan semangat belajar karena setiap pertemuan langsung praktik. Kami suka karena ada pendampingan yang jelas dan komunikasinya enak.",
  },
  {
    name: "Orang Tua Siswa",
    relation: "Kelas Online",
    quote:
      "Sebelumnya anak ragu mulai coding. Setelah beberapa pertemuan, ia sudah bisa bikin proyek kecil dan mau menunjukkan hasilnya ke keluarga.",
  },
  {
    name: "Orang Tua Siswa",
    relation: "Program Kreatif",
    quote:
      "Materinya terasa relevan dan rapi. Yang paling kami rasakan adalah progresnya terlihat lewat karya, bukan hanya teori.",
  },
];

