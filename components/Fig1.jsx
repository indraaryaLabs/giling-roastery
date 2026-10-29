'use client'

import { useEffect, useRef } from 'react'
import { hero } from '../lib/data'

// Gbr. 1 — dua hairline yang "menggambar" dirinya + label nama roaster.
// Meniru komponen .plh asli: container 26px, dua garis scaleX, label absolut.
export default function Fig1() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const draw = requestAnimationFrame(() =>
      requestAnimationFrame(() => el.classList.remove('plh-armed'))
    )

    // count-up Δ 0 → 0,3
    const numEl = el.querySelector('[data-d]')
    const m = hero.measure.match(/^Δ\s*([\d.,]+)\s*(.*)$/)
    const target = m ? parseFloat(m[1].replace(',', '.')) : 0.3
    const rest = m ? m[2] : 'mm · tidak pernah nol'
    let raf = 0
    const t0 = performance.now() + 1500
    const tick = (now) => {
      if (!numEl) return
      if (reduced) { numEl.textContent = m ? m[1] : '0,3'; return }
      const p = Math.min(1, Math.max(0, (now - t0) / 1200))
      const e = 1 - Math.pow(1 - p, 3)
      numEl.textContent = (target * e).toFixed(1).replace('.', ',')
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => { cancelAnimationFrame(draw); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div className="hero__fig1 bleed">
      <div className="plh plh-armed" ref={ref} style={{ '--g': 14 }}>
        <div className="plh-hl plh-a"><i /></div>
        <div className="plh-hl plh-b"><i /></div>
        <div className="plh-lab">
          <span className="plh-t plh-na">{hero.bylines[0].name}<em>{hero.bylines[0].role}</em></span>
          <span className="plh-t plh-nb">{hero.bylines[1].name}<em>{hero.bylines[1].role}</em></span>
          <span className="plh-t plh-fa">{hero.fig1}</span>
          <span className="plh-t plh-fb">Δ <span data-d>0,0</span> mm · tidak pernah nol</span>
          <span className="plh-bar" />
          <span className="plh-tk plh-ta" />
          <span className="plh-tk plh-tb" />
        </div>
      </div>
    </div>
  )
}
