import { config, linkWhatsapp } from '../../config'
import Button from '../ui/Button'
import IconeWhatsApp from '../ui/IconeWhatsApp'

const instagram = config.instagram
  ? config.instagram.startsWith('http')
    ? config.instagram
    : `https://instagram.com/${config.instagram.replace(/^@/, '')}`
  : ''

const iconeInstagram = (
  <svg viewBox="0 0 24 24" className="mr-2 size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const colunas = [
  { t: 'Navegue', itens: [['Sobre', '#sobre'], ['Dúvidas', '#faq']] },
  { t: 'Legal', itens: [['Privacidade', '#/privacidade']] },
  { t: 'Conecte', itens: [['Instagram', instagram, iconeInstagram], ['WhatsApp', linkWhatsapp, <IconeWhatsApp className="mr-2 size-4" />]] },
]

const tamanhoNome = Math.min(26, 140 / config.nome.length)

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-acento bg-tinta text-papel">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 pb-10 pt-14 md:flex-row">
        <div>
          <p className="mb-4 text-sm">Pronto para o seu primeiro treino?</p>
          <Button href={linkWhatsapp} target="_blank" rel="noopener noreferrer">Falar com o personal</Button>
        </div>
        <div className="grid grid-cols-3 gap-6 text-sm md:gap-10">
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
