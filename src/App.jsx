import { useState } from 'react'
import './tokens.css'
import FeedScreen     from './screens/FeedScreen'
import TremplinScreen from './screens/TremplinScreen'
import MarqueScreen   from './screens/MarqueScreen'
import OeuvreScreen   from './screens/OeuvreScreen'

export default function App() {
  const [screen, setScreen]   = useState('feed')
  const [history, setHistory] = useState([])

  const nav = (to) => {
    setHistory(h => [...h, screen])
    setScreen(to)
  }

  const back = () => {
    setHistory(h => {
      const prev = h[h.length - 1] ?? 'feed'
      setScreen(prev)
      return h.slice(0, -1)
    })
  }

  return (
    <div className="app-shell">
      {screen === 'feed'     && <FeedScreen     nav={nav} />}
      {screen === 'tremplin' && <TremplinScreen nav={nav} back={back} />}
      {screen === 'marque'   && <MarqueScreen   nav={nav} back={back} />}
      {screen === 'oeuvre'   && <OeuvreScreen   nav={nav} back={back} />}
    </div>
  )
}
