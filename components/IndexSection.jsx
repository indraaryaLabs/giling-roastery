'use client'

import { useEffect, useRef, useState } from 'react'
import { coffees, coffeeSectors, indexSection as idx } from '../lib/data'
import { Segs } from './segs'
import SecHead from './SecHead'

function Glyph({ i }) {
  const rot = (i % 3) - 1 // variasi kecil -1°, 0°, 1°
  return (
    <svg className="plc-mark" viewBox="0 0 46 46" style={{ transform: `rotate(${rot}deg)` }} aria-hidden="true">
      <path d="M10 38 38 10" stroke="var(--plc-ink)" strokeWidth="1.4" fill="none" vectorEffect="non-scaling-stroke" />
      <path d="M20 38 48 10" stroke="var(--plc-ink)" strokeWidth="1.4" fill="none" vectorEffect="non-scaling-stroke" opacity="0.55" />
      <circle cx="38" cy="10" r="2.6" fill="var(--plc-ox)" stroke="none" />
    </svg>
  )
}

function Status({ c }) {
  if (c.status === 'habis')
    return <span className="out">Habis ’{c.statusYear}</span>
  if (c.status === 'rahasia')
    return <span className="hidden">Rahasia</span>
  return <span className="active">Tersedia</span>
}

// kartu mengikuti kursor (.plc) — hanya pada perangkat hover
function LotCard({ lot, x, y, on }) {
  if (!lot) return <div className="plc" aria-hidden="true" />
  const s = `s${lot.no % 5}`
  return (
    <div
      className={`plc${on ? ' on' : ''}`}
      style={{ transform: `translate3d(${x + 26}px, ${y - 214}px, 0)` }}
      aria-hidden="true"
    >
      <div className="plc-in">
        <div className="plc-row">
          <span>Nº {lot.no}</span>
          <span>{lot.sector}</span>
        </div>
        <div className="plc-mid">
          <Glyph i={Number(lot.no)} />
          <span className={`plc-name ${s}`}>
            {lot.redactName ? <span className="plc-redact">{lot.redacted || 'Singgalang'}</span> : lot.name}
          </span>
        </div>
        <p className="plc-d">
          {lot.descSegs
            ? lot.descSegs.map((sg, i) =>
                sg.r ? <span key={i} className="plc-redact">Singgalang</span> : <span key={i}>{sg.t}</span>
              )
            : lot.desc}
        </p>
      </div>
    </div>
  )
}

export default function IndexSection() {
  const [filter, setFilter] = useState('all')
  const [hover, setHover] = useState(null) // { lot, x, y, on }
  const rowsRef = useRef(null)

  // hanya jalankan kartu kursor bila perangkat punya hover
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const rows = rowsRef.current
    const onMove = (e) => {
      setHover((h) => (h ? { ...h, x: e.clientX, y: e.clientY } : h))
    }
    rows.addEventListener('mousemove', onMove)
    return () => rows.removeEventListener('mousemove', onMove)
  }, [])

  const shown = coffees.filter((c) => filter === 'all' || c.sector === filter)

  const enter = (c) => (e) => {
    if (!window.matchMedia('(hover: hover)').matches) return
    setHover({ lot: c, x: e.clientX, y: e.clientY, on: true })
  }
  const leave = () => setHover((h) => (h ? { ...h, on: false } : h))

  return (
    <section className="idx" id="indeks">
      <div className="wrap">
        <SecHead kicker={idx.kicker} page={idx.page} />
        <div className="idx__head">
          <h2><Segs segs={idx.title} /></h2>
          <p className="idx__intro">{idx.intro}</p>
        </div>

        <div className="idx__bar">
          <div className="filters" role="group" aria-label="Filter asal lot">
            {coffeeSectors.map((s) => (
              <button
                key={s.key}
                className={`pill${filter === s.key ? ' on' : ''}`}
                onClick={() => setFilter(s.key)}
              >
                {s.label} <b>{s.count}</b>
              </button>
            ))}
          </div>
          <span className="idx__showing">Menampilkan {shown.length} dari {coffees.length}</span>
        </div>

        <div className="idx__rows" ref={rowsRef} onMouseLeave={leave}>
          <div className="idx__thead" aria-hidden="true">
            {idx.cols.map((c) => (
              <span key={c.k} className={`h-${c.k}`}>{c.label}</span>
            ))}
            <span className="h-st">{idx.stLabel}</span>
          </div>
          {shown.map((c) => (
            <a
              className="idx__row"
              key={c.slug}
              href={`/kopi/${c.slug}`}
              onMouseEnter={enter(c)}
            >
              <span className="idx__no">{c.no}</span>
              <span className="idx__name">
                {c.redactName ? <span className="redact">Singgalang</span> : c.name}
              </span>
              <span className="idx__desc">
                {c.descSegs
                  ? c.descSegs.map((sg, i) =>
                      sg.r ? <span key={i} className="redact">Singgalang</span> : <span key={i}>{sg.t}</span>
                    )
                  : c.desc}
              </span>
              <span className="idx__meta">
                <span className="idx__sector">{c.sector}</span>
                <span className="idx__process">{c.process}</span>
                <span className="idx__year">{c.year}</span>
              </span>
              <span className="idx__st"><Status c={c} /></span>
            </a>
          ))}
          <div className="idx__empty" aria-hidden="true">◦</div>
        </div>

        <div className="idx__foot">
          <p>{idx.footerNote}</p>
          <span className="caps">{idx.updated}</span>
        </div>
      </div>

      <LotCard
        lot={hover && hover.lot}
        x={hover ? hover.x : 0}
        y={hover ? hover.y : 0}
        on={!!(hover && hover.on)}
      />
    </section>
  )
}
