import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import Logo from '../components/Logo'
import Countdown from '../components/Countdown'

const ARTWORKS = [
  { id: 1, title: 'Néon sur Seine',  tag: 'PHOTO',        tagClass: 'tag-photo',        votes: 842,  art: 'art-1' },
  { id: 2, title: 'Playground',      tag: 'ILLUSTRATION', tagClass: 'tag-illustration', votes: 1203, art: 'art-2' },
  { id: 3, title: 'Minuit Paris',    tag: 'PHOTO',        tagClass: 'tag-photo',        votes: 634,  art: 'art-3' },
  { id: 4, title: 'Abstraction 3D',  tag: '3D',           tagClass: 'tag-3d',           votes: 521,  art: 'art-4' },
]

const CHIPS = ['Tous', 'Illustration', 'Photo', 'Musique', 'Danse', '3D']

const UPCOMING = [
  { label: 'Le silence',    sub: 'Bientôt',  bg: 'var(--orange)',  textColor: 'var(--navy)' },
  { label: 'Matière brute', sub: 'Bientôt',  bg: '#7ac23a',        textColor: 'var(--navy)' },
  { label: 'Rituel',        sub: 'Terminé',  bg: 'var(--purple)',  textColor: 'var(--white)' },
]

export default function FeedScreen({ nav }) {
  const [activeChip, setActiveChip] = useState(0)

  return (
    <div className="screen" style={{ background: 'var(--cream)' }}>
      <StatusBar />

      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 20px 12px' }}>
        <Logo />
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {/* Bell */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 42, height: 42, borderRadius: '50%',
              border: '2.5px solid var(--navy)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </div>
            <div style={{
              position: 'absolute', top: -2, right: -2,
              width: 18, height: 18, borderRadius: '50%',
              background: 'var(--purple)', color: 'white',
              fontSize: 9, fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '2px solid var(--cream)',
            }}>3</div>
          </div>
          {/* Avatar */}
          <div style={{
            width: 42, height: 42, borderRadius: '50%',
            background: 'var(--purple)', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, fontWeight: 800,
            cursor: 'pointer',
            border: '2.5px solid var(--navy)',
          }}>M</div>
        </div>
      </div>

      {/* Hero Tremplin card */}
      <div style={{ padding: '0 16px 16px' }}>
        <div
          onClick={() => nav('tremplin')}
          className="card-shadow"
          style={{
            borderRadius: 28,
            overflow: 'hidden',
            background: `
              radial-gradient(ellipse at 85% 15%, rgba(255,153,57,.75) 0%, transparent 45%),
              radial-gradient(ellipse at 15% 85%, rgba(82,2,252,.55) 0%, transparent 45%),
              radial-gradient(ellipse at 55% 55%, rgba(40,20,10,.6) 0%, transparent 55%),
              #2a1a12
            `,
            padding: '16px',
            minHeight: 230,
            cursor: 'pointer',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Top badges */}
          <div style={{ display: 'flex', gap: 8 }}>
            <span className="pill-badge" style={{ background: 'var(--lime)', color: 'var(--navy)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--navy)', display: 'inline-block' }} />
              En cours
            </span>
            <span className="pill-badge" style={{ background: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,.5)' }}>
              Sponsorisé
            </span>
          </div>

          {/* Content */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,.55)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>
              Tremplin #24
            </div>
            <div style={{ fontSize: 38, fontWeight: 900, fontStyle: 'italic', color: 'white', lineHeight: 1.05, marginBottom: 14 }}>
              La nuit.
            </div>

            <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,.5)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>
              Se termine dans
            </div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <Countdown variant="dark" />
              <div style={{
                marginLeft: 'auto',
                background: 'rgba(255,255,255,.18)',
                backdropFilter: 'blur(6px)',
                borderRadius: 14,
                padding: '6px 12px',
                fontSize: 10,
                fontWeight: 800,
                color: 'white',
                textAlign: 'center',
                lineHeight: 1.3,
                border: '1.5px solid rgba(255,255,255,.25)',
              }}>
                par<br />ARTE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prochains & passés */}
      <div style={{ padding: '0 16px 16px' }}>
        <div className="section-label" style={{ color: 'var(--navy)', marginBottom: 10 }}>
          Prochains &amp; passés
        </div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
          {UPCOMING.map(u => (
            <div
              key={u.label}
              onClick={() => nav('tremplin')}
              className="card-shadow"
              style={{
                minWidth: 148,
                borderRadius: 20,
                background: u.bg,
                padding: '14px 16px 14px',
                flexShrink: 0,
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: 9, fontWeight: 800, color: u.textColor === 'var(--white)' ? 'rgba(255,255,255,.6)' : 'rgba(0,0,0,.45)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>
                {u.sub}
              </div>
              <div style={{ fontSize: 16, fontWeight: 900, color: u.textColor, lineHeight: 1.2 }}>
                {u.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chips filtres */}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '0 16px 14px' }}>
        {CHIPS.map((c, i) => (
          <span
            key={c}
            className={`chip ${i === activeChip ? 'chip-active' : 'chip-inactive'}`}
            onClick={() => setActiveChip(i)}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Grid œuvres */}
      <div style={{ padding: '0 16px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {ARTWORKS.map(aw => (
          <div
            key={aw.id}
            className={`${aw.art} card-shadow`}
            onClick={() => nav('oeuvre')}
            style={{
              borderRadius: 20,
              aspectRatio: '1',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            {/* Tag discipline */}
            <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 2 }}>
              <span className={`pill-badge ${aw.tagClass}`} style={{ fontSize: 9 }}>
                {aw.tag}
              </span>
            </div>
            {/* Gradient overlay + infos */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 100%)',
              padding: '28px 10px 10px',
            }}>
              <div style={{ color: 'white', fontSize: 11, fontWeight: 800, lineHeight: 1.2 }}>{aw.title}</div>
              <div style={{ color: 'var(--lime)', fontSize: 11, fontWeight: 700, marginTop: 2 }}>▲ {aw.votes.toLocaleString('fr')}</div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav active="feed" nav={nav} />
    </div>
  )
}
