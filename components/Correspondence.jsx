'use client'

import { useState } from 'react'
import { correspondence as corr } from '../lib/data'
import { Segs } from './segs'

function RegMark({ cls }) {
  return (
    <span className={`regmark ${cls}`} aria-hidden="true">
      <svg viewBox="0 0 15 15" fill="none" stroke="currentColor">
        <path d="M0 4V0h4M11 0h4v4M15 11v4h-4M4 15H0v-4" />
      </svg>
    </span>
  )
}

export default function Correspondence() {
  const [sent, setSent] = useState(false)
  const [vals, setVals] = useState({ email: '', need: '', passed: '' })

  const set = (k) => (e) => setVals((v) => ({ ...v, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      vals.need ? `Kebutuhan kopi — ${vals.need.slice(0, 80)}` : 'Kebutuhan kopi'
    )
    const body = encodeURIComponent(
      [
        `Email: ${vals.email}`,
        `Kebutuhan: ${vals.need}`,
        vals.passed ? `Yang menyerah: ${vals.passed}` : '',
        '',
        '— dikirim dari giling.coffee',
      ].filter(Boolean).join('\n')
    )
    window.location.href = `mailto:${corr.mailto}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="corr" id="korespondensi">
      <div className="wrap">
        <div className="corr__frame">
          <RegMark cls="tl" /><RegMark cls="tr" /><RegMark cls="bl" /><RegMark cls="br" />
          <div className="corr__inner">
            <div className="corr__kicker"><span className="caps">{corr.kicker}</span></div>

            <h2 className="corr__h2"><Segs segs={corr.title} /></h2>

            <div className="corr__intro">
              <p>{corr.intro}</p>
            </div>

            <form className="corr__form" onSubmit={submit}>
              {corr.fields.map((f) => (
                <div className="field" key={f.key}>
                  <label htmlFor={`f-${f.key}`}>{f.label}</label>
                  <input
                    id={`f-${f.key}`}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={vals[f.key]}
                    onChange={set(f.key)}
                    required={f.key !== 'passed'}
                  />
                </div>
              ))}
            </form>

            <div className="corr__foot">
              <p>{corr.note}</p>
              <button className="btn-paper" onClick={submit} type="button">
                {corr.submit}
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" aria-hidden="true">
                  <path d="M1 5.5h12M9 1.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
            <p className={`corr__ok${sent ? ' on' : ''}`} role="status">
              Terbuka di aplikasi email Anda. Kedua roaster membaca semua kiriman.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
