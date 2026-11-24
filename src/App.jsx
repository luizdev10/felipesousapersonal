import { useEffect, useState, lazy, Suspense } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'
import Inicio from './components/sections/Inicio'
import Marquee from './components/ui/Marquee'
import Promessa from './components/sections/Promessa'
import Recursos from './components/sections/Recursos'
import Sobre from './components/sections/Sobre'
import Roadmap from './components/sections/Roadmap'
import Depoimentos from './components/sections/Depoimentos'
import Faq from './components/sections/Faq'

const PoliticaPrivacidade = lazy(() => import('./components/pages/PoliticaPrivacidade'))

export default function App() {
  const [rota, setRota] = useState(window.location.hash)
  useEffect(() => {
    const f = () => { setRota(window.location.hash); if (window.location.hash.startsWith('#/')) window.scrollTo(0, 0) }
    window.addEventListener('hashchange', f)
    return () => window.removeEventListener('hashchange', f)
  }, [])

  const privacidade = rota === '#/privacidade'
  return (
    <>
      <Header />
      {privacidade ? (
        <Suspense fallback={null}><PoliticaPrivacidade /></Suspense>
      ) : (
        <main>
          <Inicio />
          <Promessa />
          <Recursos />
          <Sobre />
          <Roadmap />
          <Marquee itens={['Personal de verdade', 'Treine em qualquer lugar', 'Sem fidelidade', 'Plano que se ajusta a você']} />
          <Depoimentos />
          <Faq />
        </main>
      )}
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
