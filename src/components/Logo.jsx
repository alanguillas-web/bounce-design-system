export default function Logo({ size = 28, color = 'var(--purple)' }) {
  return (
    <div style={{
      fontSize: size,
      fontWeight: 900,
      fontStyle: 'italic',
      color,
      letterSpacing: -1,
      lineHeight: 1,
      userSelect: 'none',
    }}>
      b<span style={{
        color: 'var(--lime)',
        fontSize: size * 0.55,
        verticalAlign: 'super',
        fontStyle: 'normal',
        lineHeight: 0,
      }}>°</span>unce
    </div>
  )
}
