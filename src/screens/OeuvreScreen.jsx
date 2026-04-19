import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

const ACTIONS = [
  {
    label: 'Save',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    label: 'Com.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    label: 'Part.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"/>
        <line x1="12" y1="9" x2="12" y2="23"/>
        <path d="M4 4h16"/>
      </svg>
    ),
  },
  {
    label: 'Don',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    label: 'Plus',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
      </svg>
    ),
  },
]

export default function OeuvreScreen({ nav, back }) {
  const [voted, setVoted]   = useState(false)
  const [saved, setSaved]   = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const votes = voted ? 1843 : 1842

  return (
    <div className="screen" style={{ background: 'var(--cream)' }}>
      <StatusBar />

      {/* Artwork full-width */}
      <div style={{ position: 'relative', margin: '0 0 0 0' }}>
        <div
          className="art-2"
          style={{ height: 320, position: 'relative', overflow: 'hidden' }}
        />
        {/* Overlay controls */}
        <div style={{
          position: 'absolute', top: 12, left: 16, right: 16,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <button className="back-btn back-btn-light" onClick={back}>←</button>
          <div style={{ display: 'flex', gap: 8 }}>
            <span className="pill-badge" style={{ background: 'white', color: 'var(--navy)', boxShadow: '2px 2px 0 var(--navy)' }}>
              PHOTO
            </span>
            <span className="pill-badge" style={{ background: 'var(--orange)', color: 'var(--navy)', boxShadow: '2px 2px 0 var(--navy)' }}>
              #1
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 20px 0' }}>
        {/* Titre */}
        <div style={{ fontSize: 30, fontWeight: 900, fontStyle: 'italic', color: 'var(--navy)', lineHeight: 1.1, marginBottom: 16 }}>
          Neon sur Seine
        </div>

        {/* Artist card */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '12px 14px',
          borderRadius: 18,
          border: '2.5px solid var(--navy)',
          marginBottom: 16,
        }}>
          <div style={{
            width: 42, height: 42, borderRadius: '50%',
            background: 'var(--purple)', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, fontWeight: 800, flexShrink: 0,
          }}>A</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--navy)' }}>Amina K.</div>
            <div style={{ fontSize: 11, fontWeight: 500, color: 'rgba(12,18,68,.55)' }}>Paris · Photo</div>
          </div>
          <button style={{
            padding: '8px 16px',
            borderRadius: 100,
            background: 'var(--navy)', color: 'white',
            border: 'none', fontSize: 12, fontWeight: 800,
            cursor: 'pointer',
          }}>
            + Suivre
          </button>
        </div>

        {/* Citation */}
        <p style={{
          fontSize: 13, lineHeight: 1.7, color: 'var(--navy)',
          fontStyle: 'italic', opacity: .8,
          marginBottom: 16,
          borderLeft: '3px solid var(--lime)',
          paddingLeft: 14,
        }}>
          « Je traîne dehors quand la ville se tait. Cette photo, c'est un pont à 3h du matin où la lumière tombe comme un rideau. Rien de spectaculaire — juste vrai. »
        </p>

        {/* Votes card */}
        <div style={{
          background: 'var(--purple)',
          borderRadius: 20,
          padding: '16px 18px',
          marginBottom: 16,
          boxShadow: '4px 4px 0 var(--navy)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.6)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>
                Votes
              </div>
              <div style={{ fontSize: 36, fontWeight: 900, color: 'white', lineHeight: 1 }}>
                {votes.toLocaleString('fr')}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.6)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>
                Rang
              </div>
              <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--lime)', lineHeight: 1 }}>
                #1
              </div>
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ background: 'rgba(255,255,255,.2)', borderRadius: 100, height: 8, overflow: 'hidden', marginBottom: 6 }}>
            <div style={{
              width: voted ? '33%' : '30%',
              height: '100%',
              background: 'var(--lime)',
              borderRadius: 100,
              transition: 'width 600ms var(--ease-bounce)',
            }} />
          </div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,.6)' }}>
            {voted ? '33%' : '30%'} des votes du tremplin
          </div>
        </div>

        {/* Actions bar */}
        <div style={{
          display: 'flex',
          border: '2.5px solid var(--navy)',
          borderRadius: 20,
          overflow: 'hidden',
          marginBottom: 20,
        }}>
          {ACTIONS.map((a, i) => (
            <button
              key={a.label}
              onClick={() => a.label === 'Save' && setSaved(s => !s)}
              style={{
                flex: 1,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                padding: '12px 4px',
                background: a.label === 'Save' && saved ? 'var(--lime)' : 'transparent',
                border: 'none',
                borderRight: i < ACTIONS.length - 1 ? '2px solid var(--navy)' : 'none',
                cursor: 'pointer',
                color: 'var(--navy)',
                fontSize: 9, fontWeight: 700,
                transition: 'background 150ms',
              }}
            >
              {a.icon}
              {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sticky CTA Voter */}
      <div style={{
        position: 'sticky', bottom: 76,
        padding: '0 20px 12px',
        background: 'linear-gradient(to top, var(--cream) 70%, transparent)',
      }}>
        {voted ? (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            width: '100%', padding: '18px',
            borderRadius: 100,
            background: 'var(--lime)',
            color: 'var(--navy)',
            fontFamily: 'var(--font)',
            fontSize: 14, fontWeight: 800,
            letterSpacing: 1, textTransform: 'uppercase',
            boxShadow: '4px 4px 0 var(--navy)',
          }}>
            ✓ Vote enregistré !
          </div>
        ) : (
          <button
            className="btn-primary"
            onClick={() => setShowPopup(true)}
          >
            ▲ Voter pour cette œuvre
          </button>
        )}
      </div>

      <BottomNav active="voter" nav={nav} />

      {/* Popup inscription */}
      {showPopup && (
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 200,
            background: 'rgba(12,18,68,.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'flex-end',
          }}
          onClick={() => setShowPopup(false)}
        >
          <div
            style={{
              width: '100%',
              background: 'var(--cream)',
              borderRadius: '28px 28px 0 0',
              padding: '28px 24px 40px',
              border: '2.5px solid var(--navy)',
              borderBottom: 'none',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Drag handle */}
            <div style={{ width: 40, height: 4, background: 'var(--navy)', borderRadius: 100, margin: '0 auto 24px', opacity: .3 }} />

            <div style={{ fontSize: 26, fontWeight: 900, fontStyle: 'italic', color: 'var(--navy)', marginBottom: 8, lineHeight: 1.1 }}>
              Rejoins Bounce<br />pour voter !
            </div>
            <p style={{ fontSize: 13, color: 'var(--navy)', opacity: .7, lineHeight: 1.6, marginBottom: 20 }}>
              Crée ton compte gratuitement pour soutenir les artistes, suivre les classements et ne rater aucun tremplin.
            </p>

            {/* Bénéfices */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
              {['Voter pour tes artistes préférés', 'Recevoir des notifications de résultats', 'Découvrir de nouveaux talents'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 900, color: 'var(--navy)', flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)' }}>{b}</span>
                </div>
              ))}
            </div>

            <button
              className="btn-primary"
              onClick={() => { setVoted(true); setShowPopup(false) }}
              style={{ marginBottom: 12 }}
            >
              Créer mon compte
            </button>
            <button style={{
              width: '100%', padding: '14px',
              borderRadius: 100,
              border: '2.5px solid var(--navy)',
              background: 'transparent',
              color: 'var(--navy)',
              fontSize: 13, fontWeight: 700,
              cursor: 'pointer',
            }}>
              J'ai déjà un compte
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
