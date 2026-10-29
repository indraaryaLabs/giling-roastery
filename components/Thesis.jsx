'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { thesis } from '../lib/data'
import { Segs } from './segs'
import SecHead from './SecHead'

// Parser: ⸢n⸣ → referensi footnote; sisanya kata per kata (.w)
function tokenize(text) {
  const out = []
  const re = /⸢(\d+)⸣/g
  let last = 0, m
  const pushWords = (chunk) =>
    chunk.split(/\s+/).filter(Boolean).forEach((w) => out.push({ t: 'w', v: w }))
  while ((m = re.exec(text))) {
    pushWords(text.slice(last, m.index))
    out.push({ t: 'ref', v: m[1] })
    last = re.lastIndex
  }
  pushWords(text.slice(last))
  return out
}

function Ornament() {
  return (
    <div className="orn" aria-hidden="true">
      <svg viewBox="0 0 26 18">
        <path d="M2 16 10 2M16 16 24 2" />
      </svg>
    </div>
  )
}

function EndMark() {
  return (
    <span className="end-mark" aria-hidden="true">
      <svg viewBox="0 0 12 12">
        <path d="M3 10 8 2M6 10l5-8" />
      </svg>
    </span>
  )
}

export default function Thesis() {
  const rootRef = useRef(null)
  const pctRef = useRef(null)
  const meterRefs = useRef([])
  const shownRef = useRef(0)
  const totalRef = useRef(1)

  const parsed = useMemo(
    () =>
      thesis.paragraphs.map((p, pi) => ({
        ...p,
        tokens: tokenize(p.text),
      })),
    []
  )
  // footnote pertama kali muncul di paragraf mana → posisi float .sn
  const snAt = useMemo(() => {
    const at = {}
    parsed.forEach((p, pi) => {
      p.tokens.forEach((tk) => {
        if (tk.t === 'ref' && !(tk.v in at)) at[tk.v] = pi
      })
    })
    return at
  }, [parsed])
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    root.classList.add('pie-js')

    const words = root.querySelectorAll('.pie-essay .w')
    totalRef.current = words.length
    shownRef.current = 0

    const sync = () => {
      const pct = Math.round((shownRef.current / totalRef.current) * 100)
      if (pctRef.current) pctRef.current.textContent = pct
      const mobile = window.matchMedia('(max-width: 899.98px)').matches
      meterRefs.current.forEach((b) => {
        if (b) b.style.transform = mobile ? `scaleX(${pct / 100})` : `scaleY(${pct / 100})`
      })
    }

    if (reduced) {
      words.forEach((w) => w.classList.add('on'))
      shownRef.current = words.length
      sync()
      root.querySelectorAll('.sn').forEach((s) => s.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add('on')
            shownRef.current++
            sync()
            io.unobserve(en.target)
          }
        }
      },
      { rootMargin: '0px 0px -38% 0px' }
    )
    words.forEach((w) => io.observe(w))

    const ioSn = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            ioSn.unobserve(en.target)
          }
        }
      },
      { rootMargin: '-12% 0px -12% 0px' }
    )
    root.querySelectorAll('.sn').forEach((s) => ioSn.observe(s))

    // mobile: fixed bar (.pie-side) muncul hanya saat tesis terlihat
    const side = root.querySelector('.pie-side')
    const ioSec = new IntersectionObserver(
      ([en]) => side && side.classList.toggle('on', en.isIntersecting),
      { threshold: 0.08 }
    )
    ioSec.observe(root)

    return () => { io.disconnect(); ioSn.disconnect(); ioSec.disconnect() }
  }, [parsed])

  // klik referensi: desktop → flash footnote di margin; mobile → buka/tutup inline
  const onRef = (e, n) => {
    e.preventDefault()
    const root = rootRef.current
    const sn = root.querySelector(`.sn[data-n="${n}"]`)
    if (!sn) return
    const mobile = window.matchMedia('(max-width: 899.98px)').matches
    if (mobile) {
      const isOpen = sn.classList.contains('open')
      sn.classList.toggle('open', !isOpen)
      e.currentTarget.setAttribute('aria-expanded', String(!isOpen))
    } else {
      sn.classList.remove('flash')
      void sn.offsetWidth
      sn.classList.add('flash')
      window.setTimeout(() => sn.classList.remove('flash'), 700)
    }
  }

  let wi = 0 // nomor urut kata (untuk key stabil)

  const renderPara = (p, pi) => {
    const isLead = !!p.lead
    const isLast = pi === parsed.length - 1
    const nodes = []
    let skip = 0

    p.tokens.forEach((tk, ti) => {
      if (skip) { skip--; return }
      if (tk.t === 'ref') {
        const n = tk.v
        const fn = thesis.footnotes[n]
        nodes.push(
          <button
            key={`r${pi}-${ti}`}
            className="sn-ref"
            data-n={n}
            aria-expanded={false}
            aria-label={`Catatan ${n}`}
            onClick={(e) => onRef(e, n)}
          >
            {n}
          </button>
        )
        if (fn && snAt[n] === pi) {
          nodes.push(
            <span
              key={`sn${pi}-${ti}`}
              className="sn"
              data-n={n}
            >
              <span className="sn-n">{n}</span>
              {fn.text}
            </span>
          )
        }
        return
      }

      let v = tk.v
      const rest = []
      // drop cap: huruf pertama kata pertama → .dc; dua kata berikut → .sc
      if (isLead && wi === 0) {
        const dc = v[0]
        const rem = v.slice(1)
        const scWords = [rem, p.tokens[ti + 1] && p.tokens[ti + 1].t === 'w' ? p.tokens[ti + 1].v : null]
          .filter(Boolean)
        skip = Math.max(0, scWords.length - 1)
        nodes.push(
          <span key={`dc${pi}`} className="dc" aria-hidden="true">{dc}</span>
        )
        nodes.push(
          <span key={`sc${pi}`} className="sc">
            {scWords.map((w, k) => (
              <span key={k}>
                <span className="w" data-w>{w}</span>
                {k < scWords.length - 1 ? ' ' : ''}
              </span>
            ))}
          </span>
        )
        wi += scWords.length
        nodes.push(' ')
        return
      }

      nodes.push(
        <span className="w" data-w key={`w${pi}-${ti}`}>{v}</span>
      )
      nodes.push(' ')
      wi++
    })

    // end-mark merah di akhir paragraf terakhir
    if (isLast) nodes.push(<EndMark key={`em${pi}`} />)

    return <p key={pi}>{nodes}</p>
  }

  return (
    <section className="thesis" id="tesis">
      <div className="wrap">
        <SecHead kicker={thesis.kicker} page={thesis.page} />
        <div className="pie pie-wide" ref={rootRef}>
          <div className="pie-head">
            <h2 className="thesis__title"><Segs segs={thesis.title} /></h2>
            <div className="thesis__byline">
              <span className="caps">{thesis.byline}</span>
              <span className="caps">{thesis.filed}</span>
            </div>
          </div>
          <div className="pie-grid">
            <aside className="pie-side" aria-hidden="true">
              <div className="pie-meta">
                <span className="pie-lab">Membaca</span>
                <span className="pie-pct"><span ref={pctRef}>0</span><small>%</small></span>
                <span className="pie-lab">
                  <b>{thesis.words}</b> kata<br />{thesis.minutes} mnt
                </span>
              </div>
              <div className="pie-meter">
                <i /><i />
                <b ref={(el) => (meterRefs.current[0] = el)} style={{ transform: 'scale(0)' }} />
                <b ref={(el) => (meterRefs.current[1] = el)} style={{ transform: 'scale(0)' }} />
              </div>
            </aside>

            <div className="pie-body">
              <div className="pie-essay">
                {parsed
                  .flatMap((p, pi) => [
                    renderPara(p, pi),
                    pi === 5 ? <Ornament key={`orn${pi}`} /> : null,
                  ])
                  .filter(Boolean)}
                <p className="hang thesis__sig">{thesis.signature}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
