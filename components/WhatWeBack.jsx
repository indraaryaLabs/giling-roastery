import { whatWeBack as wwb } from '../lib/data'
import { Segs } from './segs'
import SecHead from './SecHead'
import Figure from './Figure'
import { FIGS } from './figs'

function ArrowIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path d="M1 5h11M8.5 1.5 12 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function Card({ card }) {
  const Fig = FIGS[card.figure]
  return (
    <article className="card">
      <div className="card__num-row">
        <span className="card__num">{card.numeral}</span>
        <span className="card__label">{card.label}</span>
      </div>
      <h3>{card.title}</h3>

      <div className="card__fig">
        <Figure>
          <Fig />
        </Figure>
      </div>
      <div className="card__figcap">
        <span className="caps">Gbr. {card.fig}</span>
        <p>{card.caption}</p>
      </div>

      <div className={`card__body${card.width === 'wide' ? ' card__cols2' : ''}`}>
        {card.paras.map((p, i) => <p key={i}>{p}</p>)}
      </div>

      <div className="card__look">
        <span className="caps">Yang kami cari</span>
        <p>{card.lookFor}</p>
      </div>

      <a className="card__link" href="#indeks">
        Lihat {card.linkCount} lot {card.label} <ArrowIcon />
      </a>
    </article>
  )
}

export default function WhatWeBack() {
  const [c1, c2, c3, c4] = wwb.cards
  return (
    <section className="wwb" id="sangrai">
      <div className="wrap">
        <SecHead kicker={wwb.kicker} page={wwb.page} />
        <div className="wwb__head">
          <h2><Segs segs={wwb.title} /></h2>
          <p className="wwb__intro">{wwb.intro}</p>
        </div>

        <div className="cards">
          <div className="cards__row r1">
            <Card card={c1} />
            <div className="cards__div" />
            <Card card={c2} />
          </div>
          <div className="cards__row r2">
            <Card card={c3} />
            <div className="cards__div" />
            <Card card={c4} />
          </div>
        </div>
      </div>
    </section>
  )
}
