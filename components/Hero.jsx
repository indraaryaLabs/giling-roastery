import { hero, toc, glance } from '../lib/data'
import { Segs } from './segs'
import Fig1 from './Fig1'
import Deck from './Deck'

function ArrowIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" aria-hidden="true">
      <path d="M1 5.5h12M9 1.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero wrap" id="sampul">
      <div className="hero__kicker">
        <span className="caps">{hero.kicker}</span>
        <span className="caps">{hero.kickerMid}</span>
        <span className="caps">{hero.kickerRight}</span>
      </div>
      <div className="hero__rule bleed" />

      <div className="hero__top">
        <h1>
          <Segs segs={[hero.title[0]]} />
          <br />
          <Segs segs={hero.title.slice(1)} />
        </h1>
        <Deck />
      </div>

      <Fig1 />

      <div className="hero__grid">
        <div className="hero__col">
          <p className="hero__intro">
            <b>{hero.intro[0].bold}</b>
            {hero.intro[0].text}
          </p>
          <div className="hero__ctas">
            <a className="btn-big" href="#korespondensi">
              {hero.ctas.primary} <ArrowIcon />
            </a>
            <a className="link-dash" href="#tesis">
              {hero.ctas.secondary} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="toc" aria-label="Dalam edisi ini">
          <div className="toc__label">
            <span className="caps">Dalam edisi ini</span>
            <span className="caps toc__p">Hlm.</span>
          </div>
          {toc.map((t) => (
            <a className="toc__row" key={t.id} href={`#${t.id}`}>
              <span>{t.label}</span>
              <span className="toc__dots" />
              <span className="toc__pg">{t.page}</span>
            </a>
          ))}
        </div>

        <div className="glance" aria-label={glance.title}>
          <div className="glance__label"><span className="caps">{glance.title}</span></div>
          {glance.rows.map((r, i) => (
            <div className="glance__row" key={i}>
              <span className="caps">{r.label}</span>
              <span className="glance__val">
                {r.value}
                {r.note && <i> · {r.note}</i>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
