'use client'

import { useEffect, useRef } from 'react'

// Baris § atas setiap section: kicker kiri, "Jurnal Giling · hlm. N" kanan.
// Brand hanya muncul (fade in) saat section masuk viewport.
export default function SecHead({ kicker, page }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { rootMargin: '-10% 0px -10% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="sec-head" ref={ref}>
      <span className="caps">{kicker}</span>
      <span className="pg"><i>Jurnal Giling</i> · hlm. {page}</span>
    </div>
  )
}
