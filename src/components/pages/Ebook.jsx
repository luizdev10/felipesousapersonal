import { config } from '../../config'
import { asset } from '../../lib/asset'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'
import Faq from '../sections/Faq'
import DuvidaWhatsApp from '../sections/DuvidaWhatsApp'

const numero = (i) => String(i + 1).padStart(2, '0')

export default function Ebook() {
  const e = config.ebook
  const temPreco = e.mostrarPreco && e.preco
  const capa = asset(e.capa?.src) // vazio = sem capa e sem espaço reservado

  return (
    <main className="mx-auto max-w-7xl px-2 pb-16 pt-24 md:px-3 md:pt-28">
      <a href="#/" className="mb-3 ml-4 inline-flex min-h-11 items-center text-xs underline underline-offset-4">← Voltar ao início</a>

      {/* a) Título e apresentação */}
      <Reveal className="px-4 pb-12 pt-6 md:px-16 md:pb-20 md:pt-12">
        <p className="text-xs uppercase tracking-[0.2em] text-tinta/50">E-book · {config.nome}</p>
        <h1 className="mt-4 max-w-4xl font-display text-[2.2rem] leading-[1.05] min-[400px]:text-4xl md:text-7xl lg:max-w-6xl lg:text-6xl lg:text-balance xl:text-7xl">{e.titulo}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-tinta/70 md:text-lg">{e.frase}</p>
      </Reveal>

      {/* b) O que você vai encontrar */}
      <section className="mt-3 overflow-hidden rounded-3xl bg-tinta px-6 py-16 text-papel md:px-12 md:py-20">
        <SectionTitle claro linhas={['O que você vai', { it: 'encontrar.' }]} />
        <Reveal as="p" className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-papel/70">{e.descricao}</Reveal>
        <ul className="mx-auto mt-12 grid max-w-5xl gap-3 md:grid-cols-2">
          {e.topicos.map((t, i) => (
            <Reveal as="li" key={t} delay={(i % 2) * 80} className="flex flex-col gap-3 rounded-2xl border border-papel/15 p-6">
              <span className="font-display text-4xl leading-none text-acento">{numero(i)}</span>
              <span className="text-base leading-relaxed text-papel/85">{t}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* c) Para quem é + d) Como funciona */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-12">
        <Reveal as="section" className="grao relative isolate overflow-hidden rounded-3xl bg-cinza p-6 md:col-span-5 md:p-10">
          <h2 className="font-display text-4xl leading-none md:text-5xl">Para quem é</h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-tinta/70">{e.paraQuem}</p>
        </Reveal>

        <Reveal as="section" delay={80} className="relative isolate overflow-hidden rounded-3xl bg-tinta p-6 text-papel md:col-span-7 md:p-10">
          <h2 className="font-display text-4xl leading-none md:text-5xl">Como funciona</h2>
          <ol className="mt-8 space-y-5">
            {e.comoFunciona.map((t, i) => (
              <li key={t} className="flex items-start gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-acento text-sm font-medium text-tinta">{i + 1}</span>
                <span className="pt-1 text-base leading-relaxed text-papel/85">{t}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      {/* e) Preço + compra, f) Garantia */}
      <Reveal className="grao relative isolate mt-3 overflow-hidden rounded-3xl bg-acento p-6 text-tinta md:p-16">
        <div
          className={`mx-auto flex flex-col items-center text-center ${
            capa ? 'max-w-4xl gap-8 md:flex-row md:gap-16 md:text-left' : 'max-w-3xl'
          }`}
        >
          {capa && (
            <img
              src={capa}
              alt={e.capa.alt}
              loading="lazy"
              decoding="async"
              className="h-auto w-full max-w-[220px] shrink-0 rounded-xl shadow-xl md:max-w-[260px]"
            />
          )}
          <div className={`flex flex-col ${capa ? 'items-center md:items-start' : 'items-center'}`}>
            <p className="text-xs uppercase tracking-[0.2em] text-tinta/60">Acesso digital</p>
            {temPreco && <p className="mt-3 font-display text-6xl leading-none md:text-8xl">{e.preco}</p>}
            <Button
              href={e.linkCompra}
              target="_blank"
              rel="noopener"
              variante="escuro"
              className={`w-full sm:w-auto ${temPreco ? 'mt-8' : 'mt-4'}`}
            >
              Comprar o e-book
            </Button>
            {e.garantia && <p className="mt-5 max-w-md text-sm text-tinta/75">Garantia: {e.garantia}.</p>}
          </div>
        </div>
      </Reveal>

      {/* g) Perguntas frequentes */}
      <Faq itens={e.faq} id="faq-ebook" className="mx-auto max-w-3xl px-4 pb-16 md:pb-24" />

      {/* h) Dúvida? */}
      <DuvidaWhatsApp />
    </main>
  )
}
