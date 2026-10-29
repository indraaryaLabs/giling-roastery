import { pages, brand } from '../../lib/data'
import Ticker from '../../components/Ticker'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SecHead from '../../components/SecHead'

export const metadata = {
  title: 'Privasi — Giling',
  description: 'Halaman paling pendek di situs ini.',
}

export default function PrivacyPage() {
  const p = pages.privacy
  return (
    <>
      <Ticker />
      <Header />
      <main className="detail wrap">
        <a className="detail__back" href="/">← Halaman depan</a>
        <SecHead kicker={p.kicker} page={9} />

        <h1>{p.title[0].text}<i>{p.title[1].text}</i>{p.title[2].text}</h1>

        <div className="detail__body">
          {p.paras.map((t, k) => <p key={k}>{t}</p>)}
        </div>

        <p className="detail__sign">— {brand.initials}, {brand.volume}</p>
      </main>
      <Footer />
    </>
  )
}
