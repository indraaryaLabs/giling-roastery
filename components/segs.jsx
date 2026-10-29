// Util kecil: render judul bersegmen { text, i(italic), dot(titik merah) }
export function Segs({ segs }) {
  return (
    <>
      {segs.map((s, i) =>
        s.dot ? (
          <span className="dot" key={i} aria-hidden="true">.</span>
        ) : s.i ? (
          <i key={i}>{s.text}</i>
        ) : (
          <span key={i}>{s.text}</span>
        )
      )}
    </>
  )
}
