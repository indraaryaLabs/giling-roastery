'use client'

import { useEffect, useRef } from 'react'

// Wrapper .pfg: mengukur panjang tiap elemen stroke saat mount (--L),
// lalu memicu animasi draw-on + label fade saat masuk viewport (.in/.vis).
export default function Figure({ children, large }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const svg = el.querySelector('svg')

    // ukur & pasang --L / --sd (stagger 26ms) untuk semua elemen stroke
    const strokes = [...svg.querySelectorAll('path,line,rect,circle,polyline')].filter(
      (e) => {
        const cls = e.getAttribute('class') || ''
        return /\b(s|o|thin|bus)\b/.test(cls) && !/\bflow\b/.test(cls)
      }
    )
    strokes.forEach((e, i) => {
      try {
        const L = e.getTotalLength()
        e.style.setProperty('--L', L.toFixed(1))
        e.style.setProperty('--sd', `${i * 26}ms`)
      } catch {
        /* elemen tanpa geometri */
      }
    })

    const io = new IntersectionObserver(
      ([en]) => {
        if (en.isIntersecting) {
          el.classList.add('in', 'vis')
          io.disconnect()
        }
      },
      { threshold: 0.22 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`pfg armed${large ? ' pfg-l' : ''}`} ref={ref}>
      {children}
    </div>
  )
}
