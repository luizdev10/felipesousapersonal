import { config, linkWhatsapp, linkWhatsappMensagem, ebookAtivo, planosAtivo } from '../../config'
import { asset } from '../../lib/asset'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

// Destino da ação de cada card. Planos e e-book somem se estiverem desligados no config.
function destino(acao) {
  if (!acao) return null
  if (acao.destino === 'planos') return planosAtivo ? { href: '#/planos' } : null
  if (acao.destino === 'ebook') return ebookAtivo ? { href: '#/ebook' } : null
  const href = acao.mensagem ? linkWhatsappMensagem(acao.mensagem) : linkWhatsapp
  return { href, externo: true }
}

export default function ComoAtende() {
  const { titulo, passos } = config.comoComeca

  return (
    <section id="atendimento" className="mx-auto max-w-7xl px-2 py-24 md:px-3 md:py-32">
      <SectionTitle linhas={['Como o Felipe', { it: 'atende.' }]} />
      <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-12">
        {config.atendimento.map((a, i) => {
          const foto = asset(a.fotoCard)
          const escuro = a.tom === 'escuro' || Boolean(foto)
          const link = destino(a.acao)
          return (
            <Reveal
              as="article"
              key={a.titulo}
              delay={(i % 2) * 80}
              className={`${a.cols} grao relative isolate flex flex-col overflow-hidden rounded-3xl p-6 ${
                escuro
                  ? `${foto ? '' : 'bg-gradient-to-br from-[#6b5444] to-[#2b221c]'} text-papel`
                  : 'bg-cinza text-tinta'
              }`}
            >
              {foto && (
                <>
                  <img src={foto} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
                  <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-tinta/90 via-tinta/65 to-tinta/45" />
                </>
              )}
              <h3 className="font-display text-4xl leading-none">{a.titulo}</h3>
              <p className={`mt-4 max-w-sm text-base leading-relaxed ${escuro ? 'text-papel/75' : 'text-tinta/65'}`}>{a.texto}</p>
              {link && (
                <div className="mt-auto pt-6">
                  <a
                    href={link.href}
                    {...(link.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`group inline-flex min-h-11 items-center gap-2 text-sm font-medium underline underline-offset-4 ${
                      escuro ? 'hover:text-acento' : 'hover:text-tinta/60'
                    }`}
                  >
                    {a.acao.texto}
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              )}
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-3 rounded-3xl border border-tinta/10 p-6 md:p-8">
        <h3 className="font-display text-3xl leading-none">{titulo}</h3>
        <ol className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
          {passos.map((t, i) => (
            <li key={t} className="flex items-start gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-acento text-sm font-medium text-tinta">{i + 1}</span>
              <span className="pt-1 text-base leading-relaxed text-tinta/80">{t}</span>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="mt-8 flex justify-center px-4">
        <Button href={linkWhatsapp} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</Button>
      </Reveal>
    </section>
  )
}
