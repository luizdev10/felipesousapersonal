import { config, linkWhatsapp, ebookAtivo, planosAtivo } from '../../config'
import Button from '../ui/Button'

const linkClasse = 'hidden min-h-11 items-center px-2 text-xs text-papel/80 hover:text-papel sm:flex'

export default function Header() {
  return (
    <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-fit -translate-x-1/2">
      <nav
        aria-label="Principal"
        className="flex items-center justify-between gap-2 rounded-full bg-tinta/55 py-1.5 pl-5 pr-1.5 text-papel backdrop-blur-md"
      >
        <a
          href="#/"
          aria-label={`${config.nome}: voltar ao início`}
          onClick={(e) => {
            // Em outras rotas (#/ebook, #/privacidade) o link navega normalmente para o início.
            const h = window.location.hash
            if (h.startsWith('#/') && h !== '#/') return
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex min-h-11 min-w-0 items-center text-xs font-medium tracking-[0.2em]"
        >
          <span className="truncate">{config.nome}</span>
        </a>
        <a href="#sobre" className={linkClasse}>Sobre</a>
        <a href="#atendimento" className={linkClasse}>Atendimento</a>
        {planosAtivo && <a href="#/planos" className="flex min-h-11 items-center px-2 text-xs text-papel/80 hover:text-papel">Planos</a>}
        {ebookAtivo && <a href="#/ebook" className={linkClasse}>E-book</a>}
        <Button href={linkWhatsapp} pequeno className="shrink-0" target="_blank" rel="noopener noreferrer">WhatsApp</Button>
      </nav>
    </header>
  )
}
