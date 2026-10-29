import './globals.css'

export const metadata = {
  title: 'Giling — Kilang sangrai nusantara',
  description:
    'Giling adalah kilang sangrai untuk kopi nusantara yang menyuplai warung, kantor, dan dapur di sepanjang Jawa. Batch 500 g–3 kg, resep dikunci dalam sepuluh hari, tertulis, dan email kami kami jawab sendiri.',
}

export const viewport = {
  themeColor: '#f4f1ea',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  )
}
