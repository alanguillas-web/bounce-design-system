import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

const TREMPLINS = [
  { title: 'La nuit',      status: 'EN COURS', statusColor: 'var(--lime)',   art: 'art-1' },
  { title: 'Le silence',   status: 'BIENTÔT',  statusColor: 'var(--orange)', art: 'art-3' },
  { title: 'Rituel',       status: 'TERMINÉ',  statusColor: 'rgba(255,255,255,.4)', art: 'art-4' },
]

const GAGNANTS = [
  { art: 'art-2', name: 'Amina K.' },
  { art: 'art-1', name: 'Marc D.' },
  { art: 'art-3', name: 'Léa S.' },
]

export default function MarqueScreen({ nav, back }) {
  return (
    <div className="screen" style={{ background: 'var(--cream)' }}>
      <StatusBar />

      {/* Bannière */}
      <div style={{
        height: 160,
        background: `
          radial-gradient(ellipse at 20% 50%, var(--purple) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 50%, var(--lime) 0%, transparent 55%),
          radial-gradient(ellipse at 50% 100%, var(--orange) 0%, transparent 50%),
          #2a0080
        `,
        position: 'relative',
      }}>
        <button className="back-btn" onClick={back} style={{ position: 'absolute', top: 16, left: 16 }}>
          ←
        </button>
      </div>

      {/* Avatar marque */}
      <div style={{ padding: '0 20px', marginTop: -36 }}>
        <div style={{
          width: 72, height: 72,
          borderRadius: 18,
          background: 'var(--navy)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 32, fontWeight: 900, color: 'var(--lime)',
          border: '3px solid var(--cream)',
          boxShadow: '3px 3px 0 var(--navy)',
        }}>A</div>
      </div>

      {/* Infos marque */}
      <div style={{ padding: '12px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 30, fontWeight: 900, color: 'var(--navy)', letterSpacing: -1 }}>ARTE</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--lime)', display: 'inline-block' }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy)', opacity: .7 }}>
              Partenaire vérifié · 8 tremplins
            </span>
          </div>
        </div>
        <button style={{
          padding: '10px 18px',
          borderRadius: 100,
          border: '2.5px solid var(--navy)',
          background: 'transparent',
          color: 'var(--navy)',
          fontSize: 13,
          fontWeight: 800,
          cursor: 'pointer',
          transition: 'all 150ms var(--ease-bounce)',
          marginTop: 10,
        }}>
          + Suivre
        </button>
      </div>

      {/* Bio */}
      <p style={{ padding: '14px 20px', fontSize: 13, lineHeight: 1.6, color: 'var(--navy)', opacity: .8 }}>
        Chaîne culturelle européenne. On cherche des regards neufs, hors des sentiers — celles et ceux qui osent montrer ce qui d'habitude reste caché.
      </p>

      {/* Stats */}
      <div style={{ padding: '0 20px 20px', display: 'flex', gap: 10 }}>
        {[
          { val: '248',  label: 'Talents\npropulsés' },
          { val: '42k€', label: 'Distribués' },
          { val: '2025', label: 'Depuis' },
        ].map(s => (
          <div
            key={s.label}
            className="card-shadow"
            style={{
              flex: 1,
              background: 'var(--navy)',
              borderRadius: 18,
              padding: '14px 12px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--lime)', lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,.55)', marginTop: 4, lineHeight: 1.3, textTransform: 'uppercase', letterSpacing: 1, whiteSpace: 'pre-line' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ margin: '0 20px', borderTop: '2px solid rgba(12,18,68,.12)', marginBottom: 20 }} />

      {/* Tremplins sponsorisés */}
      <div style={{ padding: '0 20px 16px' }}>
        <div className="section-label" style={{ color: 'var(--navy)', marginBottom: 14 }}>
          Tremplins sponsorisés
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {TREMPLINS.map(t => (
            <div
              key={t.title}
              onClick={() => nav('tremplin')}
              className="card-shadow"
              style={{
                borderRadius: 18,
                background: 'var(--navy)',
                padding: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                cursor: 'pointer',
              }}
            >
              {/* Thumbnail */}
              <div className={t.art} style={{ width: 52, height: 52, borderRadius: 12, flexShrink: 0 }} />
              {/* Info */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: 'white' }}>{t.title}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: t.statusColor, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>
                  {t.status}
                </div>
              </div>
              {/* Arrow */}
              <div style={{ color: 'rgba(255,255,255,.4)', fontSize: 18 }}>›</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ils ont gagné */}
      <div style={{ padding: '0 20px 20px' }}>
        <div className="section-label" style={{ color: 'var(--navy)', marginBottom: 14 }}>
          Ils ont gagné
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          {GAGNANTS.map(g => (
            <div
              key={g.name}
              onClick={() => nav('oeuvre')}
              style={{ flex: 1, cursor: 'pointer' }}
            >
              <div
                className={`${g.art} card-shadow`}
                style={{ borderRadius: 16, aspectRatio: '1', marginBottom: 8 }}
              />
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--navy)', textAlign: 'center' }}>{g.name}</div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="decouverte" nav={nav} />
    </div>
  )
}
