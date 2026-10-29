'use client'

import { useEffect, useRef, useState } from 'react'
import { numbersSection as nums } from '../lib/data'
import { Segs } from './segs'
import SecHead from './SecHead'

// parse '92%' → { num: 92, dec: 0, unit: '%' } · '1,4 kg' → { 1.4, 1, ' kg' }
function parseVal(v) {
  const m = v.match(/^([\d.,]+)(.*)$/)
  if (!m) return { num: 0, dec: 0, unit: v }
  const raw = m[1]
  const dec = raw.includes(',') ? (raw.split(',')[1] || '').length : 0
  return { num: parseFloat(raw.replace(',', '.')) || 0, dec, unit: m[2] }
}

const fmt = (v, dec) => {
  if (dec > 0) return v.toFixed(dec).replace('.', ',')
  return Math.round(v).toLocaleString('id-ID')
}

// *teks* → <em>
function Em({ children }) {
  const parts = children.split(/\*([^*]+)\*/)
  return <>{parts.map((p, i) => (i % 2 ? <em key={i}>{p}</em> : <span key={i}>{p}</span>))}</>
}

function useCount(ref, { num, dec }, ms = 1100) {
  const [done, setDone] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return
      io.disconnect()
      if (reduced) { el.textContent = fmt(num, dec); setDone(true); return }
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / ms)
        const e = 1 - Math.pow(1 - p, 3)
        el.textContent = fmt(num * e, dec)
        if (p < 1) requestAnimationFrame(tick)
        else setDone(true)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [num, dec, ms, ref])
  return done
}

function HeroNum() {
  const { value, suffix } = nums.hero
  const ref = useRef(null)
  const v = parseVal(String(value))
  useCount(ref, v)
  return (
    <>
      <div className="nums__hero-num">
        <span ref={ref}>0</span>
        <i>{suffix}</i>
      </div>
      <div className="nums__double" />
      <div className="nums__caption">{nums.hero.caption}</div>
      <p className="nums__note">{nums.hero.note}</p>
    </>
  )
}

function Stat({ s }) {
  const ref = useRef(null)
  const v = parseVal(s.value)
  useCount(ref, v)
  return (
    <div className="nums__stat">
      <span className="v"><span ref={ref}>0</span>{v.unit}</span>
      <p><Em>{s.text}</Em></p>
    </div>
  )
}

export default function Numbers() {
  return (
    <section className="nums" id="angka">
      <div className="wrap">
        <SecHead kicker={nums.kicker} page={nums.page} />
        <div className="nums__grid">
          <div><HeroNum /></div>
          <div>
            <h2 className="nums__title"><Segs segs={nums.title} /></h2>
            {nums.stats.map((s, i) => <Stat s={s} key={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
