import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'

export default function Faq({ itens, id = 'faq', className = 'mx-auto max-w-3xl px-6 pb-24 md:pb-32' }) {
  const [aberto, setAberto] = useState(0)
  if (!itens?.length) return null

  return (
    <section id={id} className={className}>
      <SectionTitle linhas={['Perguntas', { it: 'frequentes.' }]} className="mb-10 mt-10" />
      <div className="border-t border-tinta/10">
        {itens.map((f, i) => {
          const ativo = aberto === i
          return (
            <Reveal key={f.pergunta} delay={i * 60} className="border-b border-tinta/10">
              <h3>
                <button
                  type="button"
                  id={`${id}-b-${i}`}
                  aria-expanded={ativo}
                  aria-controls={`${id}-p-${i}`}
                  onClick={() => setAberto(ativo ? null : i)}
                  className="group flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-base font-medium"
                >
                  <span className={`faq-pergunta ${ativo ? 'is-ativo' : ''}`}>{f.pergunta}</span>
                  <span
                    aria-hidden="true"
                    className={`faq-icone relative size-9 shrink-0 rounded-full ${ativo ? 'is-ativo' : ''}`}
                  />
                </button>
              </h3>
              <div
                id={`${id}-p-${i}`}
                role="region"
                aria-labelledby={`${id}-b-${i}`}
                className={`faq-painel ${ativo ? 'is-aberto' : ''}`}
              >
                <div className="overflow-hidden">
                  <p className="faq-resposta max-w-xl pb-6 text-base leading-relaxed text-tinta/70">{f.resposta}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
