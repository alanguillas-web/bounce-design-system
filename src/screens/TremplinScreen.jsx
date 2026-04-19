import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import Countdown from '../components/Countdown'

const PRIZES = [
  { rank: '1°', amount: '5 000 €', extra: '+ expo Paris',  bg: 'var(--purple)', text: 'white' },
  { rank: '2°', amount: '2 000 €', extra: '+ résidence',   bg: 'var(--orange)', text: 'var(--navy)' },
  { rank: '3°', amount: '500 €',   extra: '+ matos',       bg: 'var(--lime)',   text: 'var(--navy)' },
]

const ARTWORKS = [
  { id: 1, rank: 1, art: 'art-1', tag: 'PHOTO',        tagClass: 'tag-photo',        title: 'Néon sur Seine', votes: 1842 },
  { id: 2, rank: 2, art: 'art-2', tag: 'ILLUSTRATION', tagClass: 'tag-illustration', title: 'Playground',     votes: 1203 },
  { id: 3, rank: 3, art: 'art-3', tag: 'PHOTO',        tagClass: 'tag-photo',        title: 'Minuit Paris',   votes: 842  },
  { id: 4, rank: 4, art: 'art-4', tag: '3D',           tagClass: 'tag-3d',           title: 'Abstraction',    votes: 634  },
]

const CHIPS = ['Tous', 'Illustration', 'Photo', 'Musique', '3D']
const TABS  = ['Œuvres', 'Classement', 'Règles']

export default function TremplinScreen({ nav, back }) {
  const [activeTab, setActiveTab]   = useState(0)
  const [activeChip, setActiveChip] = useState(0)

  return (
    <div className="screen" style={{ background: 'var(--navy)' }}>
      <StatusBar dark />

      {/* Hero area */}
      <div style={{
        position: 'relative',
        minHeight: 300,
        background: `
          radial-gradient(ellipse at 70% 25%, rgba(255,153,57,.8) 0%, transparent 50%),
          radial-gradient(ellipse at 25% 75%, rgba(82,2,252,.5) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(40,15,5,.7) 0%, transparent 60%),
          #1e1208
        `,
        padding: '12px 16px 28px',
      }}>
        {/* Nav row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <button className="back-btn" onClick={back}>←</button>
          <span className="pill-badge" style={{ background: 'var(--lime)', color: 'var(--navy)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--navy)', display: 'inline-block' }} />
            En cours
          </span>
        </div>

        {/* Meta */}
        <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,.55)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>
          Tremplin #24 — Sponsorisé par{' '}
          <span
            style={{ color: 'var(--lime)', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => nav('marque')}
          >
            Arte
          </span>
        </div>
        <div style={{ fontSize: 44, fontWeight: 900, fontStyle: 'italic', color: 'white', lineHeight: 1.0, marginBottom: 10 }}>
          La nuit.
        </div>
        <p style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.7)', lineHeight: 1.5, marginBottom: 20 }}>
          Montrez-nous ce que vos yeux voient quand la ville dort.
        </p>

        {/* Countdown */}
        <div style={{ fontSize: 9, fontWeight: 800, color: 'rgba(255,255,255,.5)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>
          Se termine dans
        </div>
        <Countdown variant="light" values={{ j: '03', h: '14', m: '22', s: '00' }} />
      </div>

      {/* Prizes */}
      <div style={{ padding: '20px 16px 0' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {PRIZES.map(p => (
            <div
              key={p.rank}
              className="card-shadow"
              style={{
                flex: 1,
                borderRadius: 18,
                background: p.bg,
                padding: '14px 12px',
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 700, color: p.text, opacity: .6, marginBottom: 4 }}>{p.rank}</div>
              <div style={{ fontSize: p.rank === '1°' ? 22 : 18, fontWeight: 900, color: p.text, lineHeight: 1.1 }}>
                {p.amount.includes('€') ? (
                  <>
                    {p.amount.replace(' €', '')}<br />€
                  </>
                ) : p.amount}
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: p.text, opacity: .75, marginTop: 4 }}>{p.extra}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 6, padding: '20px 16px 14px' }}>
        {TABS.map((t, i) => (
          <button
            key={t}
            onClick={() => setActiveTab(i)}
            style={{
              padding: '10px 18px',
              borderRadius: 100,
              border: 'none',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 700,
              transition: 'all 150ms',
              background: i === activeTab ? 'var(--white)' : 'rgba(255,255,255,.12)',
              color:      i === activeTab ? 'var(--navy)' : 'rgba(255,255,255,.7)',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Chips filtres */}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '0 16px 14px' }}>
        {CHIPS.map((c, i) => (
          <span
            key={c}
            className={`chip ${i === activeChip ? 'chip-dark-active' : 'chip-dark'}`}
            onClick={() => setActiveChip(i)}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Artwork grid */}
      <div style={{ padding: '0 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {ARTWORKS.map(aw => (
          <div
            key={aw.id}
            className={`${aw.art}`}
            onClick={() => nav('oeuvre')}
            style={{
              borderRadius: 20,
              aspectRatio: '1',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '2px solid rgba(255,255,255,.15)',
            }}
          >
            {/* Rank badge */}
            <div style={{
              position: 'absolute', top: 10, left: 10, zIndex: 2,
              width: 26, height: 26, borderRadius: '50%',
              background: aw.rank <= 3 ? 'var(--lime)' : 'rgba(255,255,255,.3)',
              color: 'var(--navy)',
              fontSize: 11, fontWeight: 900,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {aw.rank}
            </div>
            {/* Overlay */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 100%)',
              padding: '28px 10px 10px',
            }}>
              <div style={{ color: 'white', fontSize: 11, fontWeight: 800 }}>{aw.title}</div>
              <div style={{ color: 'var(--lime)', fontSize: 10, fontWeight: 700, marginTop: 2 }}>▲ {aw.votes.toLocaleString('fr')}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 20 }} />

      {/* Sticky CTA voter */}
      <div style={{
        position: 'sticky', bottom: 0,
        padding: '12px 16px 16px',
        background: 'linear-gradient(to top, var(--navy) 60%, transparent)',
      }}>
        <button className="btn-primary" onClick={() => nav('oeuvre')}>
          ▲ Voter pour une œuvre
        </button>
      </div>

      <BottomNav active="voter" nav={nav} />
    </div>
  )
}
