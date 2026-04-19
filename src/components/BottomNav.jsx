const tabs = [
  {
    id: 'feed', label: 'Accueil',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  {
    id: 'decouverte', label: 'Découverte',
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    )
  },
  {
    id: 'voter', label: 'Voter',
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    )
  },
  {
    id: 'profil', label: 'Profil',
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    )
  },
]

export default function BottomNav({ active, nav }) {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 84,
      background: 'var(--cream)',
      borderTop: '2px solid var(--navy)',
      display: 'flex', alignItems: 'flex-start',
      padding: '10px 0 0',
      zIndex: 100,
    }}>
      {tabs.map(t => {
        const isActive = t.id === active
        return (
          <button
            key={t.id}
            onClick={() => nav(t.id)}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              background: 'none', border: 'none', cursor: 'pointer',
              color: isActive ? 'var(--navy)' : 'rgba(12,18,68,0.4)',
              transition: 'color 150ms',
              position: 'relative',
            }}
          >
            {isActive && (
              <div style={{
                position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                width: 40, height: 40,
                background: 'var(--lime)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 0 var(--navy)',
              }}>
                {t.icon(true)}
              </div>
            )}
            {!isActive && t.icon(false)}
            <span style={{
              fontSize: 10, fontWeight: isActive ? 800 : 600,
              marginTop: isActive ? 28 : 0,
            }}>
              {t.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
