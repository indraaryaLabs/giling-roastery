'use client'

import { useRef, useState } from 'react'
import { hero } from '../lib/data'

// Kartu antrean sampel di kanan judul hero — meniru "the deck queue":
// numeral besar + catatan miring, sumbu hari 40px (garis di 22, titik lot 11px
// di 18, label Hari 0/10 di 30), dan catatan masuk terakhir.
// Titik kursor muncul mengikuti hover pada sumbu.
export default function Deck() {
  const d = hero.deck
  const axisRef = useRef(null)
  const [cx, setCx] = useState(null)

  const onMove = (e) => {
    const el = axisRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width))
    setCx(p)
  }

  return (
    <div className="deck" aria-hidden="true">
      <div className="deck__row">
        <span className="caps">{d.label}</span>
        <span className="deck__live caps"><i />{d.live}</span>
      </div>

      <div className="deck__count">
        <span className="deck__n">{d.count}</span>
        <p className="deck__sub">{d.sub}</p>
      </div>

      <div
        className="deck__axis"
        ref={axisRef}
        onMouseMove={onMove}
        onMouseLeave={() => setCx(null)}
      >
        {d.dots.map((day, i) => (
          <span
            key={i}
            className={`deck__dot${d.up === i ? ' up' : ''}`}
            style={{ left: `${(day * 10).toFixed(2)}%` }}
          />
        ))}
        <span className="deck__dot deck__hot" style={{ left: `${(d.hot * 10).toFixed(2)}%` }} />
        <span
          className="deck__cursor"
          style={cx == null ? undefined : { left: `${(cx * 100).toFixed(2)}%`, opacity: 1 }}
        />
        <span className="deck__d0 caps">{d.dayLabel}</span>
        <span className="deck__d1 caps">{d.dayMax}</span>
      </div>

      <p className="deck__note">
        {d.noteA}<i>{d.noteI}</i> {d.noteB}
      </p>
    </div>
  )
}