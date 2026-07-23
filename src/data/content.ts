const assetRoot = `${import.meta.env.BASE_URL}assets/images/experience/brasilia-game-festival`

export const contact = {
  whatsapp: '+5561981725558',
  email: 'administracao.x1@gmail.com',
  instagram: '@x1_ltda',
  instagramUrl: 'https://www.instagram.com/x1_ltda/',
  message: 'Olá! Conheci a Mario Kart Live Experience pelo mídia kit e gostaria de conversar sobre uma oportunidade comercial.',
}

export const contactLinks = {
  whatsapp: `https://wa.me/${contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(contact.message)}`,
  email: `mailto:${contact.email}?subject=${encodeURIComponent('Oportunidade comercial — Mario Kart Live Experience')}`,
  instagram: contact.instagramUrl,
}

export const stats = [
  { value: '4', label: 'pilotos por corrida' },
  { value: '5 min', label: 'por ciclo completo' },
  { value: '48', label: 'jogadores por hora' },
  { value: '200–400', label: 'espectadores por hora' },
]

export const mechanics = [
  ['01', 'Quatro pilotos', '4 consoles Nintendo Switch 2 conectados entre si e ao telão.'],
  ['02', 'Corrida ao vivo', '3 minutos de disputa e 2 minutos de transição em cada ciclo.'],
  ['03', 'Visão ampliada', '4 câmeras de bordo com realidade aumentada e 1 câmera aérea panorâmica.'],
  ['04', 'Pista real', 'Rampas, curvas de precisão e obstáculos em uma arena cenográfica.'],
]

export const brandBenefits = [
  ['Tráfego para o stand', 'Fluxo espontâneo e constante, convertendo curiosos em contatos comerciais.'],
  ['Publicidade tridimensional', 'Mini outdoors e barricadas aparecem organicamente nas câmeras dos karts e no telão.'],
  ['Geração de leads', 'Coordenador de fila dedicado à coleta de dados de participantes.'],
  ['Viralização orgânica', 'O impacto visual estimula gravações e compartilhamentos espontâneos.'],
]

export const mediaSpaces = [
  ['Mini outdoors', 'Painéis em escala posicionados ao longo do traçado, visíveis a cada volta.'],
  ['Barricadas brandadas', 'Presença da marca nas curvas e retas, constante nos feeds de bordo.'],
  ['Telão de LED', 'Exposição associada ao espetáculo da corrida, com 5 feeds simultâneos.'],
]

export const plans = [
  { name: 'Essencial', price: 'A partir de R$ 45.000', items: ['Pista pré-existente X1', 'Montagem e desmontagem', 'Organizadores responsáveis por, no mínimo, 3 dias', 'Anúncios de pista definidos pela X1'] },
  { name: 'Completo', price: 'Sob consulta', featured: true, items: ['Tudo do plano Essencial', 'Telão de LED com transmissão ao vivo', 'Estrutura de mesas e cadeiras', 'Organizador de filas (coleta de leads)', 'Uso livre dos espaços de anúncios pelo contratante'] },
  { name: 'Personalizado', price: 'Sob consulta', items: ['Tudo do plano Completo', 'Desenvolvimento de pista personalizada para a marca ou evento', 'Contratação com no mínimo 90 dias de antecedência'] },
]

export const requirements = [
  ['Área mínima', '35 m² livres'],
  ['Energia', 'Ponto disponível no local'],
  ['Montagem', 'Mínimo de 6 horas'],
  ['Equipe', 'Time de até 8 especialistas'],
]

export const gallery = [
  ['arena-completa.webp', 'Visão ampla da arena com pista cenográfica, estações e telão.', 'Arena completa'],
  ['pilotos-e-equipe.webp', 'Pilotos nas estações acompanhados pela equipe X1.', 'Pilotos e equipe'],
  ['realidade-aumentada-telao.webp', 'Telão exibindo o feed de bordo com realidade aumentada.', 'Realidade aumentada'],
  ['pista-completa.webp', 'Pista cenográfica com rampas, curvas e obstáculos.', 'Traçado da pista'],
  ['publico-jogando.webp', 'Participantes jogando e acompanhando a corrida ao vivo.', 'Público participando'],
  ['pista-vista-aerea.webp', 'Vista elevada dos karts percorrendo a pista.', 'Karts em disputa'],
  ['equipe-na-pista.webp', 'Integrante da equipe reposicionando um kart durante a operação.', 'Suporte contínuo'],
  ['kart-em-acao.webp', 'Kart real em primeiro plano na pista cenográfica.', 'Kart na pista'],
  ['mini-outdoor.webp', 'Mini outdoor instalado em posição de destaque no circuito.', 'Espaço de mídia'],
].map(([file, alt, title]) => ({ src: `${assetRoot}/${file}`, alt, title }))

export const heroImage = `${assetRoot}/arena-completa.webp`
export const mediaImage = `${assetRoot}/midia-na-pista.webp`
export const operationImage = `${assetRoot}/equipe-na-pista.webp`
