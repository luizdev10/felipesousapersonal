import { config, duracaoPlano, linkWhatsappPlano } from '../../config'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'
import ListaCheck from '../ui/ListaCheck'
import PrecoPlano from '../ui/PrecoPlano'

export default function PlanoDetalhe({ plano }) {
  const p = config.planos

  return (
    <main className="mx-auto max-w-7xl px-2 pb-16 pt-24 md:px-3 md:pt-28">
      <a href="#/planos" className="mb-3 ml-4 inline-flex min-h-11 items-center text-xs underline underline-offset-4">← Ver outros planos</a>

      {/* Nome, preço, equivalência e duração */}
      <Reveal className="px-4 pb-12 pt-6 md:px-16 md:pb-20 md:pt-12">
        <p className="text-xs uppercase tracking-[0.2em] text-tinta/50">{p.titulo} · Duração: {duracaoPlano(plano)}</p>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">{plano.nome}</h1>
        <div className="mt-8">
          <PrecoPlano plano={plano} grande />
        </div>
      </Reveal>

      {/* O que está incluso */}
      <section className="overflow-hidden rounded-3xl bg-tinta px-6 py-16 text-papel md:px-12 md:py-20">
        <SectionTitle claro linhas={['O que está', { it: 'incluso.' }]} />
        <div className="mx-auto mt-12 max-w-2xl">
          <ListaCheck itens={p.incluso} claro />
        </div>
      </section>

      {/* Como funciona + Para quem é */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-12">
        <Reveal as="section" className="grao relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#6b5444] to-[#2b221c] p-6 text-papel md:col-span-7 md:p-10">
          <h2 className="font-display text-4xl leading-none md:text-5xl">Como funciona</h2>
          <ol className="mt-8 space-y-5">
            {p.comoFunciona.map((t, i) => (
              <li key={t} className="flex items-start gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-acento text-sm font-medium text-tinta">{i + 1}</span>
                <span className="pt-1 text-base leading-relaxed text-papel/85">{t}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="section" delay={80} className="grao relative isolate flex flex-col justify-between gap-10 overflow-hidden rounded-3xl bg-cinza p-6 md:col-span-5 md:p-10">
          <h2 className="font-display text-4xl leading-none md:text-5xl">Para quem é</h2>
          <p className="max-w-sm text-base leading-relaxed text-tinta/70">{p.paraQuem}</p>
        </Reveal>
      </div>

      {/* Quero este plano */}
      <Reveal className="grao relative isolate mt-3 overflow-hidden rounded-3xl bg-acento p-6 text-tinta md:p-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-display text-4xl leading-[1.05] md:text-6xl">{plano.nome}</p>
          <Button
            href={linkWhatsappPlano(plano)}
            target="_blank"
            rel="noopener noreferrer"
            variante="escuro"
            className="mt-8 w-full sm:w-auto"
          >
            Quero este plano
          </Button>
          <a href="#/planos" className="mt-4 inline-flex min-h-11 items-center text-sm underline underline-offset-4">Ver outros planos</a>
        </div>
      </Reveal>

      {p.notaNutricao && (
        <p className="mx-auto mt-10 max-w-xl px-6 text-center text-xs leading-relaxed text-tinta/50">{p.notaNutricao}</p>
      )}
    </main>
  )
}
