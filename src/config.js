export const config = {
  nome: '[SEU NOME AQUI]',
  tituloAba: '[SEU NOME AQUI] | Personal trainer online',
  descricaoSEO: 'Personal trainer com atendimento online e individual. Converse pelo WhatsApp e receba um plano de treino pensado para o seu objetivo, sua rotina e o equipamento que você tem.',
  urlSite: '',
  imagemCompartilhamento: 'og-image.jpg',

  cref: 'CREF 000000-G/UF',
  cidade: '[SUA CIDADE-UF]',
  regiaoAtendida: '',

  whatsapp: '5500000000000',
  mensagemWhatsapp: 'Oi! Quero conhecer o seu trabalho de personal online.',
  instagram: '@seuperfil', // TROCAR pelo @ do cliente
  email: '',
  telefone: '',
  cnpj: '',

  mostrarPreco: true,
  precoPrimeiroMes: 'R$ 00',
  precoMensal: 'R$ 000',

  fotoHero: null,
  fotoPersonal: null,

  sobre: 'Sou personal trainer e atendo online. Na primeira conversa com cada aluno eu entendo objetivo, rotina e limitações antes de montar qualquer treino.',
  especialidades: ['Emagrecimento', 'Hipertrofia', 'Condicionamento', 'Treino em casa'],

  faq: [
    {
      pergunta: 'Preciso ter experiência para começar?',
      resposta: 'Não. Na primeira conversa o personal entende seu nível, sua rotina e suas limitações, e monta um plano que você consegue cumprir.',
    },
    {
      pergunta: 'Posso treinar sem academia?',
      resposta: 'Pode. Você diz o que tem em casa (ou que só tem o peso do corpo) e o treino é feito em cima disso.',
    },
    {
      pergunta: 'Como funciona o contato com o personal?',
      resposta: 'Pelo WhatsApp. Você tira dúvidas e conversa sobre o seu plano sempre que precisar.',
    },
    {
      pergunta: 'Posso cancelar quando quiser?',
      resposta: 'Sim. Sem fidelidade e sem multa. Para cancelar, é só avisar pelo WhatsApp.',
    },
    {
      pergunta: 'O primeiro mês realmente custa menos?',
      resposta: 'Sim, o primeiro mês tem um valor de entrada. Depois segue o valor mensal do plano, informado antes de você contratar.',
      apenasComPreco: true,
    },
    {
      pergunta: 'Quanto custa?',
      resposta: 'O valor é informado antes de você contratar, na conversa pelo WhatsApp.',
      apenasSemPreco: true,
    },
  ],

  depoimentos: [],
  // DEPOIMENTOS: descomentar quando houver depoimentos reais do cliente
  // depoimentos: [
  //   { nome: 'Nome do aluno', objetivo: 'Objetivo do aluno', frase: 'Texto do depoimento, nas palavras do próprio aluno.' },
  //   { nome: 'Nome do aluno', objetivo: 'Objetivo do aluno', frase: 'Texto do depoimento, nas palavras do próprio aluno.' },
  //   { nome: 'Nome do aluno', objetivo: 'Objetivo do aluno', frase: 'Texto do depoimento, nas palavras do próprio aluno.' },
  // ],
}

export const linkWhatsapp = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp)}`
