import { config, planosAtivo, duracaoPlano } from '../../config'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import PrecoPlano from '../ui/PrecoPlano'

export default function PlanosHome() {
  if (!planosAtivo) return null
  const p = config.planos

  return (
    <section id="planos" className="mx-auto max-w-7xl px-2 pb-3 md:px-3">
      <div className="overflow-hidden rounded-3xl bg-tinta px-6 py-16 text-papel md:px-12 md:py-20">
        <SectionTitle claro linhas={[p.tituloSecaoHome]} />
        <Reveal as="p" className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-papel/70">{p.subtitulo}</Reveal>

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-3">
          {p.itens.map((plano, i) => (
            <Reveal as="li" key={plano.id} delay={i * 80} className="flex flex-col justify-between gap-10 rounded-2xl border border-papel/15 p-6">
              <div>
                <p className="font-display text-3xl leading-none">{plano.nome}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-papel/60">{duracaoPlano(plano)}</p>
              </div>
              <div>
                <PrecoPlano plano={plano} claro />
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 flex justify-center">
          <Button href="#/planos" className="w-full sm:w-auto">{p.botaoHome}</Button>
        </Reveal>
      </div>
    </section>
  )
}
