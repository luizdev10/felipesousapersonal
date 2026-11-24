import { config, linkInstagram } from '../../config'
import { asset } from '../../lib/asset'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import IconeInstagram from '../ui/IconeInstagram'

export default function Sobre() {
  const foto = asset(config.fotoPersonal)
  const identidade = [config.titulo, config.cref].filter(Boolean).join(' · ')

  return (
    <section id="sobre" className="p-2 pt-24 md:p-3 md:pt-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-tinta px-6 py-20 text-papel md:px-12">
        <SectionTitle claro linhas={['Conheça quem vai', { it: 'montar o seu treino.' }]} />

        <div className={`mx-auto mt-14 grid items-center gap-10 ${foto ? 'max-w-5xl md:grid-cols-2' : 'max-w-2xl'}`}>
          <Reveal>
            <div className="min-w-0">
              <p className="break-words font-display text-4xl leading-none">{config.nome}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-papel/60">{identidade}</p>
            </div>
            {config.sobre.map((p) => (
              <p key={p} className="mt-6 text-base leading-relaxed text-papel/75">{p}</p>
            ))}
            <ul className="mt-6 flex flex-wrap gap-2">
              {config.pontosSobre.map((e) => (
                <li key={e} className="rounded-full border border-papel/25 px-4 py-2 text-sm text-papel/80">{e}</li>
              ))}
            </ul>
            {linkInstagram && (
              <a
                href={linkInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center text-sm text-papel/80 underline-offset-4 hover:text-acento hover:underline"
              >
                <IconeInstagram className="mr-2 size-4" />
                {config.instagram}
              </a>
            )}
          </Reveal>
          {foto && (
            <Reveal delay={120} className="mx-auto w-full max-w-sm">
              <img
                src={foto}
                alt={config.nome}
                width="1066"
                height="1600"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-3xl object-cover object-[50%_22%]"
              />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
