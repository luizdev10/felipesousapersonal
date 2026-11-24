import { config, ebookAtivo } from '../../config'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

export default function EbookCard() {
  if (!ebookAtivo) return null
  const e = config.ebook

  return (
    <section id="ebook" className="mx-auto max-w-7xl px-2 pb-24 md:px-3 md:pb-32">
      <Reveal className="grao relative isolate overflow-hidden rounded-3xl bg-cinza p-6 md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-tinta/50">E-book</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl leading-[1.1] md:text-5xl">{e.titulo}</h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-tinta/70">{e.resumo}</p>
        {e.mostrarPreco && e.preco && <p className="mt-6 font-display text-4xl">{e.preco}</p>}
        <Button href="#/ebook" variante="escuro" className="mt-6 w-full sm:w-auto">Ver detalhes do e-book</Button>
      </Reveal>
    </section>
  )
}
