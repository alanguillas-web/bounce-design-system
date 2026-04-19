export default function StatusBar({ dark = false }) {
  const color = dark ? 'rgba(255,255,255,0.9)' : '#0C1244'
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 24px 4px',
      color,
    }}>
      <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
      <div style={{ width: 120, height: 34, background: dark ? 'rgba(255,255,255,0.15)' : '#111', borderRadius: 20, flexShrink: 0 }} />
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="17" height="12" viewBox="0 0 17 12" fill={color}>
          <rect x="0" y="4" width="3" height="8" rx="1" />
          <rect x="4.5" y="2.5" width="3" height="9.5" rx="1" />
          <rect x="9" y="1" width="3" height="11" rx="1" />
          <rect x="13.5" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 3C10.2 3 12.2 3.9 13.6 5.4L15 4C13.2 2.1 10.7 1 8 1C5.3 1 2.8 2.1 1 4L2.4 5.4C3.8 3.9 5.8 3 8 3Z" fill={color}/>
          <path d="M8 6C9.4 6 10.7 6.6 11.6 7.5L13 6.1C11.7 4.8 10 4 8 4C6 4 4.3 4.8 3 6.1L4.4 7.5C5.3 6.6 6.6 6 8 6Z" fill={color}/>
          <circle cx="8" cy="10" r="1.5" fill={color}/>
        </svg>
        <div style={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
          <div style={{ width: 22, height: 11, border: `1.5px solid ${color}`, borderRadius: 3, padding: '1.5px', display: 'flex', gap: 1 }}>
            <div style={{ flex: 1, background: color, borderRadius: 1 }} />
            <div style={{ flex: 1, background: color, borderRadius: 1 }} />
            <div style={{ flex: 1, background: color, borderRadius: 1 }} />
          </div>
        </div>
      </div>
    </div>
  )
}
