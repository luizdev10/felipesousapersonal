import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { linkWhatsapp } from '../../config'

export default function Promessa() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 md:py-32">
      <SectionTitle linhas={['Assim transformamos', 'seu objetivo em', { it: 'rotina de verdade.' }]} />
      <Reveal delay={200}>
        <Button href={linkWhatsapp} pequeno target="_blank" rel="noopener noreferrer">Quero começar</Button>
      </Reveal>
    </section>
  )
}
