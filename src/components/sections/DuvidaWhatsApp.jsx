import { linkWhatsapp } from '../../config'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

export default function DuvidaWhatsApp() {
  return (
    <Reveal className="grao relative isolate overflow-hidden rounded-3xl bg-tinta p-6 text-papel md:p-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
          Ficou com dúvida? <span className="italic">Fale com o Felipe.</span>
        </h2>
        <p className="mt-4 text-base text-papel/70">Pode chamar pelo WhatsApp.</p>
        <Button href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 w-full sm:w-auto">
          Falar no WhatsApp
        </Button>
      </div>
    </Reveal>
  )
}
