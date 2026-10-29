import { coffees, coffeeDetails, brand } from '../../../lib/data'
import Ticker from '../../../components/Ticker'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import SecHead from '../../../components/SecHead'

export function generateStaticParams() {
  return coffees.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
  const c = coffees.find((x) => x.slug === params.slug)
  if (!c) return { title: 'Lot tidak ditemukan — Giling' }
  return {
    title: `${c.name} — Giling`,
    description: c.desc,
  }
}

function StatusEl({ c }) {
  if (c.status === 'habis') return <p><span className="out">Habis ’{c.statusYear}</span></p>
  if (c.status === 'rahasia') return <p><span className="hidden">Rahasia</span></p>
  return <p><span className="active">Tersedia</span></p>
}

export default function CoffeePage({ params }) {
  const i = coffees.findIndex((x) => x.slug === params.slug)
  const c = coffees[i]
  if (!c) return null
  const d = coffeeDetails[c.slug]
  const prev = coffees[(i - 1 + coffees.length) % coffees.length]
  const next = coffees[(i + 1) % coffees.length]

  return (
    <>
      <Ticker />
      <Header />
      <main className="detail wrap">
        <a className="detail__back" href="/#indeks">← Indeks</a>
        <SecHead kicker={`Lot ${c.no} — ${c.sector}`} page={4} />

        <span className="detail__no">{c.no}</span>
        <h1>
          {c.redactName ? <span className="redact">Singgalang</span> : c.name}
          <span className="dot" aria-hidden="true">.</span>
        </h1>

        <div className="detail__meta">
          <div className="cell"><span className="caps">Asal</span><p>{c.sector}</p></div>
          <div className="cell"><span className="caps">Proses</span><p>{c.process}</p></div>
          <div className="cell"><span className="caps">Panen</span><p>{c.year}</p></div>
          <div className="cell"><span className="caps">Status</span><StatusEl c={c} /></div>
        </div>

        <div className="detail__body">
          {d.paras.map((p, k) => <p key={k}>{p}</p>)}
        </div>

        <div className="detail__notes">
          {d.notes.map((n, k) => (
            <div className="row" key={k}>
              <span className="caps">{n.label}</span>
              <p>{n.value}</p>
            </div>
          ))}
        </div>

        <p className="detail__sign">— Giling, {brand.cities[0].label} · {brand.volume}</p>

        <div className="detail__nav">
          <a href={`/kopi/${prev.slug}`}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M13 5H1M5.5 1 1 5l4.5 4" stroke="currentColor" strokeWidth="1.4" /></svg>
            <span>{prev.name}</span>
          </a>
          <a href={`/kopi/${next.slug}`}>
            <span>{next.name}</span>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h11M8.5 1.5 12 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" /></svg>
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
