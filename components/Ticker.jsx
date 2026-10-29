import { ticker } from '../lib/data'

function Items() {
  return (
    <>
      {ticker.items.map((it, i) => (
        <span className="tk" key={i}>
          <i className="tk__dot" />
          <b>{it.name}</b>&nbsp;{it.text}&nbsp;—&nbsp;<i>{it.accent}</i>
        </span>
      ))}
    </>
  )
}

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__left">{ticker.left}</div>
      <div className="ticker__view">
        <div className="ticker__track">
          <Items />
          <Items />
        </div>
      </div>
      <div className="ticker__right">{ticker.right}</div>
    </div>
  )
}
