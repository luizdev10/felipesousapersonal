import { useState } from 'react'
import { config } from '../../config'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'

export default function Faq() {
  const [aberto, setAberto] = useState(0)
  const faq = config.faq.filter((f) => (f.apenasComPreco ? config.mostrarPreco : true) && (f.apenasSemPreco ? !config.mostrarPreco : true))

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 pb-24 md:pb-32">
      <SectionTitle linhas={['Perguntas', { it: 'frequentes.' }]} className="mb-10 mt-10" />
      <div className="border-t border-tinta/10">
        {faq.map((f, i) => {
          const ativo = aberto === i
          return (
            <Reveal key={f.pergunta} delay={i * 60} className="border-b border-tinta/10">
              <h3>
                <button
                  type="button"
                  id={`faq-b-${i}`}
                  aria-expanded={ativo}
                  aria-controls={`faq-p-${i}`}
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
                id={`faq-p-${i}`}
                role="region"
                aria-labelledby={`faq-b-${i}`}
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
