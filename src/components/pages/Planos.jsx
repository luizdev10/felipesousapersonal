import { config, duracaoPlano, linkWhatsappPlano } from '../../config'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'
import ListaCheck from '../ui/ListaCheck'
import PrecoPlano from '../ui/PrecoPlano'
import Faq from '../sections/Faq'
import DuvidaWhatsApp from '../sections/DuvidaWhatsApp'

export default function Planos() {
  const p = config.planos

  return (
    <main className="mx-auto max-w-7xl px-2 pb-16 pt-24 md:px-3 md:pt-28">
      <a href="#/" className="mb-3 ml-4 inline-flex min-h-11 items-center text-xs underline underline-offset-4">← Voltar ao início</a>

      <Reveal className="px-4 pb-12 pt-6 md:px-16 md:pb-20 md:pt-12">
        <p className="text-xs uppercase tracking-[0.2em] text-tinta/50">Planos · {config.nome}</p>
        <h1 className="mt-4 max-w-4xl font-display text-[2.2rem] leading-[1.05] min-[400px]:text-4xl md:text-7xl">{p.titulo}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-tinta/70 md:text-lg">{p.subtitulo}</p>
      </Reveal>

      {/* Tudo que está em todos os planos */}
      <section className="overflow-hidden rounded-3xl bg-tinta px-6 py-16 text-papel md:px-12 md:py-20">
        <SectionTitle claro linhas={[p.tituloIncluso]} />
        <div className="mx-auto mt-12 max-w-2xl">
          <ListaCheck itens={p.incluso} claro />
        </div>
      </section>

      {/* Os planos */}
      <Reveal as="p" className="mx-auto mt-16 max-w-xl px-6 text-center text-base leading-relaxed text-tinta/70">{p.avisoDiferenca}</Reveal>
      <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
        {p.itens.map((plano, i) => (
          <Reveal as="li" key={plano.id} delay={i * 80} className="grao relative isolate flex flex-col justify-between gap-10 overflow-hidden rounded-3xl bg-cinza p-6 md:p-8">
            <div>
              <h2 className="font-display text-4xl leading-none">{plano.nome}</h2>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-tinta/50">Duração: {duracaoPlano(plano)}</p>
            </div>
            <div>
              <PrecoPlano plano={plano} grande />
              <div className="mt-8 flex flex-col gap-3">
                <Button href={`#/planos/${plano.id}`} variante="claro" className="w-full">Ver detalhes</Button>
                <Button href={linkWhatsappPlano(plano)} target="_blank" rel="noopener noreferrer" className="w-full">Quero este plano</Button>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      <Faq itens={p.faq} id="faq-planos" className="mx-auto max-w-3xl px-4 pb-16 md:pb-24" />

      <DuvidaWhatsApp />
    </main>
  )
}
