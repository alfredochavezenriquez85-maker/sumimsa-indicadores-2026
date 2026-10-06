import React, { useEffect, useState } from 'react'
import LoginGate, { isAuthed } from './components/LoginGate.jsx'
import Header from './components/Header.jsx'
import Propuesta2026 from './components/Propuesta2026.jsx'
import GerenciasPage from './components/GerenciasPage.jsx'

// Ruta por hash para que GitHub Pages no necesite reescrituras:
//   #/subdirectores (default) · #/gerentes
function useTab() {
  const read = () => ((window.location.hash || '').includes('gerentes') ? 'gerentes' : 'subdirectores')
  const [tab, setTab] = useState(read)
  useEffect(() => {
    const onChange = () => setTab(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  const go = (t) => { window.location.hash = t === 'gerentes' ? '#/gerentes' : '#/subdirectores' }
  return [tab, go]
}

export default function App() {
  const [authed, setAuthed] = useState(isAuthed)
  const [tab, go] = useTab()
  if (!authed) return <LoginGate onSuccess={() => setAuthed(true)} />
  return (
    <div className="min-h-full flex flex-col">
      <Header active={tab} onChange={go} />
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {tab === 'gerentes' ? <GerenciasPage /> : <Propuesta2026 />}
      </main>
      <footer className="max-w-7xl w-full mx-auto px-6 py-6 text-xs text-muted">
        Propuesta de indicadores 2026 · subdirectores y gerentes · SUMIMSA. Las metas son propuesta
        para calibrar con cada responsable.
      </footer>
    </div>
  )
}
