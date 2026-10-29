// ─────────────────────────────────────────────────────────────
// GILING — Jurnal Sangrai, Edisi III
// Seluruh konten situs. UI/UX direplikasi dari referensi,
// konten diganti menjadi kilang sangrai kopi nusantara fiksi.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: 'Giling',
  wordmark: { a: 'Gi', b: 'li', c: 'ng' }, // 'li' italic — meniru motif "ll" → "//"
  volume: 'Vol. III',
  issue: 'Edisi No. 3',
  nextIssue: 'Edisi berikutnya: Desember',
  kicker: 'Jurnal Giling — Edisi No. 3',
  founders: ['Sari Wibisono', 'Tejo Oktara'],
  initials: 'S.W. & T.O.',
  emails: { deck: 'kebutuhan@giling.coffee', letters: 'surat@giling.coffee' },
  cities: [
    { label: 'Bandung', addr1: 'Jl. Naripan No. 12, Lantai 2', addr2: 'Bandung, Jawa Barat 40112', tz: 'Asia/Jakarta', zone: 'WIB', clockNote: 'yang tepat' },
    { label: 'Jakarta', addr1: 'Gudang 7, Kawasan Pasar Ikan', addr2: 'Jakarta Utara 14450', tz: 'Asia/Jakarta', zone: 'WIB', clockNote: 'sama, betul' },
  ],
};

export const ticker = {
  left: 'Vol. III — September 2026',
  right: 'Roast III · 120.000 kg',
  items: [
    { name: 'Lampahan', text: 'lot ke-400 tiba di gudang Bandung', accent: 'berat, tidak diumumkan' },
    { name: 'Roast III', text: 'sepuluh hari, tertulis', accent: 'terima kasih, petani yang sabar' },
    { name: 'Bajawa', text: 'menyusun resep ke-12 untuk kedai kampus', accent: 'giling 2,1 mm' },
    { name: 'Kerinci', text: 'habis dalam 6 hari —', accent: 'catatan untuk panen depan' },
    { name: 'Puntang', text: 'kembali ke tungku setelah refriksi 40 hari', accent: 'curah 82,1%' },
    { name: 'Sapan', text: 'turun dari Toraja dengan karantina 2 hari', accent: 'kadar air 10,8%' },
  ],
};

export const toc = [
  { id: 'tesis', label: 'Tesis', page: 2 },
  { id: 'sangrai', label: 'Yang kami sangrai', page: 3 },
  { id: 'indeks', label: 'Indeks', page: 4 },
  { id: 'angka', label: 'Dalam angka', page: 5, nav: false },
  { id: 'kerja', label: 'Cara kami bekerja', page: 7 },
  { id: 'surat', label: 'Surat', page: 8 },
];

export const glance = {
  title: 'Roast III, sekilas',
  rows: [
    { label: 'Kapasitas tahunan', value: '120.000 kg' },
    { label: 'Batch pertama', value: '500 g–3 kg' },
    { label: 'Tahap', value: 'Hijau & sangrai' },
    { label: 'Keputusan resep', value: 'Sepuluh hari, tertulis' },
    { label: 'Roaster', value: 'Dua', note: 'lihat Gbr. 1' },
    { label: 'Cadangan biji', value: '1 : 1' },
  ],
};

export const hero = {
  kicker: 'Jurnal Giling — Edisi No. 3',
  kickerMid: 'Roast III · sangrai selesai',
  kickerRight: 'Dari Bandung & Jakarta',
  title: [
    { text: 'Masa depan' },
    { text: 'banyak ' },
    { text: 'digiling', i: true },
    { dot: true },
  ],
  bylines: [
    { name: 'Sari Wibisono', role: 'roaster', city: 'Bandung' },
    { name: 'Tejo Oktara', role: 'roaster', city: 'Jakarta' },
  ],
  fig1: 'Gbr. 1 — Dua tungku, satu arah',
  measure: 'Δ 0,3 mm · tidak pernah nol',
  // kartu antrean sampel (deck queue) di kanan judul
  deck: {
    label: 'Antrean sampel',
    live: 'Langsung',
    count: 8,
    sub: 'lot dalam tinjauan,\ntak lebih tua dari 10 hari.',
    dayLabel: 'Hari 0',
    dayMax: '10',
    dots: [0, 0.6, 1.5, 2.4, 3.3, 4.5, 4.7, 6.4],
    up: 6,
    hot: 7.8,
    noteA: 'Masuk: ',
    noteI: 'penjadwalan sangrai gudang,',
    noteB: 'Bandung · baru saja',
  },
  intro: [
    { bold: 'Giling adalah kilang sangrai untuk kopi nusantara', text: ' yang menyuplai warung, kantor, dan dapur sepanjang Jawa. Batch 500 g–3 kg, resep terkunci dalam sepuluh hari, dan email kami jawab sendiri.' },
  ],
  ctas: { primary: 'Kirim daftar kebutuhan', secondary: 'Baca tesis' },
};

export const thesis = {
  kicker: '§ 01 — Tesis',
  page: 2,
  title: [
    { text: 'Memuji kopi yang ' },
    { text: 'menanggung beban', i: true },
    { text: '.' },
  ],
  byline: 'Oleh Sari Wibisono & Tejo Oktara',
  filed: 'Dikirim September 2026',
  words: 341,
  minutes: 2,
  // Paragraf: { lead: true(=drop cap), text } — footnote refs ditulis ⸢1⸣
  paragraphs: [
    { lead: true, text: 'Setiap dekade, dunia kopi menemukan cara baru untuk datang lebih awal ke pesta yang sama. Manual brew. Single origin. Mesin seduh yang bisa disambung Wi-Fi. Bijinya bergerak dalam kawanan, dan kawanan itu berisik.⸢1⸣' },
    { text: 'Kami tidak berada di kawanan itu. Kami berada di dapur sebelah, tempat seseorang mencoba membuat mesin seduh kantor menghasilkan secangkir yang layak untuk shift malam.⸢2⸣' },
    { text: 'Inilah tesisnya, dengan jujur. Tiga puluh tahun ke depan akan dihabiskan untuk membangun ulang kebiasaan minum Indonesia: warung yang menulis pesanan di kertas, kantor yang menyetel gilingnya dengan penggaris, dapur yang menyimpan kopi di kaleng biskuit. Semua itu butuh kopi yang disangrai oleh orang yang pernah berdiri di belakang tungku, resep yang tahan diganti-ganti,⸢3⸣ dan pasokan yang cukup sabar untuk menerima pembeli yang menguji sampel tiga kali sebelum bertanya harga.' },
    { text: 'Kopi seperti ini sulit didanai di awal. Tidak fotogenik. Pasarnya terlihat kecil di slide dan sangat besar di lembar penjualan. Pendirinya berumur empat puluh satu, bukan dua puluh tiga,⸢4⸣ dan lebih suka bicara kadar air daripada desain label.' },
    { text: 'Di situlah peluangnya. Bukan karena tidak ikonik itu satu kebajikan — bukan — tapi karena ikonik menentukan harga. Ketika semua orang menginginkan biji yang sama, biji itu menjadi terlalu mahal. Ketika tidak ada yang menginginkannya, Anda bisa membelinya dengan harga waras, lalu menunggu dunia sadar bahwa biji itu menopang pagi mereka.' },
    { text: '“Izinkan saya bertanya ke tim Minggu kami” adalah kalimat paling mahal di industri ini. Kami tidak mengucapkannya. Cukup dua orang, kami menyangrai batch pertama, dan memutuskan resep dalam sepuluh hari — iya atau tidak, tertulis, dengan alasan.⸢5⸣ Tidak ada yang diteruskan ke asisten. Kami adalah pertemuan hari Minggu itu.' },
    { text: 'Kami sabar, tapi bukan sabar yang lembut. Kami sabar seperti halnya kaleng yang menunggu di rak. Kami berencana menyuplai sepuluh tahun, dan berniat bermanfaat selama semuanya.' },
    { text: 'Kalau itu terdengar lambat, bagus. Kopi tubruk pun disangrai pelan-pelan. Ia masih jujur sampai sekarang.' },
  ],
  footnotes: {
    1: { n: 1, text: 'Mesinnya krem, tergantung di sebelah water cooler, dan telah melewati dua kali pergantian kepala kantor. Komputer paling penting di lantai itu, kami bersikeras.' },
    2: { n: 2, text: 'Shift malam dimulai pukul 22.00. Kopi yang baik pada pukul 22.00 adalah teori; kopi yang tersedia pada pukul 22.00 adalah resep.' },
    3: { n: 3, text: 'Kurang lebih 760 ribu ton kopi dipanen Indonesia setiap tahunnya. Sebagian besar tidak pernah dipuji di mana pun. Ini masalah logistik yang memakai celemek.' },
    4: { n: 4, text: 'Median umur mitra kami di kirim pertama, Roast I–II: 41. Median tahun bekerja sebelum membuka kedai: 14. Median hoodie: tidak dibahas.' },
    5: { n: 5, text: 'Penolakan kami disertai satu paragraf. Beberapa klien bercerita itu hal paling berguna yang pernah mereka terima dari pemasok. Satu orang membingkainya. Kami memilih menganggapnya pujian.' },
  },
  signature: '— S.W. & T.O., Bandung, September 2026',
};

export const whatWeBack = {
  kicker: '§ 02 — Yang kami sangrai',
  page: 3,
  title: [
    { text: 'Empat tempat kopi nusantara ' },
    { text: 'tersangkut', i: true },
    { text: '.' },
  ],
  intro: 'Kami tidak mengatakan “third wave” atau “specialty”. Kami menyuplai orang-orang yang bekerja sebelum matahari terbit. Empat tesis, ditulis ulang setiap Januari dan diperdebatkan setiap Selasa.',
  cards: [
    {
      numeral: 'I.',
      label: 'Sumatera',
      width: 'wide',
      title: 'Giling basah adalah jaringan luring terakhir yang besar.',
      figure: 'roast',
      fig: 2,
      caption: 'Kurva sangrai, batch 214. Titik balik, first crack, dan keheningan yang diperjuangkan.',
      paras: [
        'Ada kira-kira seperempat juta kebun kecil di Sumatera, dan sebagian besar masih menjual hasilnya lewat kalender, telepon, dan kepercayaan. Biji-bijinya berpindah tangan seperti berita keluarga: cepat, dekat, dan tanpa dokumentasi.',
        'Kami menyangrai biji dari orang yang pernah mengangkut karung di punggung — pembasahan, fermentasi, dan lem perekat yang tidak glamoris antara pengeringan tiga puluh tahun silam dan apa pun yang punya aplikasi. Kami tidak menyangrai profil yang baru sah kalau kebunnya dibongkar.',
      ],
      lookFor: 'Petani yang pernah mengangkut karung. Uji coba di kebun, bukan program percontohan.',
      linkCount: 4,
    },
    {
      numeral: 'II.',
      label: 'Jawa',
      width: 'narrow',
      title: 'Jawa adalah mesin seratus tahun dengan pekerjaan baru.',
      figure: 'bar',
      fig: 3,
      caption: 'Sebuah bar, garis tunggal. Kotak merah adalah tempat barista kami biasanya muncul.',
      paras: [
        'Permintaan kopi naik untuk pertama kalinya dalam satu generasi, dan peralatan yang menyajikannya dirancang untuk abad yang lebih sunyi. Kami menyangrai biji yang sebuah kantin bisa beli, seduh, dan — yang terpenting — andalkan.',
      ],
      lookFor: 'Sertifikasi di jalan. Barista shift pagi di dewan penasihat.',
      linkCount: 5,
    },
    {
      numeral: 'III.',
      label: 'Bali & Nusa Tenggara',
      width: 'narrow',
      title: 'Ceri masih berpindah lewat telepon dan nota.',
      figure: 'route',
      fig: 4,
      caption: 'Flores ke Bandung. Bagian mahal adalah bagian di mana tidak ada yang berpindah.',
      paras: [
        'Sebuah karung menyeberangi Lombok dalam sebelas jam, lalu menunggu dua hari di dermaga untuk anak tangga. Kami menyangrai biji yang memindahkan waktu tunggu: pelabuhan, dermaga, gudang, retur. Tidak ada yang mem-postingnya. Semua orang membayarnya.',
      ],
      lookFor: 'Pendapatan per karung, bukan per kursi. Pengiriman yang bersumpah atas nama kami — atau setidaknya berhenti bersumpah.',
      linkCount: 4,
    },
    {
      numeral: 'IV.',
      label: 'Sulawesi & Timur',
      width: 'wide',
      title: 'Timur tersendat oleh jalur darat, bukan selera.',
      figure: 'plate',
      fig: 5,
      caption: 'Cupping, tangan, 96 cangkir. Para mitra kami ingin bicara.',
      paras: [
        'Sebuah kebun yang baik bisa membayangkan seribu profil dan menyangrai sekitar empat puluh. Jaraknya adalah jalur darat, gudang, dan papan tulis yang ditempel di karung. Kami menyangrai biji yang mengubah pinggir kebun menjadi sistem tanpa meminta petani menjadi insinyur perangkat lunak.',
      ],
      lookFor: 'Pemilik gudang sebagai champion. Konsumabel di model bisnis. Tidak ada yang mengatakan “platform” sebelum panen.',
      linkCount: 4,
    },
  ],
};

// ─── Indeks kopi: 17 lot, 14 lot rahasia (gap penomoran) ───
export const coffees = [
  { no: '01', slug: 'lampahan', name: 'Lampahan', desc: 'Espresso gelap dari Gayo utara; kakao, tembakau manis, tanpa dramatis.', sector: 'Sumatera', process: 'Cuci', year: '2019', status: 'habis', statusYear: '24' },
  { no: '02', slug: 'puntang', name: 'Puntang', desc: 'Java Preanger tua; keasaman yang membuat barista baru menyebutnya “winey”.', sector: 'Jawa', process: 'Cuci', year: '2019', status: 'habis', statusYear: '23' },
  { no: '04', slug: 'kintamani', name: 'Kintamani', desc: 'Bali di bawah penaung jeruk; bersih, manis gula palem.', sector: 'Bali & NTT', process: 'Cuci', year: '2019', status: 'habis', statusYear: '25' },
  { no: '05', slug: 'bajawa', name: 'Bajawa', desc: 'Lereng selatan Inerie; cokelat susu yang disukai shift pagi.', sector: 'Bali & NTT', process: 'Semi cuci', year: '2020', status: 'aktif' },
  { no: '07', slug: 'kalosi', name: 'Kalosi', desc: 'Sulawesi yang lama dijuluki “kopi korporat”. Tidak apa-apa; korporat minum juga.', sector: 'Timur', process: 'Cuci', year: '2020', status: 'habis', statusYear: '25' },
  { no: '09', slug: 'sapan', name: 'Sapan', desc: 'Toraja ketinggian; tidak masuk feed, selalu habis.', sector: 'Timur', process: 'Honey', year: '2021', status: 'aktif' },
  { no: '10', slug: 'lintong', name: 'Lintong', desc: 'Giling basah yang jeli: rempah, rempah, rempah.', sector: 'Sumatera', process: 'Giling basah', year: '2021', status: 'aktif' },
  { no: '12', slug: 'malabar', name: 'Malabar', desc: 'Profil yang bisa dipercaya sejak 2016, dan kami tidak berniat menimpanya.', sector: 'Jawa', process: 'Cuci', year: '2022', status: 'aktif' },
  { no: '14', slug: 'jampit', name: 'Jampit', desc: 'Ijen timur; monokultur ketinggian yang rajin.', sector: 'Jawa', process: 'Cuci', year: '2022', status: 'aktif' },
  { no: '15', slug: 'paniai', name: 'Paniai', desc: 'Papua tengah; jarak pengiriman kami yang paling jujur.', sector: 'Timur', process: 'Cuci', year: '2022', status: 'aktif' },
  { no: '17', slug: 'kerinci', name: 'Kerinci', desc: 'Lembut, beraroma rempah; diborong penuh oleh sebuah kafe kampus.', sector: 'Sumatera', process: 'Honey', year: '2023', status: 'aktif' },
  { no: '20', slug: 'blawan', name: 'Blawan', desc: 'Ceri besar, api pelan; favorit dapur kantor kami sendiri.', sector: 'Jawa', process: 'Cuci', year: '2024', status: 'aktif' },
  { no: '22', slug: 'manggarai', name: 'Manggarai', desc: 'Natural yang disangrai untuk kedai yang takut asam.', sector: 'Bali & NTT', process: 'Natural', year: '2024', status: 'aktif' },
  { no: '25', slug: 'pangalengan', name: 'Pangalengan', desc: 'Kebun keluarga di selatan Bandung, sejam dari tungku kami.', sector: 'Jawa', process: 'Cuci', year: '2025', status: 'aktif' },
  { no: '27', slug: 'moanemani', name: 'Moanemani', desc: 'Lot kecil yang membuat satu kuartal kami ramai.', sector: 'Timur', process: 'Cuci', year: '2025', status: 'aktif' },
  { no: '29', slug: 'sumbawa', name: 'Sumbawa', desc: 'Pulau di sebelah Lombok; jarang bicara, sering mengisi.', sector: 'Bali & NTT', process: 'Honey', year: '2025', status: 'aktif' },
  { no: '31', slug: 'redacted-31', name: 'Redacted', descSegs: [{ t: 'Saringan untuk dapur ' }, { r: true }, { t: ' yang belum boleh dibahas sampai Oktober.' }], desc: 'Saringan untuk dapur rahasia yang belum boleh dibahas sampai Oktober.', sector: 'Sumatera', process: 'Cuci', year: '2026', status: 'rahasia', redactName: true },
];

export const coffeeSectors = [
  { key: 'all', label: 'Semua', count: 17 },
  { key: 'Sumatera', label: 'Sumatera', count: 4 },
  { key: 'Jawa', label: 'Jawa', count: 5 },
  { key: 'Bali & NTT', label: 'Bali & NTT', count: 4 },
  { key: 'Timur', label: 'Timur', count: 4 },
];

export const indexSection = {
  kicker: '§ 03 — Indeks kopi',
  page: 4,
  title: [
    { text: 'Indeks', i: true },
    { text: '.' },
  ],
  intro: 'Setiap lot yang kami sangrai dan boleh disebut namanya. Celah penomoran adalah lot yang masih rahasia — yang, di sektor kami, kebanyakan berarti sibuk.',
  cols: [
    { k: 'no', label: 'No.' },
    { k: 'name', label: 'Lot' },
    { k: 'desc', label: 'Apa' },
    { k: 'sector', label: 'Sektor' },
    { k: 'process', label: 'Proses' },
    { k: 'year', label: 'Tahun' },
  ],
  stLabel: 'Status',
  footerNote: 'Empat belas lot lain masih di rak pengering. Mereka akan bercerita sendiri, lambat-lambat.',
  updated: 'Panen I–III · diperbarui 24 Sep 2026',
};

// Detail per lot (halaman /kopi/[slug])
export const coffeeDetails = {
  'lampahan': {
    heading: 'Espresso gelap yang tidak minta dipuji.',
    paras: [
      'Lampahan datang dari kebun kecil di utara Takengon, diangkut turun dengan truk yang lebih tua dari kami. Kami menyangrainya gelap-ungu: kakao pahit, tembakau manis, dan penutup yang panjang tanpa perlu diceritakan.',
      'Batch pertamanya dikirim ke sebuah kantin tambang yang meminta “yang keras”. Kami menjawab dalam sepuluh hari dengan satu halaman spesifikasi. Mereka masih memesan, setiap minggu, tanpa pernah menyebut kata profil rasa.',
    ],
    notes: [
      { label: 'Karakter', value: 'Kakao · tembakau manis · kulit kayu' },
      { label: 'Untuk', value: 'Espresso, kopi tubruk, kantor yang serius' },
      { label: 'Tungku', value: 'Tungku 1 — Bandung' },
    ],
  },
  'puntang': { heading: 'Asam tua Jawa Barat yang dihormati.', paras: ['Puntang lama. Kebunnya tahu apa yang dilakukannya.', 'Kami mengambil lot kecil setiap panen dan menyangrainya ringan; sisanya biarkan keluarga kebun bercerita.'], notes: [{ label: 'Karakter', value: 'Jeruk mandarin · gula aren · teh' }, { label: 'Untuk', value: 'V60, siphon, orang yang membawa penggaris' }, { label: 'Tungku', value: 'Tungku 2 — Jakarta' }] },
  'kintamani': { heading: 'Bersih, seperti pagi di Kintamani.', paras: ['Ditanam di bawah penaung jeruk, dan rasanya memang begitu: bersih, manis gula palem, tanpa drama.', 'Lot 2019 kami habis dalam dua bulan. Lot 2025 lebih tenang; kami sedikit belajar.'], notes: [{ label: 'Karakter', value: 'Gula palem · jeruk · bunga' }, { label: 'Untuk', value: 'Brew manual, kedai yang menjelaskan' }, { label: 'Tungku', value: 'Tungku 1 — Bandung' }] },
  'bajawa': { heading: 'Cokelat susu dari lereng Inerie.', paras: ['Bajawa adalah profil yang membuat orang memanggilnya “amanah”. Kami tidak keberatan.', 'Semi cuci, fermentasi singkat, sangrai medium. Dua belas resep sudah kami kunci untuk kedai kampus di Bandung.'], notes: [{ label: 'Karakter', value: 'Cokelat susu · kacang · buah kuning' }, { label: 'Untuk', value: 'Kantin, kantor, shift pagi' }, { label: 'Tungku', value: 'Tungku 2 — Jakarta' }] },
  'kalosi': { heading: 'Kopi korporat, dan itu pujian.', paras: ['Kalosi lama dijuluki kopi korporat. Kami menyamainya: korporat minum setiap hari, dan tidak pernah absen.', 'Cuci penuh, sangrai sedang-gelap. Sisanya kebiasaan.'], notes: [{ label: 'Karakter', value: 'Kacang panggang · karamel · herbal' }, { label: 'Untuk', value: 'Kopi susu, jumbo, kantor pemerintahan' }, { label: 'Tungku', value: 'Tungku 2 — Jakarta' }] },
  'sapan': { heading: 'Toraja yang tidak berfoto.', paras: ['Sapan tidak pernah masuk feed siapa pun, dan itu memang rencananya. Honey, ketinggian tinggi, panen kecil.', 'Pelanggan pertamanya adalah sebuah hotel di Makassar yang menghitung cangkir per kamar. Mereka tidak pernah terlambat membayar.'], notes: [{ label: 'Karakter', value: 'Buah merah · madu · rempah hangat' }, { label: 'Untuk', value: 'Pour-over hotel, menu premium yang jujur' }, { label: 'Tungku', value: 'Tungku 1 — Bandung' }] },
  'lintong': { heading: 'Giling basah yang jeli.', paras: ['Lintong datang dengan cara yang paling Sumatera: giling basah, fermentasi liar, dan rempah yang tiga kali disalahpahami.', 'Kami menyangrainya cukup gelap untuk jujur, cukup ringan untuk tidak pamrih.'], notes: [{ label: 'Karakter', value: 'Rempah · herbal · kayu manis' }, { label: 'Untuk', value: 'Kopi tubruk, warung, orang yang sudah tahu' }, { label: 'Tungku', value: 'Tungku 2 — Jakarta' }] },
  'malabar': { heading: 'Bisa dipercaya sejak 2016.', paras: ['Malabar tidak pernah mengejutkan siapa pun, dan itu pujian tertinggi di kategori ini.', 'Cuci penuh, profil stabil. Mesin kopi kantor di lantai 14 masih memintanya hingga hari ini.'], notes: [{ label: 'Karakter', value: 'Kacang · gula tebu · jeruk nipis' }, { label: 'Untuk', value: 'Kantor, kantor, kantor' }, { label: 'Tungku', value: 'Tungku 1 — Bandung' }] },
  'jampit': { heading: 'Monokultur yang rajin.', paras: ['Jampit menyangkut pada kebiasaan lama: kebun besar, panen terjadwal, kualitas yang datang tepat waktu.', 'Kami menyangrainya medium dan mengirimnya ke kedai yang meminta “yang selalu sama”.'], notes: [{ label: 'Karakter', value: 'Kacang mede · gula putih · teh hitam' }, { label: 'Untuk', value: 'Kedai yang konsisten' }, { label: 'Tungku', value: 'Tungku 2 — Jakarta' }] },
  'paniai': { heading: 'Jarak yang paling jujur.', paras: ['Paniai datang dari dataran tinggi Papua tengah, lewat jalur yang membuat kurir kami pandai menunggu.', 'Lot-nya kecil, harga waras, dan kualitasnya menutup seluruh cerita logistiknya.'], notes: [{ label: 'Karakter', value: 'Buah tropis · cokelat · sedikit rempah' }, { label: 'Untuk', value: 'Brew manual, orang yang bertanya asal' }, { label: 'Tungku', value: 'Tungku 1 — Bandung' }] },
  'kerinci': { heading: 'Diborong penuh oleh sebuah kafe kampus.', paras: ['Kerinci lembut, beraroma rempah, dan diborong penuh oleh kafe kampus yang membayarnya lebih cepat dari mahasiswa membayar skripsi.', 'Honey, fermentasi sedang. Kami menyimpan satu kilo untuk dapur sendiri, dan itu tidak dirahasiakan.'], notes: [{ label: 'Karakter', value: 'Rempah · apel merah · madu' }, { label: 'Untuk', value: 'Kafe kampus, manual brew' }, { label: 'Tungku', value: 'Tungku 2 — Jakarta' }] },
  'blawan': { heading: 'Ceri besar, api pelan.', paras: ['Blawan datang dari timur Ijen dengan ceri besar dan sikap yang tenang.', 'Kami menyangrainya pelan-pelan di tungku dua. Favorit dapur kami sendiri — bukan rahasia, hanya tidak dipromosikan.'], notes: [{ label: 'Karakter', value: 'Cokelat · ceri gelap · karamel' }, { label: 'Untuk', value: 'Espresso, flat white, dapur kantor' }, { label: 'Tungku', value: 'Tungku 2 — Jakarta' }] },
  'manggarai': { heading: 'Untuk kedai yang takut asam.', paras: ['Manggarai natural kami disangrai untuk kedai yang meminta “yang tidak asam” tanpa malu. Tidak ada yang perlu malu.', 'Hasilnya: buah gelap, badan tebal, dan pembeli yang kembali.'], notes: [{ label: 'Karakter', value: 'Buah gelap · cokelat · rempah' }, { label: 'Untuk', value: 'Kopi susu, kedai tepi jalan' }, { label: 'Tungku', value: 'Tungku 1 — Bandung' }] },
  'pangalengan': { heading: 'Sejam dari tungku kami.', paras: ['Pangalengan adalah kebun keluarga di selatan Bandung. Kami bisa berangkat pagi dan pulang sebelum giling dingin.', 'Cuci penuh, panen kecil. Lot ini alasan kami tidak butuh karangan bunga dari pelanggan.'], notes: [{ label: 'Karakter', value: 'Sayuran hijau · gula · sitrus' }, { label: 'Untuk', value: 'Semua; terutama tetangga' }, { label: 'Tungku', value: 'Tungku 1 — Bandung' }] },
  'moanemani': { heading: 'Lot kecil, kuartal ramai.', paras: ['Moanemani adalah lot kecil dari Papua barat yang membuat satu kuartal kami ramai dengan pertanyaan.', 'Cuci penuh, fermentasi bersih. Kami menjawab semua pertanyaan itu, satu per satu.'], notes: [{ label: 'Karakter', value: 'Buah kuning · gula · floral' }, { label: 'Untuk', value: 'Kolektor kedai, brew manual' }, { label: 'Tungku', value: 'Tungku 2 — Jakarta' }] },
  'sumbawa': { heading: 'Jarang bicara, sering mengisi.', paras: ['Sumbawa jarang bicara di media sosial dan sering mengisi kaleng di dapur sebelah.', 'Honey, profil rumah. Sisanya kebiasaan yang baik.'], notes: [{ label: 'Karakter', value: 'Gula palem · kacang · rempah lembut' }, { label: 'Untuk', value: 'Dapur rumah, kopi tetangga' }, { label: 'Tungku', value: 'Tungku 1 — Bandung' }] },
  'redacted-31': { heading: 'Yang belum boleh dibahas.', paras: ['Ada lot yang belum boleh dibahas sampai Oktober. Ini lot itu.', 'Yang bisa kami katakan: dapurnya serius, karungnya besar, dan NDA-nya menandai kertas. Oktober akan bercerita.'], notes: [{ label: 'Karakter', value: 'Dibahas Oktober' }, { label: 'Untuk', value: 'Dapur yang menandatangani kertas' }, { label: 'Tungku', value: 'Tungku 2 — Jakarta' }] },
};

export const numbersSection = {
  kicker: '§ 04 — Dalam angka',
  page: 5,
  hero: { value: 9, suffix: 'hari', caption: 'Median, dari sampel hijau masuk ke sangrai pertama · Roast II · n = 212', note: 'Janjinya sepuluh. Lebih baik kami lebih cepat daripada lebih fasih.' },
  title: [
    { text: 'Angka yang berani kami ' },
    { text: 'cetak', i: true },
    { text: '.' },
  ],
  stats: [
    { value: '92%', suffix: '', text: 'klien yang kami pasok lagi. Sisanya 8% — dengan grinder yang lebih baik.' },
    { value: '41', text: 'umur median pemilik kedai mitra kami saat kirim pertama. *Gigi bungsu: dicabut.*' },
    { value: '1,4 kg', text: 'sampel rata-rata ke klien baru, dengan cadangan sama banyak di gudang.' },
    { value: '0', text: 'magang, “kurasi konten”, atau juru cicip yang berdiri di antara Anda dan roaster.' },
    { value: '31', text: 'lot di tiga panen. Empat habis dalam dua minggu, tidak satu pun lewat diskon.' },
  ],
};

export const foundersSection = {
  kicker: '§ 05 — Klien, di atas kertas',
  page: 6,
  title: [
    { text: 'Klien, di atas ' },
    { text: 'kertas', i: true },
    { text: '.' },
  ],
  intro: 'Kami minta tiga klien bercerita bagaimana rasanya kerja sama dengan kami. Kami tidak menyunting jawabannya, hal yang membuat pengacara kami merasa berani.',
  quotes: [
    {
      name: 'Dewi Anggraini',
      role: 'Pemilik, Kantin Sebelah — sejak 2025',
      quote: [
        { text: 'Mereka bilang tidak dalam sembilan hari, dengan dua halaman alasannya. Saya menyusun ulang menu berdasarkan dua halaman itu. Sebelas bulan kemudian mereka bilang iya — ' },
        { text: 'dalam enam', i: true },
        { text: '.' },
      ],
      logo: { glyph: '≒', name: 'kantin' },
    },
    {
      name: 'Marco Halim',
      role: 'Dapur Ringgit · sejak 2021',
      quote: [
        { text: 'Sari lebih sering berdiri di dapur kami daripada tiga pemasok kami sebelumnya digabung. Ia tahu di mana kopi bagian QC kami diseduh. ' },
        { text: 'Ternyata di area pencucian', i: true },
        { text: '.' },
      ],
      logo: { glyph: '⌁', name: 'ringgit' },
    },
    {
      name: 'Ratna Dewanti',
      role: 'Taring Kopi — akuisisi 2024',
      quote: [
        { text: 'Setiap pemasok menanyakan volume kami. Tejo menanyakan kadar air biji kami. Itu hampir seluruh uji tuntas, ' },
        { text: 'dan itu pertanyaan yang tepat', i: true },
        { text: '.' },
      ],
      logo: { glyph: '⊿', name: 'taring' },
    },
  ],
};

export const processSection = {
  kicker: '§ 06 — Cara kami bekerja',
  page: 7,
  title: [
    { text: 'Sepuluh hari, lalu ' },
    { text: 'sepuluh tahun', i: true },
    { text: '.' },
  ],
  elapsed: { label: 'Berjalan', unit: 'Hari' },
  stages: [
    { day: 0, dayLabel: 'Hari', title: 'Telepon pertama', desc: 'Empat puluh lima menit dengan satu roaster. Bawa rencana, bukan deck. Kami sebutkan apa yang membuat kami khawatir.' },
    { day: 3, dayLabel: 'Hari', title: 'Sidak', desc: 'Berdua, biasanya di tempat Anda, karena kami ingin melihat mesinnya. Satu referensi pelanggan. Tanpa data room.' },
    { day: 10, dayLabel: 'Hari', title: 'Keputusan, tertulis', desc: 'Iya berarti satu halaman: spesifikasi, sampel, harga. Bukan paragraf yang bisa dipakai.' },
    { day: 100, dayLabel: 'Hari', title: 'Seratus hari pertama', desc: 'Tiga perkenalan ke pemasok yang pernah kami beli, satu pelatihan barista yang kami bantu tutup, dan kunci resep hanya kalau Anda minta.' },
    { day: 3650, dayLabel: 'Hari', title: 'Masih di sini', desc: 'Cadangan biji satu-ke-satu, kirim lanjutan tanpa teatrikal, dan dua nomor telepon yang sama.' },
  ],
};

export const lettersSection = {
  kicker: '§ 07 — Surat',
  page: 8,
  title: [
    { text: 'Surat dari ' },
    { text: 'belakang tungku', i: true },
    { text: '.' },
  ],
  intro: 'Tribulanan, panjang, berfootnote. Ditulis para roaster, disunting oleh tidak seorang pun, dan dibaca oleh jumlah kepala pengadaan yang mengkhawatirkan.',
};

export const letters = [
  {
    no: 'No. 14',
    slug: 'mesin-seduh-kantor',
    title: 'Mesin seduh kantor tidak akan ke mana-mana',
    date: 'Agu 2026',
    minutes: '9 mnt',
    abstract: 'Setiap beberapa tahun seseorang mengumumkan akhir dari mesin seduh kantor. Mesinnya, sebagai mesin, tidak merespons. Catatan lapangan tentang membuat kopi yang menghormati kotak krem itu, alih-alih mencoba menggantinya.',
    byline: '— Tejo Oktara, dari dapur kantin di Cimahi',
    body: [
      'Setiap beberapa tahun, seseorang berdiri di atas panggung dan mengumumkan bahwa mesin seduh kantor akan segera mati. Digantikan kapsel. Digantikan aplikasi. Digantikan “pengalaman minum menyeluruh”. Mesin itu, sebagai mesin, tidak merespons. Ia hanya menyeduh pada pukul 07.40 keesokan paginya, seperti biasa, untuk orang-orang yang bahkan tidak tahu namanya.',
      'Kami sudah menghabiskan cukup banyak hari di lantai kantor untuk bersikeras: mesin seduh kantor adalah komputer paling penting di gedung itu. Ia bekerja shift paling awal, tidak pernah minta cuti, dan satu-satunya mesin yang semua orang di gedung — dari satpam sampai direktur — pernah menyentuh dengan sukarela.',
      'Maka resep kami untuk mesin semacam ini sederhana: biji yang cukup tahan untuk kalibrasi yang tidak pernah sempurna, giling yang bisa diperbaiki tukang di lantai satu, dan kemasan yang bisa dibaca oleh seseorang yang mata masih setengah terbuka pada pukul 06.55.',
      'Kami tidak menyangrai kopi untuk diposting. Kami menyangrai kopi untuk diseduh pada pukul 07.40. Kalau sebuah lot berhasil membuat seseorang di lantai tujuh menahan diri untuk tidak mengeluh sebelum rapat kedua, lot itu sudah berakhlak lebih baik daripada kebanyakan perangkat lunak yang pernah kami lihat.',
      'Maka biarkan mesin krem itu tetap di sana, di sudut yang selalu lembap. Ia tidak perlu dipuji. Ia hanya perlu diisi.⸢1⸣',
    ],
    footnotes: [
      { n: 1, text: 'Dan kalau Anda mengganti mesinnya: konversikan resepnya ke gram, bukan ke rasa. Rasa tidak bisa diberitahu ke mesin yang baru; gram bisa.' },
    ],
    prev: 'kata-tidak-kami',
    next: 'pengadaan-sembilan-bulan',
  },
  {
    no: 'No. 13',
    slug: 'pengadaan-sembilan-bulan',
    title: 'Pembelaan atas pengadaan yang lama',
    date: 'Jun 2026',
    minutes: '7 mnt',
    abstract: 'Pembeli yang lambat adalah pembeli yang setia. Kantor pengadaan yang butuh tiga kuartal untuk tanda tangan akan bertahan satu dekade. Kenapa kami menilai kesabaran sebagai benteng, dan bagaimana pendiri bertahan menunggu tanpa menjual ginjal.',
    byline: '— Sari Wibisono',
    body: [
      'Pembeli yang lambat adalah pembeli yang setia. Kantor pengadaan yang membutuhkan tiga kuartal untuk menandatangani satu lembar spesifikasi akan membutuhkan satu dekade untuk mencarikan pengganti kami — dan ketika akhirnya mencari, mereka akan memanggil kami dulu.',
      'Kami menilai kesabaran sebagai benteng. Bukan karena lambat itu romantis, tapi karena setiap bulan yang dihabiskan untuk menguji sampel adalah satu bulan yang tidak dihabiskan untuk mengevaluasi tawaran pesaing yang lebih murah dan lebih lupa.',
      'Ada sisi gelapnya: gaji tetap jalan selama sembilan bulan, dan tidak ada spreadsheet yang membuat sembilan bulan itu terasa pendek. Beberapa trik yang kami ajarkan: jual sampel sebagai produk, bukan diskon; minta komitmen uji coba yang bisa dihitung, bukan “nanti kita lihat”; dan selalu, selalu kenal satu orang di keuangan.',
      'Pelanggan yang paling lambat kami, sebuah rumah sakit di Bandung, sekarang sudah di tahun keempat dan belum pernah satu bulan pun kehabisan kopi. Ada pendiri yang mengeluh tentang siklus sembilan bulan. Tidak satu pun dari mereka yang pernah mengeluh tentang tahun keempat.',
    ],
    footnotes: [],
    prev: 'mesin-seduh-kantor',
    next: 'melawan-demo',
  },
  {
    no: 'No. 12',
    slug: 'melawan-demo',
    title: 'Melawan demo',
    date: 'Apr 2026',
    minutes: '5 mnt',
    abstract: 'Klien terbaik yang pernah kami pasok datang membawa spreadsheet dan luka bakar. Tentang kenapa infrastruktur yang paling penting biasanya berupa hal yang tampil paling buruk di proyektor.',
    byline: '— Sari Wibisono & Tejo Oktara',
    body: [
      'Klien terbaik yang pernah kami pasok datang membawa spreadsheet dan luka bakar. Bukan pitch deck. Sebuah spreadsheet berisi 4.100 cangkir, dan luka bakar kecil di tangan kanan yang tidak ia jelaskan sampai kami bertanya.',
      'Demo yang baik terlihat bagus di proyektor. Dapur yang baik terlihat buruk di proyektor: terlalu kecil, terlalu tidak rapi, terlalu banyak kertas. Infrastruktur yang paling penting hampir selalu berupa hal yang tampil paling buruk di proyektor.',
      'Kami menyarankan pendiri untuk membawa yang asli: kertas nota yang basah, giling yang berdebu, kaleng yang ditempel. Justru di situ terlihat apakah sistemnya bekerja atau sedang berpose.',
      'Spreadsheet itu, kalau Anda bertanya-tanya, masih ada. Diperbarui tiap minggu. Kami membacanya dengan perasaan yang sama seperti orang membaca surat keluarga: lambat, dan dengan penuh perhatian.',
    ],
    footnotes: [],
    prev: 'pengadaan-sembilan-bulan',
    next: 'antrean-bongkar-muat',
  },
  {
    no: 'No. 11',
    slug: 'antrean-bongkar-muat',
    title: 'Antrean bongkar muat adalah minyak baru (sayangnya)',
    date: 'Feb 2026',
    minutes: '12 mnt',
    abstract: 'Sumber daya paling langka di kopi Indonesia bukan bijik atau tanah. Ia tempat di antrean. Surat panjang tentang antrean, nota, dan pendiri yang mengubah tunggu lima hari menjadi masalah tabel.',
    byline: '— Tejo Oktara',
    body: [
      'Sumber daya paling langka di kopi Indonesia bukan biji dan bukan tanah. Ia tempat di antrean. Karung yang berdiri di dermaga lebih lama daripada berada di jalan; waktu paling mahal dalam bisnis ini adalah waktu di mana tidak ada yang bergerak.',
      'Kami menghitung: sebuah lot dari Lampung butuh sembilan jam ke pelabuhan, tiga hari untuk menyeberang kalau bersuntik, dan dua hari menunggu anak tangga di sisi sana. Sebelas jam bergerak, lima hari menunggu. Seluruh margin sebuah lot bisa habis di bagian yang tidak bergerak.',
      'Maka kami menyimpan biji sebelum butuh, bukan saat butuh. Gudang kecil di dua kota, cadangan satu-ke-satu, dan aturan yang tidak ditulis tapi dijalankan: tidak ada klien yang menunggu karena karung kami sedang bersemuka dengan karung lain.',
      'Surat ini panjang karena topiknya panjang. Kalau Anda membaca sampai sini, Anda sedang punya masalah antrean sendiri, dan Anda tahu itu. Mau bicara? Nomor kami di bawah.',
    ],
    footnotes: [],
    prev: 'melawan-demo',
    next: 'panduan-pengadaan',
  },
  {
    no: 'No. 10',
    slug: 'panduan-pengadaan',
    title: 'Panduan lapangan menawar ke pengadaan',
    date: 'Nov 2025',
    minutes: '14 mnt',
    abstract: 'Siapa yang tanda tangan, siapa yang menghalangi, siapa yang benar-benar minum, dan kenapa ketiganya kadang orang yang sama, seorang bernama Pak Dedi. Termasuk glosarium dan permintaan maaf kepada Pak Dedi.',
    byline: '— Sari Wibisono',
    body: [
      'Setiap kantor punya tiga orang: yang tanda tangan, yang menghalangi, dan yang benar-benar minum. Kadang ketiganya orang yang sama, seorang bernama Pak Dedi. Panduan ini untuk mengenali mereka, dalam urutan yang aman.',
      'Yang minum biasanya muncul paling pagi dan mengeluh paling jujur. Dengarkan ia. Yang menghalangi biasanya tidak pernah minum kopi di kantin; ia membaca angka. Tunjukkan angka kepadanya, dan hanya angka. Yang tanda tangan biasanya orang paling sibuk di gedung dan paling mudah dikenali: ia hanya bertanya satu hal — “kalau ini berhenti, siapa yang saya telepon?”',
      'Ada glosarium di bawah, dengan istilah seperti “stok aman”, “uji coba”, dan “Pak Dedi”. Ada juga, di bagian akhir, permintaan maaf resmi kepada Pak Dedi atas apa yang kami sebut tentang sepatunya dalam draf awal. Sepatunya ternyata penting. Sepatunya yang menginjak pecahan gelas tahun lalu, dan ia masih menyimpan pecahannya sebagai bukti untuk vendor berikutnya.',
      'Kirimkan panduan ini ke pendiri baru. Ia akan membutuhkan sembilan bulan dan satu cetak biru kecil yang bisa dibawa ke rapat, dan kalau ia berhasil, ia akan menemukan bahwa seluruh proses itu — ternyata — adalah cara paling lambat untuk membangun hal yang paling lambat hilang.',
    ],
    footnotes: [],
    prev: 'antrean-bongkar-muat',
    next: 'kata-tidak-kami',
  },
  {
    no: 'No. 09',
    slug: 'kata-tidak-kami',
    title: 'Kata “tidak” kami, diberi catatan',
    date: 'Sep 2025',
    minutes: '6 mnt',
    abstract: 'Kami mengirim 212 penolakan tahun lalu, semuanya dengan alasan. Kami bertanya kepada para pendiri, alasan mana yang salah. Ini sebelas kali kami akan mengambil kembali, dan satu kali yang tidak.',
    byline: '— Sari Wibisono & Tejo Oktara',
    body: [
      'Kami mengirim 212 penolakan tahun lalu. Semuanya dengan alasan, karena kalimat “tidak cocok dengan fokus kami” adalah cara paling mahal untuk tidak mengatakan apa-apa. Kami bertanya kepada para pendiri: alasan mana yang salah?',
      'Sebelas kali, jawabannya: kami salah. Kami sudah mencatat semuanya di sini, dengan penjelasan yang cukup jujur untuk diberitahukan. Yang paling sering kami salah: kami menolak karena “pasarnya terlalu kecil”, lalu panen berikutnya lot yang sama habis dalam dua minggu.',
      'Satu kali, kami tidak akan mengambil kembali: pendiri yang meminta kami memasok lot dengan harga di bawah biaya “dulu dulu, untuk pengenalan”. Kami tidak mengatakan tidak dengan kasar. Kami mengatakan tidak dengan satu paragraf, dan paragraf itu masih ada di arsip kami, siap dipakai kapan pun dibutuhkan.',
      'Tahun ini kami sudah mengirim 41 penolakan. Sebelas di antaranya, kalau ditanya lagi hari ini, kami jawab dengan iya. Kami memperbaiki pertanyaan kami setiap kali seseorang bersedia menjawabnya dengan jujur.',
    ],
    footnotes: [],
    prev: 'panduan-pengadaan',
    next: 'mesin-seduh-kantor',
  },
];

export const correspondence = {
  kicker: '§ 08 — Korespondensi · hlm. 9',
  title: [
    { text: 'Bawa yang mereka bilang ' },
    { text: 'terlalu pahit', i: true },
    { text: '.' },
  ],
  intro: 'Kopi dalam anggaran operasional. Pengadaan sembilan bulan. Kalau tiga pemasok menolak karena “terlalu industri”, Anda sudah di kotak masuk yang benar. Kami membaca semua kiriman.',
  fields: [
    { label: 'Email Anda', placeholder: 'anda@perusahaananda.id', key: 'email', type: 'email' },
    { label: 'Kebutuhan kopi, dalam satu kalimat', placeholder: 'Kami butuh 40 kg per pekan, sangrai sedang-gelap.', key: 'need', type: 'text' },
    { label: 'Siapa yang menyerah, dan kenapa? (opsional)', placeholder: '“Terlalu industri.” — semua orang', key: 'passed', type: 'text' },
  ],
  note: 'Tanpa NDA, tanpa perkenalan hangat. Kami menjawab dalam sepuluh hari — kalau tidak, Anda tetap mendapat paragrafnya.',
  submit: 'Kirim ke kedua roaster',
  mailto: 'kebutuhan@giling.coffee',
};

export const footer = {
  colophonLabel: 'Kolofon',
  colophon: [
    'Edisi ini disetel dalam Newsreader, jenis huruf untuk membaca panjang dari Production Type, dengan Instrument Sans untuk cetak kecilnya. Dicetak di peramban dengan 100% piksel daur ulang. Tidak ada pohon yang ditebang; beberapa kipas laptop sedikit terganggu.',
    'Kertas: #F4F1EA. Tinta: #141414. Satu botol oxblood, dipakai hemat dan disetujui kedua roaster.',
  ],
  correspondenceLabel: 'Korespondensi',
  partnersLabel: 'Roaster',
  finePrintLabel: 'Cetakan kecil',
  finePrint: 'Tidak ada di halaman ini yang merupakan penawaran biji. Ini, namun, undangan tetap untuk mencicipinya.',
  copyright: '© 2026 Giling Sangrai, PT',
  meta: 'Vol. III · Edisi No. 3 · Edisi berikutnya: Desember',
  links: ['Privasi', 'Kembali ke halaman depan'],
  menuLinks: [
    { label: 'Tesis', page: 2, desc: 'Memuji kopi yang menanggung beban' },
    { label: 'Yang kami sangrai', page: 3, desc: 'Empat pulau, empat tesis' },
    { label: 'Indeks', page: 4, desc: '17 lot, 14 masih rahasia' },
    { label: 'Dalam angka', page: 5, desc: 'Yang berani kami cetak' },
    { label: 'Cara kami bekerja', page: 7, desc: 'Sepuluh hari, lalu sepuluh tahun' },
    { label: 'Surat', page: 8, desc: 'Dari belakang tungku' },
  ],
};

export const pages = {
  privacy: {
    kicker: '§ 09 — Privasi',
    title: [
      { text: 'Halaman paling ' },
      { text: 'pendek', i: true },
      { text: ' di situs ini.' },
    ],
    paras: [
      'Kami tidak memasang pelacak, piksel, atau apa pun yang bernama “analytics”. Formulir di halaman ini membuka aplikasi email Anda; tidak ada yang dikirim ke server kami, karena kami tidak punya server untuk itu.',
      'Alamat email yang Anda ketik hanya dipakai untuk menulis balasan. Kami tidak menjual, membagikan, atau memberikannya kepada “mitra strategis” — sebagian karena tidak ada mitra, sebagian karena tidak strategis.',
      'Kalau Anda ingin datanya dihapus, cukup kirim surat ke surat@giling.coffee. Kami akan membalas dalam sepuluh hari, tertulis, dengan satu paragraf yang bisa dipakai.',
    ],
  },
};
