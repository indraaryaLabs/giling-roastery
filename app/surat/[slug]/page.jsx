import { letters } from '../../../lib/data'
import Ticker from '../../../components/Ticker'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import SecHead from '../../../components/SecHead'

export function generateStaticParams() {
  return letters.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }) {
  const l = letters.find((x) => x.slug === params.slug)
  if (!l) return { title: 'Surat tidak ditemukan — Giling' }
  return { title: `${l.title} — Giling`, description: l.abstract }
}

export default function LetterPage({ params }) {
  const i = letters.findIndex((x) => x.slug === params.slug)
  const l = letters[i]
  if (!l) return null
  const prev = letters.find((x) => x.slug === l.prev)
  const next = letters.find((x) => x.slug === l.next)

  return (
    <>
      <Ticker />
      <Header />
      <main className="detail wrap">
        <a className="detail__back" href="/#surat">← Surat</a>
        <SecHead kicker={`§ 07 — Surat · ${l.no}`} page={8} />

        <span className="detail__no">{l.no}</span>
        <h1>
          {l.title}
          <span className="dot" aria-hidden="true">.</span>
        </h1>

        <div className="detail__meta">
          <div className="cell"><span className="caps">Diterbitkan</span><p>{l.date}</p></div>
          <div className="cell"><span className="caps">Lama baca</span><p>{l.minutes}</p></div>
          <div className="cell"><span className="caps">Penulis</span><p>{l.byline.replace('— ', '')}</p></div>
        </div>

        <div className="detail__body">
          {l.body.map((p, k) => <p key={k}>{p}</p>)}
        </div>

        {l.footnotes.length > 0 && (
          <div className="detail__notes">
            {l.footnotes.map((f) => (
              <div className="row" key={f.n}>
                <span className="caps">Catatan {f.n}</span>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        )}

        <p className="detail__sign">{l.byline}</p>

        <div className="detail__nav">
          {prev ? (
            <a href={`/surat/${prev.slug}`}>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M13 5H1M5.5 1 1 5l4.5 4" stroke="currentColor" strokeWidth="1.4" /></svg>
              <span>{prev.no} — {prev.title}</span>
            </a>
          ) : <span />}
          {next ? (
            <a href={`/surat/${next.slug}`}>
              <span>{next.no} — {next.title}</span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h11M8.5 1.5 12 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" /></svg>
            </a>
          ) : <span />}
        </div>
      </main>
      <Footer />
    </>
  )
}
