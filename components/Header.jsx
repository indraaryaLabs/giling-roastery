'use client'

import { useEffect, useState } from 'react'
import { brand, toc, footer } from '../lib/data'

const NAV = toc.filter((t) => t.nav !== false)
const PAGE_MAP = { korespondensi: { id: 'korespondensi', page: 9, label: 'Korespondensi' } }
toc.forEach((t) => {
  PAGE_MAP[t.id] = { id: t.id, page: t.page, label: t.label }
})
const SPY = [...toc.map((t) => t.id), 'korespondensi']

function Logo() {
  return (
    <a className="logo" href="/" aria-label="Giling — kembali ke atas">
      <span className="logo__slash" aria-hidden="true">//</span>
      <span className="logo__word">Gi<i>li</i>ng</span>
      <span className="logo__vol">III</span>
    </a>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path d="M1 5h11M8.5 1.5 12 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function MenuOverlay({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className={`menu-ov${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu">
      <div className="menu-ov__bar wrap">
        <Logo />
        <button className="menu-ov__close" onClick={onClose}>
          Tutup <span aria-hidden="true">✕</span>
        </button>
      </div>
      <div className="menu-ov__list wrap">
        {footer.menuLinks.map((m, i) => {
          const t = toc.find((x) => x.label === m.label)
          return (
            <a
              className="menu-ov__item"
              key={i}
              href={`#${t ? t.id : 'tesis'}`}
              onClick={onClose}
            >
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <span className="ti">{m.label}</span>
              <span className="ds">{m.desc}</span>
              <span className="pg">{m.page}</span>
            </a>
          )
        })}
      </div>
      <div className="menu-ov__foot wrap">
        <span className="menu-ov__mail">
          <a href={`mailto:${brand.emails.deck}`}>{brand.emails.deck}</a>
        </span>
        <span className="menu-ov__mail serif-i" style={{ color: 'var(--g3)' }}>
          {brand.initials}
        </span>
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [cur, setCur] = useState({ id: null, page: 1, label: 'Sampul' })

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        document.body.classList.toggle('scrolled', window.scrollY > 40)
        const vh = window.innerHeight
        let next = { id: null, page: 1, label: 'Sampul' }
        for (const id of SPY) {
          const el = document.getElementById(id)
          if (el && el.getBoundingClientRect().top <= vh * 0.42) next = PAGE_MAP[id]
        }
        setCur((p) => (p.id === next.id && p.page === next.page ? p : next))
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

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <>
      <header className="header">
        <div className="header__row">
          <Logo />

          <nav className="nav only-scroll" aria-label="Navigasi edisi">
            {NAV.map((t) => (
              <a key={t.id} href={`#${t.id}`} className={cur.id === t.id ? 'on' : ''}>
                {t.label}
              </a>
            ))}
          </nav>

          <div className="only-top">
            <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Buka menu">
              <span className="menu-btn__label">Menu</span>
              <span className="menu-btn__icon" aria-hidden="true"><span /><span /></span>
            </button>
          </div>

          <div className="only-scroll header__right">
            <span className="page-ind"><i>{`hlm. ${cur.page} — ${cur.label}`}</i></span>
            <a className="btn-ink" href="#korespondensi">
              Kirim kebutuhan <ArrowIcon />
            </a>
          </div>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  )
}
