import { recursos } from '../../data/recursos'
import Reveal from '../ui/Reveal'

const dias = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']
const marcados = [0, 2, 4, 5]

function Visual({ id }) {
  if (id === 'gosto') {
    const gostos = [
      ['Musculação', true],
      ['Corrida', false],
      ['Funcional', true],
      ['Yoga', false],
      ['Caminhada', false],
      ['Treino em casa', true],
      ['Lutas', false],
      ['Ciclismo', false],
    ]
    return (
      <div className="mt-6">
        <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-papel/50">O que você curte?</p>
        <div className="flex flex-wrap gap-2">
          {gostos.map(([nome, ativo]) => (
            <span
              key={nome}
              className={`rounded-full px-4 py-2 text-xs ${
                ativo ? 'bg-acento font-medium text-tinta' : 'border border-papel/25 text-papel/70'
              }`}
            >
              {nome}
            </span>
          ))}
        </div>
      </div>
    )
  }
  if (id === 'equip') {
    return (
      <div className="relative mt-6 h-40">
        <div className="absolute left-6 top-2 h-28 w-36 rotate-[-4deg] rounded-2xl bg-gradient-to-br from-[#b79c85] to-[#6d5846] shadow-lg" />
        <div className="absolute right-6 top-0 h-32 w-36 rotate-3 rounded-2xl bg-gradient-to-br from-[#3a3a3a] to-[#111] shadow-lg" />
      </div>
    )
  }
  if (id === 'agenda') {
    return (
      <div className="mt-3 grid grid-cols-7 gap-2">
        {dias.map((d, i) => (
          <span
            key={i}
            className={`flex aspect-square items-center justify-center rounded-full text-xs font-medium ${
              marcados.includes(i) ? 'bg-tinta text-acento' : 'bg-tinta/10 text-tinta/50'
            }`}
          >
            {d}
          </span>
        ))}
      </div>
    )
  }
  if (id === 'plano') {
    return (
      <div className="mt-6 flex max-w-sm items-center gap-3 text-xs">
        <span className="rounded-2xl bg-papel/10 px-4 py-3 text-papel/70">Plano atual</span>
        <span aria-hidden="true" className="text-acento">→</span>
        <span className="rounded-2xl bg-acento px-4 py-3 font-medium text-tinta">Plano revisado</span>
      </div>
    )
  }
  if (id === 'conversa') {
    return (
      <div className="mt-6 max-w-[260px] space-y-2 text-[11px]">
        <p className="w-fit rounded-2xl rounded-bl-sm bg-papel/15 px-3 py-2">Posso trocar o treino de quinta?</p>
        <p className="ml-auto w-fit rounded-2xl rounded-br-sm bg-acento px-3 py-2 text-tinta">Pode sim, vamos ajustar.</p>
      </div>
    )
  }
  if (id === 'evolucao') {
    const alturas = ['35%', '48%', '42%', '66%', '60%', '82%']
    return (
      <div className="mt-6 flex h-28 items-end gap-2">
        {alturas.map((h, i) => (
          <span key={i} className={`flex-1 rounded-t-lg ${i === alturas.length - 1 ? 'bg-acento' : 'bg-tinta/15'}`} style={{ height: h }} />
        ))}
      </div>
    )
  }
  return null
}

export default function Recursos() {
  return (
    <section id="recursos" className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-2 md:grid-cols-12 md:px-3">
      {recursos.map((r, i) => {
        const escuro = r.tom === 'foto'
        return (
          <Reveal
            as="article"
            key={r.id}
            delay={(i % 2) * 80}
            className={`${r.cols} grao relative isolate flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-3xl p-6 ${
              escuro ? 'bg-gradient-to-br from-[#6b5444] to-[#2b221c] text-papel' : 'bg-cinza text-tinta'
            }`}
          >
            <div>
              <h3 className="text-base font-medium">{r.titulo}</h3>
              <p className={`mt-1 max-w-xs text-sm ${escuro ? 'text-papel/70' : 'text-tinta/60'}`}>{r.texto}</p>
            </div>
            <Visual id={r.id} />
          </Reveal>
        )
      })}
    </section>
  )
}
