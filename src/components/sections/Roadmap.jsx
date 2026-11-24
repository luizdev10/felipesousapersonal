import { perfilExemplo } from '../../data/aluno'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'

export default function Roadmap() {
  return (
    <section className="mx-auto max-w-9xl px-2 py-24 md:py-32">
      <SectionTitle linhas={['Um plano 360°', { it: 'só seu.' }]} />
      <p className="mx-auto mt-4 max-w-md text-center text-sm text-tinta/60">
        O personal aprende sobre você, monta um plano personalizado em torno dos seus objetivos e o otimiza com o tempo.
      </p>
    </section>
  )
}
