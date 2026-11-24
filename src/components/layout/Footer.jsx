import { config, linkWhatsapp, linkInstagram, ebookAtivo, planosAtivo } from '../../config'
import Button from '../ui/Button'
import IconeWhatsApp from '../ui/IconeWhatsApp'
import IconeInstagram from '../ui/IconeInstagram'

const iconeInstagram = <IconeInstagram className="mr-2 size-4" />

const colunas = [
  {
    t: 'Navegue',
    itens: [
      ['Sobre', '#sobre'],
      ['Atendimento', '#atendimento'],
      planosAtivo && ['Planos', '#/planos'],
      ebookAtivo && ['E-book', '#/ebook'],
      ['Dúvidas', '#faq'],
    ].filter(Boolean),
  },
  { t: 'Legal', itens: [['Privacidade', '#/privacidade']] },
  {
    t: 'Conecte',
    itens: [
      ['Instagram', linkInstagram, iconeInstagram],
      ['WhatsApp', linkWhatsapp, <IconeWhatsApp className="mr-2 size-4" />],
    ],
  },
]

const tamanhoNome = Math.min(26, 140 / config.nome.length)

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-acento bg-tinta text-papel">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 pb-10 pt-14 md:flex-row">
        <div>
          <p className="mb-1 text-sm">Quer conversar sobre o seu treino?</p>
          <p className="mb-4 text-sm text-papel/60">{config.whatsappExibicao} · {config.cidade}</p>
          <Button href={linkWhatsapp} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</Button>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 text-sm sm:grid-cols-3 md:gap-10">
          {colunas.map((c) => (
            <div key={c.t}>
              <p className="mb-2 text-xs uppercase tracking-widest text-papel/50">{c.t}</p>
              <ul>
                {c.itens.filter(([, h]) => h).map(([n, h, icone]) => (
                  <li key={n}>
                    <a
                      href={h}
                      className="inline-flex min-h-11 items-center hover:text-acento"
                      {...(h.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {icone}
                      {n}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p
        aria-hidden="true"
        style={{ fontSize: `${tamanhoNome}vw` }}
        className="select-none whitespace-nowrap text-center font-display leading-[0.8] tracking-[0.04em] text-papel"
      >
        {config.nome}
      </p>
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 px-6 pb-6 pt-4 text-[11px] uppercase tracking-widest text-papel/50">
        <span>© {new Date().getFullYear()} {config.nome}</span>
        <span>{[config.cref, config.cidade].filter(Boolean).join(' · ')}</span>
      </div>
    </footer>
  )
}
