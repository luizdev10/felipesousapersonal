import { config } from '../../config'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'

export default function Depoimentos() {
  const lista = config.depoimentos ?? []
  if (lista.length === 0) return null

  return (
    <section id="depoimentos" className="p-2 md:p-3">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-tinta px-6 py-20 text-papel md:px-12">
        <SectionTitle claro linhas={['O que dizem', { it: 'os alunos.' }]} />
        <ul className="mt-12 grid gap-3 md:grid-cols-3">
          {lista.map((d, i) => (
            <Reveal as="li" key={`${d.nome}-${i}`} delay={i * 80} className="flex flex-col justify-between rounded-2xl border border-papel/15 p-6">
              <blockquote className="text-base leading-relaxed text-papel/85">“{d.frase}”</blockquote>
              <footer className="mt-6">
                <p className="font-display text-2xl leading-none">{d.nome}</p>
                <p className="mt-1 text-sm text-papel/60">{d.objetivo}</p>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
