// Empat figur teknis — gaya .pfg (stroke ink 1px, teks sans 8.5px, aksen merah).

// Gbr. 2 — Kurva sangrai batch 214 (sumbu waktu × suhu, titik balik & first crack)
export function RoastCurve() {
  const bean =
    'M48 44 C70 96 88 138 112 142 C140 146 168 112 200 84 C240 50 290 42 330 38 C360 35 400 33 452 31'
  return (
    <svg viewBox="0 0 480 214" role="img" aria-label="Kurva sangrai batch 214">
      {/* grid samar */}
      <path className="s thin faint" d="M40 46H460" />
      <path className="s thin faint" d="M40 82H460" />
      <path className="s thin faint" d="M40 118H460" />
      <path className="s thin faint" d="M40 154H460" />
      <path className="s thin faint" d="M124 14V190" />
      <path className="s thin faint" d="M208 14V190" />
      <path className="s thin faint" d="M292 14V190" />
      <path className="s thin faint" d="M376 14V190" />

      {/* sumbu */}
      <path className="s" d="M40 14V190" />
      <path className="s" d="M40 190H460" />
      <text x="4" y="47">200</text>
      <text x="4" y="85">160</text>
      <text x="4" y="121">120</text>
      <text x="4" y="157">80</text>
      <text x="40" y="202">0</text>
      <text x="124" y="202" textAnchor="middle">2</text>
      <text x="208" y="202" textAnchor="middle">4</text>
      <text x="292" y="202" textAnchor="middle">6</text>
      <text x="376" y="202" textAnchor="middle">8</text>
      <text x="460" y="202" textAnchor="end">10</text>
      <text className="it" x="460" y="10" textAnchor="end">suhu biji, °C</text>

      {/* kurva biji + aliran sangrai */}
      <path className="s o" d={bean} />
      <path className="flow" d={bean} />

      {/* titik balik */}
      <circle className="of fade" cx="112" cy="142" r="3" />
      <text className="tg" x="112" y="165" textAnchor="middle">TITIK BALIK</text>
      <text className="it" x="112" y="178" textAnchor="middle">± 1,4 menit</text>

      {/* first crack */}
      <circle className="of fade" cx="330" cy="38" r="3" />
      <text className="to" x="330" y="24" textAnchor="middle">FIRST CRACK</text>
    </svg>
  )
}

// Gbr. 3 — Garis tunggal espresso: tangki → pompa → boiler → grup, BARISTA, 9 bar
export function EspressoLine() {
  return (
    <svg viewBox="0 0 320 214" role="img" aria-label="Diagram garis tunggal espresso">
      {/* tangki */}
      <path className="s" d="M24 60V120H88V60" />
      <text className="tg" x="56" y="50" textAnchor="middle">TANGKI</text>
      <text x="56" y="136" textAnchor="middle">hijau · 12 kg</text>
      {/* gelombang air (muncul saat figure masuk viewport) */}
      <path className="s wf" d="M32 100 q4 -5 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0" />

      {/* pipa + pompa */}
      <path className="s" d="M88 90H120" />
      <circle className="s" cx="132" cy="90" r="12" />
      <path className="s" d="M128 84l10 6-10 6" />
      <text x="132" y="70" textAnchor="middle">P-01</text>
      <path className="s" d="M144 90H176" />

      {/* boiler */}
      <rect className="s" x="176" y="58" width="64" height="64" />
      <path className="s thin" d="M182 90q8 -10 16 0t16 0t16 0t16 0" />
      <text className="tg" x="208" y="50" textAnchor="middle">BOILER</text>
      <text x="208" y="136" textAnchor="middle">1,4 L</text>

      {/* grup */}
      <path className="s" d="M240 90H268" />
      <path className="s" d="M268 72H300V108H268Z" />
      <path className="s thin" d="M276 108v8h16v-8" />
      <text className="tg" x="284" y="64" textAnchor="middle">GRUP</text>
      <path className="s thin" d="M272 120h24l-3 12h-18z" />
      <text className="it" x="284" y="148" textAnchor="middle">espresso</text>

      {/* gauge 9 bar */}
      <circle className="s" cx="296" cy="44" r="14" />
      <path className="s o" d="M296 44l8 -9" />
      <text className="to" x="296" y="18" textAnchor="middle">9 bar</text>
      <path className="s thin faint" d="M284 55a14 14 0 0 0 24 0" />

      {/* kotak merah barista */}
      <path className="s thin faint" d="M274 150V116" />
      <rect className="s o" x="240" y="150" width="68" height="30" />
      <text className="to" x="274" y="169" textAnchor="middle">BARISTA</text>

      {/* aliran */}
      <path className="flow" d="M88 90H120M144 90H176M240 90H268" />
    </svg>
  )
}

// Gbr. 4 — Peta rute Flores→Bandung; bagian mahal adalah yang tidak berpindah
export function RouteMap() {
  const route = 'M60 40 Q95 105 150 150 Q210 122 270 120'
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="Peta rute Flores ke Bandung">
      {/* rute samar */}
      <path className="s thin faint" d="M60 40Q40 90 30 120" />
      <text x="30" y="134" textAnchor="middle">P. KUPANG</text>
      <path className="s thin faint" d="M60 40Q100 20 148 26" />
      <text x="160" y="20">WOTU... — LOMBOK</text>
      <path className="s thin faint" d="M150 150Q220 180 282 162" />
      <text x="286" y="170">SURABAYA</text>

      {/* rute utama */}
      <path id="route" className="s o" d={route} />
      <path className="flow" d={route} />

      {/* ring antrean di Jakarta */}
      <circle className="s o" cx="150" cy="150" r="13" />
      <text className="to" x="150" y="178" textAnchor="middle">ANTRE 3 HARI</text>

      {/* kota */}
      <text className="tg" x="60" y="26" textAnchor="middle">MEDAN</text>
      <text className="tg" x="150" y="130" textAnchor="middle">JAKARTA</text>
      <text className="tg" x="270" y="106" textAnchor="middle">BANDUNG</text>
      <text className="it" x="205" y="142" textAnchor="middle">Laut Jawa · 36 jam</text>

      {/* titik bergerak: berhenti di ring */}
      <circle className="of fade" r="3">
        <animateMotion
          dur="7s"
          repeatCount="indefinite"
          calcMode="linear"
          keyPoints="0;0.54;0.54;1"
          keyTimes="0;0.4;0.62;1"
        >
          <mpath href="#route" />
        </animateMotion>
      </circle>
    </svg>
  )
}

// Gbr. 5 — Plate cupping 8×12 = 96 cangkir; H12 ditandai
export function WellPlate() {
  const X0 = 44, Y0 = 26, CW = 26, CH = 26
  const cells = []
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 12; c++) {
      const cx = X0 + c * CW + 13
      const cy = Y0 + r * CH + 13
      if (r === 7) continue // baris H kosong
      const isOx = r < 4
      const from = isOx ? 0.94 : 0.86
      const to = isOx ? 0.046 : 0.042
      const op = from - (from - to) * (c / 11)
      cells.push(
        <circle
          key={`${r}-${c}`}
          cx={cx}
          cy={cy}
          r="8.5"
          fill={isOx ? 'var(--pfg-ox)' : 'var(--pfg-ink)'}
          stroke="none"
          opacity={op.toFixed(3)}
          className="fade"
        />
      )
    }
  }
  return (
    <svg viewBox="0 0 400 296" role="img" aria-label="Plate cupping 96 cangkir">
      <rect className="s" x="36" y="18" width="330" height="226" />
      {Array.from({ length: 12 }, (_, c) => (
        <text key={`n${c}`} x={X0 + c * CW + 13} y="13" textAnchor="middle">{c + 1}</text>
      ))}
      {Array.from({ length: 8 }, (_, r) => (
        <text key={`l${r}`} x="27" y={Y0 + r * CH + 17} textAnchor="middle">
          {String.fromCharCode(65 + r)}
        </text>
      ))}
      {cells}

      {/* X merah di H12 + leader + anotasi */}
      <path className="s o" d="M339 217l8 8M347 217l-8 8" />
      <path className="s o thin" d="M351 224L214 254" />
      <text x="218" y="266">
        <tspan className="to">H12</tspan> — ada yang menuang berlebihan.
      </text>
      <text className="it" x="36" y="286">96 cangkir · sampel ganda · tangan yang sama</text>
    </svg>
  )
}

export const FIGS = {
  roast: RoastCurve,
  bar: EspressoLine,
  route: RouteMap,
  plate: WellPlate,
}
