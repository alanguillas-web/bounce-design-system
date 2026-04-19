export default function Countdown({ values = { j: '03', h: '14', m: '22', s: '08' }, variant = 'dark' }) {
  const isDark = variant === 'dark'
  const pillStyle = isDark
    ? { background: 'var(--navy)', color: 'var(--white)' }
    : { background: 'rgba(255,255,255,0.15)', color: 'var(--white)', border: '1.5px solid rgba(255,255,255,0.2)' }

  return (
    <div className="countdown-row">
      {Object.entries(values).map(([unit, val]) => (
        <div key={unit} className="countdown-pill" style={pillStyle}>
          <span className="num">{val}</span>
          <span className="unit">{unit}</span>
        </div>
      ))}
    </div>
  )
}
