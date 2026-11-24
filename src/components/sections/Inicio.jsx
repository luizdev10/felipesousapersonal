import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { config, linkWhatsapp, ebookAtivo, planosAtivo } from '../../config'
import { asset } from '../../lib/asset'
import Button from '../ui/Button'

export default function Inicio() {
  const ref = useRef(null)
  const reduzir = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduzir ? ['0%', '0%'] : ['0%', '18%'])
  const foto = asset(config.fotoHero)

  return (
    <section ref={ref} className="p-2 md:p-3">
      <div className="grao relative isolate flex min-h-[92svh] items-end justify-center overflow-hidden rounded-3xl bg-[#3a2f28] pb-20 text-papel md:items-center md:justify-start md:bg-tinta md:pb-0">
        <motion.div style={{ y }} aria-hidden="true" className="absolute -inset-x-10 -top-10 bottom-[-10%] -z-10 md:inset-x-auto md:left-[40%] md:right-0">
          {foto ? (
            <img
              src={foto}
              alt=""
              width="1066"
              height="1600"
              fetchpriority="high"
              decoding="async"
              className="h-full w-full object-cover object-[55%_25%]"
            />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(60%_50%_at_30%_70%,#c8a483_0%,transparent_70%),radial-gradient(50%_60%_at_75%_30%,#8f6b52_0%,transparent_70%),linear-gradient(160deg,#2a211c,#5b4535)]" />
          )}
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-tinta/85 via-tinta/10 to-tinta/30 md:bg-[linear-gradient(90deg,#0b0b0b_0%,#0b0b0b_38%,transparent_62%)]" />

        <div className="w-full px-6 text-center md:w-[55%] md:pl-12 md:pr-6 md:text-left lg:pl-60">
          <h1 className="font-display text-[3.4rem] leading-[0.95] min-[400px]:text-6xl sm:text-7xl md:text-[clamp(3.5rem,9.5vw,12rem)]">
            <span className="mask"><span className="hero-in">{config.nome}</span></span>
          </h1>
          <p className="mt-5 text-lg italic font-display sm:text-2xl md:text-[clamp(1.5rem,2.4vw,3rem)]">{config.titulo}</p>
          <p className="mt-1 text-sm text-papel/75 md:text-base">{config.cidade}</p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
            <Button href={linkWhatsapp} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</Button>
            {planosAtivo && <Button href="#/planos" variante="claro">Ver planos</Button>}
            {ebookAtivo && <Button href="#/ebook" variante="claro">Ver o e-book</Button>}
          </div>
        </div>

        <span className="absolute bottom-5 left-6 right-6 truncate text-xs font-medium tracking-[0.35em]">{config.nome}</span>
      </div>
    </section>
  )
}
