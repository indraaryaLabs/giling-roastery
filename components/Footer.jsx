'use client'

import { useEffect, useState } from 'react'
import { brand, footer } from '../lib/data'

function Clock({ city }) {
  const [t, setT] = useState('--:--:--')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('id-ID', {
      timeZone: city.tz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    const tick = () => setT(fmt.format(new Date()).replace(/\./g, ':'))
    tick()
    const iv = setInterval(tick, 1000)
    return () => clearInterval(iv)
  }, [city.tz])

  return (
    <span className="clock">
      <b>{t}</b> <span>{city.zone}</span>
    </span>
  )
}

export default function Footer() {
  const [b, j] = brand.cities
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__col footer__colophon">
            <span className="flabel">{footer.colophonLabel}</span>
            {footer.colophon.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="footer__col footer__addr">
            <span className="flabel">{b.label}</span>
            <p>{b.addr1}<br />{b.addr2}</p>
            <Clock city={b} />
          </div>

          <div className="footer__col footer__addr">
            <span className="flabel">{j.label}</span>
            <p>{j.addr1}<br />{j.addr2}</p>
            <Clock city={j} />
          </div>

          <div className="footer__col">
            <span className="flabel">{footer.correspondenceLabel}</span>
            <a href={`mailto:${brand.emails.deck}`}>{brand.emails.deck}</a>
            <a href={`mailto:${brand.emails.letters}`}>{brand.emails.letters}</a>
          </div>

          <div className="footer__col">
            <span className="flabel">{footer.partnersLabel}</span>
            {brand.founders.map((f) => <p key={f}>{f}</p>)}
          </div>

          <div className="footer__col footer__fine">
            <span className="flabel">{footer.finePrintLabel}</span>
            <p>{footer.finePrint}</p>
          </div>
        </div>

        <div className="footer__mark">
          <div className="footer__word" aria-hidden="true">Gi<i>li</i>ng</div>
          <div className="footer__slashes" aria-hidden="true">
            <span className="a" /><span className="b" />
          </div>
        </div>

        <div className="footer__bar">
          <div className="footer__bar-in">
            <span>{footer.copyright}</span>
            <span>{footer.meta}</span>
            <span>
              {footer.links[0] && <a href="/privasi">{footer.links[0]}</a>}
              {' · '}
              <a href="/#sampul">{footer.links[1]}</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
