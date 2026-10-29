'use client'

import { useRef, useState } from 'react'
import { letters, lettersSection as sect } from '../lib/data'
import { Segs } from './segs'
import SecHead from './SecHead'

function Row({ l, open, onToggle }) {
  const bodyRef = useRef(null)
  return (
    <div className={`lett__row${open ? ' open' : ''}`}>
      <button
        className="lett__btn"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span className="no">{l.no}</span>
        <span className="ti">{l.title}</span>
        <span className="dt">{l.date}</span>
        <span className="mn">{l.minutes}</span>
        <span className="pm" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div className="lett__body" style={{ maxHeight: open ? (bodyRef.current ? bodyRef.current.scrollHeight : 800) : 0 }}>
        <div className="lett__body-in" ref={bodyRef}>
          <p>{l.abstract}</p>
          <p className="att">{l.byline}</p>
          <a className="lett__read" href={`/surat/${l.slug}`}>
            Baca suratnya
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h11M8.5 1.5 12 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Letters() {
  const [openIdx, setOpenIdx] = useState(-1)

  return (
    <section className="lett" id="surat">
      <div className="wrap">
        <SecHead kicker={sect.kicker} page={sect.page} />
        <div className="lett__head">
          <h2><Segs segs={sect.title} /></h2>
          <p className="lett__intro">{sect.intro}</p>
        </div>

        <div className="lett__rows">
          {letters.map((l, i) => (
            <Row key={l.slug} l={l} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
