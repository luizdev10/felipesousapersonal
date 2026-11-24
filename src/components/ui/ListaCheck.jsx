import Reveal from './Reveal'

// Lista com marcador redondo amarelo (mesmo estilo dos passos numerados do site).
export default function ListaCheck({ itens, claro = false, className = '' }) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {itens.map((t, i) => (
        <Reveal as="li" key={t} delay={(i % 4) * 60} className="flex items-start gap-4">
          <span aria-hidden="true" className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-acento text-tinta">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 12.5 4.5 4.5L19 7.5" />
            </svg>
          </span>
          <span className={`text-base leading-relaxed ${claro ? 'text-papel/85' : 'text-tinta/80'}`}>{t}</span>
        </Reveal>
      ))}
    </ul>
  )
}
