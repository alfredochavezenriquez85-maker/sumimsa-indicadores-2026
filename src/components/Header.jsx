import React from 'react'
import BrandMark from './BrandMark.jsx'

const TABS = [
  { id: 'subdirectores', label: 'Subdirectores 2026' },
  { id: 'gerentes', label: 'Gerentes 2026' },
]

export default function Header({ active, onChange }) {
  return (
    <header className="bg-white border-b border-rule">
      <div className="max-w-7xl mx-auto px-6 pt-5 flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <BrandMark size="sm" tone="ink" caption="Dirección General" />
            <div className="hidden md:block h-10 w-px bg-rule mx-1" />
            <div className="hidden md:block">
              <div className="text-[11px] uppercase tracking-[0.14em] text-muted">
                Propuesta · Ejercicio 2026
              </div>
              <h1 className="text-lg font-bold text-ink mt-0.5 leading-tight">Indicadores 2026</h1>
              <p className="text-xs text-muted mt-0.5">Subdirectores y gerentes · cinco ejes de Dirección</p>
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-1 -mb-px overflow-x-auto">
          {TABS.map((t) => {
            const isActive = t.id === active
            return (
              <button
                key={t.id}
                onClick={() => onChange(t.id)}
                className={`pb-3 text-sm border-b-2 transition whitespace-nowrap ${
                  isActive ? 'border-ink text-ink font-semibold' : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {t.label}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
