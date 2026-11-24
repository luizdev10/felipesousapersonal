import { useEffect, useState, lazy, Suspense } from 'react'
import { config, ebookAtivo, planosAtivo, planoPorId, textoDoPlano } from './config'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'
import Inicio from './components/sections/Inicio'
import Sobre from './components/sections/Sobre'
import ComoAtende from './components/sections/ComoAtende'
import PlanosHome from './components/sections/PlanosHome'
import EbookCard from './components/sections/EbookCard'
import Depoimentos from './components/sections/Depoimentos'
import Faq from './components/sections/Faq'

const PoliticaPrivacidade = lazy(() => import('./components/pages/PoliticaPrivacidade'))
const Ebook = lazy(() => import('./components/pages/Ebook'))
const Planos = lazy(() => import('./components/pages/Planos'))
const PlanoDetalhe = lazy(() => import('./components/pages/PlanoDetalhe'))

function definirMeta(titulo, descricao) {
  document.title = titulo
  document.querySelector('meta[name="description"]')?.setAttribute('content', descricao)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', titulo)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', descricao)
}

const semAncora = () => window.location.pathname + window.location.search
const ehAncora = (h) => h.length > 1 && !h.startsWith('#/')

export default function App() {
  // Âncora antiga na URL (#sobre, #faq) não conta como rota: o site sempre abre no início.
  const [rota, setRota] = useState(() => (ehAncora(window.location.hash) ? '' : window.location.hash))

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    if (ehAncora(window.location.hash)) history.replaceState(null, '', semAncora())
    window.scrollTo({ top: 0, behavior: 'instant' })

    const aoMudar = () => {
      const h = window.location.hash
      setRota(h)
      if (h.startsWith('#/')) {
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else if (ehAncora(h)) {
        // Rola até a seção (mesmo vindo de outra rota) e tira a âncora da URL.
        setTimeout(() => {
          document.getElementById(h.slice(1))?.scrollIntoView()
          history.replaceState(null, '', semAncora() + '#/')
        }, 60)
      }
    }
    window.addEventListener('hashchange', aoMudar)
    return () => window.removeEventListener('hashchange', aoMudar)
  }, [])

  const privacidade = rota === '#/privacidade'
  const ebook = rota === '#/ebook' && ebookAtivo
  // Rotas de planos: #/planos e #/planos/:id (id inexistente volta para #/planos).
  const rotaPlanos = planosAtivo ? rota.match(/^#\/planos(?:\/([^/]+))?$/) : null
  const planos = Boolean(rotaPlanos)
  const idPlano = rotaPlanos?.[1] ? decodeURIComponent(rotaPlanos[1]) : null
  const plano = idPlano ? planoPorId(idPlano) : null

  useEffect(() => {
    if (planos && idPlano && !plano) window.location.replace('#/planos')
  }, [planos, idPlano, plano])

  useEffect(() => {
    if (ebook) definirMeta(config.ebook.tituloAba, config.ebook.descricaoSEO)
    else if (plano) definirMeta(textoDoPlano(config.planos.tituloAbaPlano, plano), textoDoPlano(config.planos.descricaoSEOPlano, plano))
    else if (planos) definirMeta(config.planos.tituloAba, config.planos.descricaoSEO)
    else definirMeta(config.tituloAba, config.descricaoSEO)
  }, [ebook, planos, plano])

  return (
    <>
      <Header />
      <div key={ebook ? 'ebook' : planos ? `planos-${plano?.id ?? 'lista'}` : privacidade ? 'privacidade' : 'home'} className="pagina-in">
        {ebook ? (
          <Suspense fallback={null}><Ebook /></Suspense>
        ) : plano ? (
          <Suspense fallback={null}><PlanoDetalhe plano={plano} /></Suspense>
        ) : planos ? (
          <Suspense fallback={null}><Planos /></Suspense>
        ) : privacidade ? (
          <Suspense fallback={null}><PoliticaPrivacidade /></Suspense>
        ) : (
          <main>
            <Inicio />
            <Sobre />
            <ComoAtende />
            <PlanosHome />
            <EbookCard />
            <Depoimentos />
            <Faq itens={config.faq} id="faq" />
          </main>
        )}
      </div>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
