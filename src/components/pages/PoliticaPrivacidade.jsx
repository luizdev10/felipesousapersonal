import { config } from '../../config'

export default function PoliticaPrivacidade() {
  const secoes = [
    ['Quais dados coletamos', 'Quando você fala com a gente pelo WhatsApp, recebemos seu nome, número de telefone e as informações que você escolher enviar (objetivo, rotina, restrições de saúde). Este site não usa formulários, cookies de rastreamento ou pixels de anúncio.'],
    ['Para que usamos', 'Usamos seus dados apenas para responder você, combinar o atendimento e prestar o serviço contratado.'],
    ['Com quem compartilhamos', 'Não vendemos seus dados. O compartilhamento acontece somente com prestadores necessários ao serviço (como o WhatsApp, operado pela Meta, e o Hotmart, que processa a compra do e-book e tem a própria política de privacidade) ou por obrigação legal.'],
    ['Por quanto tempo guardamos', 'Pelo tempo em que você for aluno e pelo prazo exigido em lei depois disso. Você pode pedir a exclusão a qualquer momento.'],
    ['Seus direitos (LGPD)', 'Você pode pedir acesso, correção, portabilidade, anonimização ou exclusão dos seus dados, e revogar consentimentos, conforme a Lei 13.709/2018.'],
    ['Contato do responsável', [config.nome, config.cref, config.cnpj && `CNPJ ${config.cnpj}`, config.email, config.telefone].filter(Boolean).join(' · ')],
  ]
  return (
    <main className="mx-auto max-w-2xl px-6 py-32">
      <a href="#/" className="text-xs underline">← Voltar ao início</a>
      <h1 className="mt-6 font-display text-5xl">Política de <i>privacidade</i></h1>
      <p className="mt-2 text-xs text-tinta/50">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
      {secoes.map(([t, d]) => (
        <section key={t} className="mt-8">
          <h2 className="mb-2 text-lg font-medium">{t}</h2>
          <p className="text-sm leading-relaxed text-tinta/70">{d}</p>
        </section>
      ))}
    </main>
  )
}
