export const config = {
  nome: 'Felipe Sousa',
  nomeCompleto: 'Felipe de Sousa Fernandes',
  titulo: 'Personal Trainer',
  foco: 'Emagrecimento e treino de musculação',

  tituloAba: 'Felipe Sousa | Personal Trainer em Juazeiro do Norte - CE',
  descricaoSEO: 'Felipe Sousa, personal trainer em Juazeiro do Norte - CE. Treino de musculação e emagrecimento, presencial e online. Fale pelo WhatsApp.',
  urlSite: '',
  imagemCompartilhamento: '', // arquivo dentro de /public (ex.: 'og-image.jpg'). Vazio = sem imagem.

  cidade: 'Juazeiro do Norte - CE',
  bairro: 'Tiradentes',

  whatsapp: '5588992441643',
  whatsappExibicao: '(88) 99244-1643',
  mensagemWhatsapp: 'Olá, Felipe! Vim pelo seu site e gostaria de saber mais.',

  cref: '', // vazio = nenhum campo/selo/texto de CREF é exibido
  instagram: '@felipesousa.fspt', // vazio = ícone/link do rodapé escondido
  email: '',
  telefone: '',
  cnpj: '',

  fotoHero: 'img/fotoini.webp',
  fotoPersonal: 'img/felipesouza.webp',

  sobre: [
    'Sou Felipe, personal trainer em Juazeiro do Norte - CE. Trabalho com treino de musculação e emagrecimento, sempre com método e planejamento.',
    'Antes de montar qualquer treino, a conversa é sobre o seu objetivo, a sua rotina e as suas limitações. O plano parte daí.',
  ],
  pontosSobre: ['Treino com método', 'Emagrecimento', 'Musculação'],

 
  // Cards de "Como o Felipe atende".
  // tom: 'escuro' | 'claro' | cols: largura no desktop (12 colunas)
  // fotoCard: opcional (ex.: 'img/presencial.webp'). Se preenchido, vira fundo do card com degradê escuro; vazio = visual atual.
  // acao.destino: 'whatsapp' | 'planos' | 'ebook'. Os destinos 'planos' e 'ebook' somem se planos.mostrar / ebook.mostrar for false.
  // acao.mensagem: mensagem pronta do WhatsApp (opcional; se vazia, usa mensagemWhatsapp).
  atendimento: [
    {
      titulo: 'Presencial',
      texto: 'Atendimento presencial em Juazeiro do Norte - CE, no bairro Tiradentes.',
      tom: 'escuro',
      cols: 'md:col-span-7',
      fotoCard: '',
      acao: { texto: 'Falar no WhatsApp', destino: 'whatsapp', mensagem: 'Olá, Felipe! Vim pelo seu site e gostaria de saber mais sobre o atendimento presencial.' },
    },
    {
      titulo: 'Online',
      texto: 'Treino no aplicativo, com atendimento para todo o Brasil e conversa direta pelo WhatsApp.',
      tom: 'claro',
      cols: 'md:col-span-5',
      fotoCard: '',
      acao: { texto: 'Ver planos', destino: 'planos' },
    },
    {
      titulo: 'Emagrecimento',
      texto: 'Treino pensado para quem quer emagrecer, respeitando o seu ponto de partida.',
      tom: 'claro',
      cols: 'md:col-span-5',
      fotoCard: '',
      acao: { texto: 'Falar com o Felipe', destino: 'whatsapp', mensagem: 'Olá, Felipe! Vim pelo seu site e gostaria de saber mais sobre o treino para emagrecimento.' },
    },
    {
      titulo: 'Musculação',
      texto: 'Treino de musculação montado com método e planejamento.',
      tom: 'escuro',
      cols: 'md:col-span-7',
      fotoCard: '',
      acao: { texto: 'Ver o e-book', destino: 'ebook' },
    },
  ],

  // Faixa "Como começa", abaixo dos cards.
  comoComeca: {
    titulo: 'Como começa',
    passos: [
      'Você chama o Felipe no WhatsApp',
      'Conta seu objetivo, sua rotina e suas limitações',
      'O treino parte daí',
    ],
  },

  faq: [
    {
      pergunta: 'Como falar com o Felipe?',
      resposta: 'Pelo WhatsApp. É só clicar em qualquer botão do site, que a conversa já abre com uma mensagem pronta.',
    },
    {
      pergunta: 'O atendimento é presencial ou online?',
      resposta: 'Os dois. O presencial acontece em Juazeiro do Norte - CE, no bairro Tiradentes, e o online é feito à distância, pelo WhatsApp.',
    },
    {
      pergunta: 'O e-book substitui o acompanhamento de um profissional?',
      resposta: 'Não. O e-book é um material de estudo. O acompanhamento individual é feito com o Felipe, presencial ou online.',
    },
  ],

  depoimentos: [],
  // DEPOIMENTOS: preencher somente com depoimentos reais, autorizados pelo aluno.
  // depoimentos: [
  //   { nome: 'Nome do aluno', objetivo: 'Objetivo do aluno', frase: 'Texto do depoimento, nas palavras do próprio aluno.' },
  // ],

  ebook: {
    mostrar: true,
    titulo: 'Métodos do Treino de Musculação: 20 Estratégias para Evoluir de Verdade',
    // CONFIRMAR com o Felipe se pode manter a frase original: "usados por atletas e preparadores físicos".
    frase: 'E-book digital com 20 métodos de treino usados na musculação.',
    resumo: '20 métodos de treino explicados de forma prática: como funcionam, quando usar e como combinar.',
    descricao:
      'Para cada método, você vê como ele funciona, quando usar, quais músculos ele potencializa e como combiná-lo com os outros. O acesso é feito por e-mail, em computador, celular ou tablet.',
    topicos: [
      'Métodos clássicos e avançados para superar platôs',
      'Estratégias para aumentar intensidade e volume de forma planejada',
      'Periodização e recuperação muscular',
      'Dicas práticas para treinar bem com pouco tempo',
    ],
    paraQuem: 'Praticantes de musculação e profissionais de educação física, de iniciantes a experientes.',
    comoFunciona: [
      'A compra é feita pelo Hotmart.',
      'O acesso chega por e-mail e fica na sua conta Hotmart, em Minha conta > Minhas compras.',
      'A leitura pode ser feita em computador, celular ou tablet.',
    ],
    preco: 'R$ 47,90',
    mostrarPreco: true,
    linkCompra: 'https://pay.hotmart.com/Y102648279R?off=x9lgwifs&hotfeature=51',
    garantia: '7 dias para reembolso, conforme as regras do Hotmart',
    // Capa do e-book (opcional). Com src preenchido (ex.: 'img/capa-ebook.webp'), aparece no bloco amarelo, ao lado do preço.
    // Vazio = nada é exibido e não sobra espaço.
    capa: { src: '', alt: 'Capa do e-book Métodos do Treino de Musculação' },
    faq: [
      {
        pergunta: 'Como recebo o e-book?',
        resposta: 'A compra é feita pelo Hotmart. O acesso chega por e-mail e também fica na sua conta Hotmart, em Minha conta > Minhas compras.',
      },
      {
        pergunta: 'Posso ler no celular?',
        resposta: 'Sim. O e-book é digital e pode ser lido no computador, no celular ou no tablet.',
      },
      {
        pergunta: 'Como funciona a garantia?',
        resposta: 'São 7 dias para pedir reembolso, conforme as regras do Hotmart.',
      },
    ],
    tituloAba: 'E-book: Métodos do Treino de Musculação | Felipe Sousa',
    // CONFIRMAR com o Felipe se pode manter a frase original: "usados por atletas e preparadores físicos".
    descricaoSEO: 'E-book digital com 20 métodos de treino usados na musculação. Compra pelo Hotmart, acesso por e-mail.',
  },
  // PLANOS DE CONSULTORIA. Tudo (textos, preços, rotas) vem daqui.
  // mostrar: false esconde a seção da home, o item do menu e as rotas #/planos e #/planos/:id.
  // mostrarPreco: false esconde os valores e mostra apenas textoSemPreco.
  planos: {
    mostrar: true,
    mostrarPreco: true,
    textoSemPreco: 'Consulte valores',
    titulo: 'Consultoria online',
    subtitulo: 'Treino acompanhado pelo celular, com atendimento para todo o Brasil.',
    tituloSecaoHome: 'Planos de consultoria',
    botaoHome: 'Ver planos e detalhes',
    tituloIncluso: 'Tudo que está em todos os planos',
    avisoDiferenca: 'Os três planos têm os mesmos benefícios. O que muda é só a duração.',
    itens: [
      { id: '1-mes', nome: 'Plano 1 mês', meses: 1, preco: 99.9 },
      { id: '2-meses', nome: 'Plano 2 meses', meses: 2, preco: 179.9 },
      { id: '3-meses', nome: 'Plano 3 meses', meses: 3, preco: 249.9 },
    ],
    incluso: [
      'Treino personalizado de acordo com objetivo, nível e disponibilidade',
      'Treino completo no aplicativo, acessível pelo celular',
      'Vídeos dos exercícios mostrando a execução correta',
      'Orientação nutricional geral, dentro do que é permitido à atuação do profissional de educação física',
      'Ajustes durante a consultoria conforme a evolução',
      'Suporte pelo WhatsApp para tirar dúvidas',
      'Acompanhamento da evolução (envio de fotos e medidas)',
    ],
    comoFunciona: [
      'Você chama o Felipe no WhatsApp.',
      'Informa seu objetivo, nível e disponibilidade.',
      'Recebe o treino no aplicativo e é acompanhado durante o plano.',
    ],
    paraQuem: 'Pessoas que querem treinar com acompanhamento, em casa ou na academia, presencial ou online.',
    notaNutricao: 'As orientações nutricionais seguem os limites da atuação do profissional de educação física.',
    // {nome} é trocado pelo nome do plano.
    mensagemWhatsapp: 'Olá, Felipe! Tenho interesse no {nome}. Pode me explicar como funciona?',
    faq: [
      {
        pergunta: 'Como funciona a consultoria online?',
        resposta: 'Você chama o Felipe no WhatsApp, informa seu objetivo, nível e disponibilidade, recebe o treino no aplicativo e é acompanhado durante o plano.',
      },
      {
        pergunta: 'Preciso ter academia?',
        resposta: 'A consultoria atende quem treina em casa ou na academia. Para saber como fica o seu caso, fale com o Felipe pelo WhatsApp.',
      },
      {
        pergunta: 'Como recebo o treino?',
        resposta: 'Pelo aplicativo, no celular, com vídeos dos exercícios mostrando a execução correta.',
      },
      {
        pergunta: 'Como é o suporte?',
        resposta: 'Pelo WhatsApp, para tirar dúvidas durante a consultoria.',
      },
      {
        pergunta: 'Posso trocar de plano?',
        resposta: 'Fale com o Felipe pelo WhatsApp.',
      },
      {
        pergunta: 'Atende fora de Juazeiro do Norte?',
        resposta: 'Sim. A consultoria é online, para todo o Brasil.',
      },
    ],
    // SEO. Tokens: {nome}, {duracao}.
    tituloAba: 'Planos de consultoria online | Felipe Sousa',
    descricaoSEO: 'Consultoria online de treino com Felipe Sousa: treino no aplicativo, vídeos dos exercícios, suporte pelo WhatsApp e acompanhamento da evolução. Atendimento para todo o Brasil.',
    tituloAbaPlano: '{nome} | Consultoria online | Felipe Sousa',
    descricaoSEOPlano: '{nome} de consultoria online com Felipe Sousa. Treino no aplicativo, vídeos dos exercícios, suporte pelo WhatsApp e acompanhamento da evolução.',
  },
}

export const linkWhatsapp = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp)}`

export const linkWhatsappMensagem = (texto) => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(texto)}`

export const linkInstagram = config.instagram
  ? config.instagram.startsWith('http')
    ? config.instagram
    : `https://instagram.com/${config.instagram.replace(/^@/, '')}`
  : ''

export const ebookAtivo = Boolean(config.ebook?.mostrar)

export const planosAtivo = Boolean(config.planos?.mostrar)

const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
export const formatarPreco = (valor) => moeda.format(valor).replace(/ /g, ' ')
export const duracaoPlano = (p) => (p.meses === 1 ? '1 mês' : `${p.meses} meses`)
// Equivalência por mês: só para planos com mais de 1 mês.
export const precoPorMes = (p) => (p.meses > 1 ? formatarPreco(p.preco / p.meses) : null)
export const planoPorId = (id) => config.planos?.itens.find((p) => p.id === id)
export const linkWhatsappPlano = (p) =>
  `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.planos.mensagemWhatsapp.replace('{nome}', p.nome))}`
export const textoDoPlano = (modelo, p) => modelo.replace('{nome}', p.nome).replace('{duracao}', duracaoPlano(p))
