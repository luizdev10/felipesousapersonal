import { config } from '../../config'
import { asset } from '../../lib/asset'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import Phone from '../ui/Phone'

export default function Sobre() {
  const inicial = config.nome.replace(/[^\p{L}]/gu, '')[0] ?? '?'
  const foto = asset(config.fotoPersonal)
  const local = config.cidade
    ? `Atendo online e alunos de ${config.cidade} e ${config.regiaoAtendida || 'região'}`
    : null

  return (
    <section id="sobre" className="p-2 pt-24 md:p-3 md:pt-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-tinta px-6 py-20 text-papel md:px-12">
        <SectionTitle claro linhas={['Conheça quem vai', { it: 'montar o seu plano.' }]} />

        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-4">
              {foto ? (
                <img
                  src={foto}
                  alt={config.nome}
                  width="96"
                  height="96"
                  loading="lazy"
                  decoding="async"
                  className="size-24 shrink-0 rounded-full object-cover"
                />
              ) : (
                <span className="flex size-[72px] shrink-0 items-center justify-center rounded-full bg-acento font-display text-4xl text-tinta">
                  {inicial}
                </span>
              )}
              <div className="min-w-0">
                <p className="break-words font-display text-4xl leading-none">{config.nome}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-papel/60">Personal trainer · {config.cref}</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-base leading-relaxed text-papel/75">{config.sobre}</p>
            {local && <p className="mt-3 text-sm text-papel/60">{local}</p>}
            <ul className="mt-6 flex flex-wrap gap-2">
              {config.especialidades.map((e) => (
                <li key={e} className="rounded-full border border-papel/25 px-4 py-2 text-sm text-papel/80">{e}</li>
              ))}
            </ul>
          </Reveal>

          <Phone className="!border-[#222]">
            <div className="flex h-full flex-col bg-[#111] text-papel">
              <div className="flex items-center gap-2 border-b border-papel/10 px-4 pb-3 pt-9 text-[11px]">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-acento font-display text-sm text-tinta">{inicial}</span>
                <span className="truncate">{config.nome}</span>
              </div>
              <div className="flex flex-1 flex-col justify-end gap-2 p-3 text-[11px]">
                <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-papel/10 px-3 py-2">Oi! Me conta: qual é o seu objetivo?</p>
                <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-acento px-3 py-2 text-tinta">Quero ganhar condicionamento.</p>
                <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-papel/10 px-3 py-2">Combinado. Quantos dias por semana você consegue treinar?</p>
                <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-acento px-3 py-2 text-tinta">Uns 3 ou 4.</p>
              </div>
            </div>
          </Phone>
        </div>
      </div>
    </section>
  )
}
