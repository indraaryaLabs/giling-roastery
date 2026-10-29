'use client'

import { useEffect, useRef, useState } from 'react'
import { processSection as proc } from '../lib/data'
import { Segs } from './segs'
import SecHead from './SecHead'

const fmtDay = (n) => Math.round(n).toLocaleString('id-ID')

// posisi simpul (%) pada rail — 5 sel selebar 251,2 + gap 29 dalam rail 1371
const NODE_PCT = [0.5, 21, 41.5, 62, 82.5]
// isi rail = progres pin p × 100 (linier, diverifikasi dari ref: fill 35,2% @8500 & 88,2% @9350)
// hari = kebalikan railPct: hari antara dua simpul sebanding isi rail antara keduanya
const dayAt = (f) => {
  const st = proc.stages
  if (f <= NODE_PCT[0]) return st[0].day
  for (let i = 0; i < st.length - 1; i++) {
    if (f <= NODE_PCT[i + 1]) {
      const t = (f - NODE_PCT[i]) / (NODE_PCT[i + 1] - NODE_PCT[i])
      return st[i].day + t * (st[i + 1].day - st[i].day)
    }
  }
  return st[st.length - 1].day
}

export default function Process() {
  const wrapRef = useRef(null)
  const stackRef = useRef(null)
  const [day, setDay] = useState(0)
  const [fill, setFill] = useState(0)
  const [active, setActive] = useState(1)
  const [stackFill, setStackFill] = useState(0)
  const [stackActive, setStackActive] = useState(1)
  const last = 3650

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const wrap = wrapRef.current
        const stack = stackRef.current
        const vh = window.innerHeight
        const narrow = window.matchMedia('(max-width: 1199.98px)').matches

        if (!narrow && wrap) {
          const r = wrap.getBoundingClientRect()
          const total = r.height - vh
          const p = Math.min(1, Math.max(0, -r.top / total))
          const f = p * 100
          setFill(f)
          const d = dayAt(f)
          setDay(d)
          // node menyala saat hari memasuki tahapnya
          let a = 1
          proc.stages.forEach((s, i) => {
            if (d >= s.day) a = i + 1
          })
          setActive(a)
        } else if (narrow && stack) {
          const r = stack.getBoundingClientRect()
          const p = Math.min(1, Math.max(0, (vh * 0.62 - r.top) / r.height))
          setStackFill(p * 100)
          let a = 1
          proc.stages.forEach((s, i) => {
            if (p >= (i + 0.55) / proc.stages.length) a = i + 1
          })
          setStackActive(a)
          if (reduced) { setStackFill(100); setStackActive(proc.stages.length) }
        }
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="proc" id="kerja">
      <div className="wrap">
        {/* desktop: track pinned, scroll = waktu berjalan */}
        <div className="proc__scroll" ref={wrapRef}>
          <div className="proc__sticky">
            <SecHead kicker={proc.kicker} page={proc.page} />
            <div className="proc__head">
              <h2><Segs segs={proc.title} /></h2>
              <div className="proc__elapsed">
                <span className="caps">{proc.elapsed.label}</span>
                <span className="day"><i>{proc.elapsed.unit}</i> {fmtDay(day)}</span>
              </div>
            </div>

            <div className="proc__line">
              <div className="proc__rail">
                <i style={{ width: `${fill}%` }} />
              </div>
              <div className="proc__track">
                {proc.stages.map((s, i) => (
                  <div key={i} className={`proc__cell${i < active ? ' on' : ''}`}>
                    {i >= 3 && <span className="proc__slash" aria-hidden="true">{'//'}</span>}
                    <span className="proc__dot" />
                    <span className="d">{s.dayLabel}</span>
                    <div className="n">{s.day === 3650 ? '3.650' : s.day}</div>
                    <div className="t">{s.title}</div>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* mobile: stack vertikal dengan fill progress */}
        <div className={`proc__stack${stackFill > 0 ? ' on' : ''}`} ref={stackRef} style={{ '--stack-fill': `${stackFill}%` }}>
          {proc.stages.map((s, i) => (
            <div key={i} className={`proc__cell${i < stackActive ? ' on' : ''}`}>
              <span className="proc__dot" />
              <span className="d">{s.dayLabel}</span>
              <div className="n">{s.day === 3650 ? '3.650' : s.day}</div>
              <div className="t">{s.title}</div>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
