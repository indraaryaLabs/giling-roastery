# Giling Roastery

Situs brand Giling Roastery - kilang sangrai kopi nusantara - yang menyajikan katalog produk, cerita roastery, dan korespondensi dalam format jurnal sangrai bergaya editorial.

## Fitur

- **Halaman beranda bergaya jurnal** - ticker informasi sangrai, hero, tesis, indeks produk, angka-angka operasional, profil pendiri, dan proses kerja dalam satu alur naratif.
- **Halaman produk dinamis** (`app/kopi/[slug]`) - masing-masing kopi (Lampahan, Bajawa, Kerinci, Puntang, Sapan, dan lainnya) punya halaman sendiri yang dihasilkan dari data terpusat.
- **Halaman surat dinamis** (`app/surat/[slug]`) - korespondensi antara roastery dan pelanggan dalam format halaman individual.
- **Halaman privasi** (`app/privasi`).
- **Konten terpusat di `lib/data.js`** - seluruh teks, daftar kopi, surat, dan data lokasi dikelola dari satu file sehingga mudah diperbarui.
- **Detail interaktif** - jam dua kota (Bandung & Jakarta) dengan zona waktu WIB, kartu antrean sampel, dan figur/Ilustrasi bergaya jurnal.

## Tech Stack

| Layer | Teknologi |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Bahasa | JavaScript (JSX) |
| Styling | CSS (`app/globals.css`) |

## Menjalankan Lokal

```bash
git clone https://github.com/indraaryaLabs/giling-roastery.git
cd giling-roastery
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

Perintah lain:

```bash
npm run build # build produksi
npm run start # jalankan server produksi
```

## Struktur Proyek

```
app/
├── layout.jsx # Layout global
├── page.jsx # Beranda (jurnal sangrai)
├── globals.css
├── kopi/[slug]/page.jsx # Halaman detail kopi
├── surat/[slug]/page.jsx # Halaman detail surat
└── privasi/page.jsx # Halaman privasi
components/ # Hero, Ticker, Thesis, IndexSection, Numbers, Founders, Process, Letters, dst.
lib/data.js # Sumber data seluruh konten situs
```

## License

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
