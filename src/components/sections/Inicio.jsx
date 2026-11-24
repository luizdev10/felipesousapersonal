import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { config, linkWhatsapp } from '../../config'
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
      <div className="grao relative isolate flex min-h-[92svh] items-center justify-center overflow-hidden rounded-3xl bg-[#3a2f28] text-papel">
        <motion.div style={{ y }} aria-hidden="true" className="absolute -inset-x-10 -top-10 bottom-[-10%] -z-10">
          {foto ? (
            <img
              src={foto}
              alt=""
              width="1600"
              height="1000"
              fetchpriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(60%_50%_at_30%_70%,#c8a483_0%,transparent_70%),radial-gradient(50%_60%_at_75%_30%,#8f6b52_0%,transparent_70%),linear-gradient(160deg,#2a211c,#5b4535)]" />
          )}
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-tinta/70 via-tinta/10 to-tinta/40" />

        <div className="px-6 text-center">
          <h1 className="font-display text-[3.4rem] leading-[0.95] min-[400px]:text-6xl sm:text-7xl md:text-[8rem]">
            <span className="mask"><span className="hero-in">Personal training</span></span>
            <span className="mask"><span className="hero-in italic" style={{ animationDelay: '120ms' }}>em qualquer lugar.</span></span>
          </h1>
          {config.mostrarPreco && (
            <>
              <p className="mt-6 text-base">
                {config.precoPrimeiroMes} no primeiro mês, depois {config.precoMensal}/mês
              </p>
              <p className="mt-1 text-sm text-papel/75">Cancele quando quiser. Sem fidelidade.</p>
            </>
          )}
          <Button href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="mt-6">
            Falar com o personal
          </Button>
        </div>

        <span className="absolute bottom-5 left-6 right-6 truncate text-xs font-medium tracking-[0.35em]">{config.nome}</span>
      </div>
    </section>
  )
}
