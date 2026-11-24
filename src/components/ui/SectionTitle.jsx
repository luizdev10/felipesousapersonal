import { useReveal } from '../../hooks/useReveal'

export default function SectionTitle({ linhas, claro = false, className = '' }) {
  const ref = useReveal()
  return (
    <h2
      ref={ref}
      className={`font-display text-4xl md:text-6xl leading-[1.05] text-center ${claro ? 'text-papel' : 'text-tinta'} ${className}`}
    >
      {linhas.map((l, i) => (
        <span className="mask" key={i}>
          <span style={{ '--d': `${i * 90}ms` }} className={l.it ? 'italic' : ''}>
            {l.it ?? l}
          </span>
        </span>
      ))}
    </h2>
  )
}
