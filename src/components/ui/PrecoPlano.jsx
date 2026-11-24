import { config, formatarPreco, precoPorMes } from '../../config'

// Preço do plano + "equivale a R$ X/mês" (só a partir de 2 meses).
// Se planos.mostrarPreco for false, mostra apenas o texto "Consulte valores".
// reservarLinha: mantém o espaço da linha de equivalência mesmo quando ela não existe (plano de 1 mês),
// para os preços de cards lado a lado ficarem alinhados.
export default function PrecoPlano({ plano, claro = false, grande = false, reservarLinha = false }) {
  const { mostrarPreco, textoSemPreco } = config.planos
  if (!mostrarPreco) {
    return <p className={`font-display leading-none ${grande ? 'text-5xl md:text-6xl' : 'text-4xl'}`}>{textoSemPreco}</p>
  }
  const mensal = precoPorMes(plano)
  return (
    <>
      <p className={`font-display leading-none ${grande ? 'text-6xl md:text-7xl' : 'text-5xl'}`}>{formatarPreco(plano.preco)}</p>
      {mensal && <p className={`mt-3 text-sm ${claro ? 'text-papel/60' : 'text-tinta/60'}`}>equivale a {mensal}/mês</p>}
      {!mensal && reservarLinha && <p aria-hidden="true" className="mt-3 text-sm">&nbsp;</p>}
    </>
  )
}
