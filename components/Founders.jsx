'use client'

import { useState } from 'react'
import { foundersSection as found } from '../lib/data'
import { Segs } from './segs'
import SecHead from './SecHead'

export default function Founders() {
  const [a, setA] = useState(0)
  const q = found.quotes[a]

  const prev = () => setA((x) => (x - 1 + found.quotes.length) % found.quotes.length)
  const next = () => setA((x) => (x + 1) % found.quotes.length)

  return (
    <section className="found" id="klien">
      <div className="wrap">
        <SecHead kicker={found.kicker} page={found.page} />
        <div className="found__head">
          <h2><Segs segs={found.title} /></h2>
          <p className="found__intro">{found.intro}</p>
        </div>

        <div className="found__grid">
          <div className="found__list">
            {found.quotes.map((p, i) => (
              <button
                key={i}
                className={`found__person${i === a ? ' on' : ''}`}
                onClick={() => setA(i)}
                aria-pressed={i === a}
              >
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="nm">{p.name}</span>
                  <span className="rl" style={{ display: 'block' }}>{p.role}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="found__stage">
            <blockquote className="found__quote fade-in" key={a}>
              <span className="qmark" aria-hidden="true">“</span>
              {q.quote.map((s, i) => (s.i ? <i key={i}>{s.text}</i> : <span key={i}>{s.text}</span>))}
              <span aria-hidden="true"> ”</span>
            </blockquote>

            <div className="found__attr">
              <div className="found__who">
                <span className="caps">{q.name}</span>
                <p>{q.role}</p>
              </div>
              <span className="found__logo">
                <span aria-hidden="true">{q.logo.glyph}</span>
                {q.logo.name}
              </span>
            </div>

            <div className="found__nav">
              <button className="arrow-btn" onClick={prev} aria-label="Klien sebelumnya">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M15 6H2M6 1 1 6l5 5" stroke="currentColor" strokeWidth="1.4" /></svg>
              </button>
              <button className="arrow-btn" onClick={next} aria-label="Klien berikutnya">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M1 6h13M10 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
