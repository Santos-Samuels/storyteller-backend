export const foo = JSON.parse(`{
  "role": {
    "id": "1",
    "created_at": 1708887401.197891,
    "updated_at": 1708887401.197898,
    "name": "Entrepreneur"
  },
  "user": {
    "id": "2",
    "created_at": 1708887401.197966,
    "updated_at": 1708887401.197968,
    "name": "Alex",
    "email": "alex@example.com",
    "password": "password",
    "roleId": "1"
  },
  "history": {
    "id": "3",
    "created_at": 1708887401.198043,
    "updated_at": 1708887401.198045,
    "userId": "2",
    "theme": "Entrepreneurship",
    "resume": "A dialogue exploring various aspects of entrepreneurship, including challenges, strategies, motivation, and the impact of technology.",
    "ramifications": [
      "challenges",
      "strategies",
      "motivation",
      "technology"
    ]
  },
  "caracters": [
    {
      "id": "4",
      "created_at": 1708887401.198108,
      "updated_at": 1708887401.198109,
      "name": "Alex",
      "baseSpriteRef": "alex.png"
    },
    {
      "id": "5",
      "created_at": 1708887401.198112,
      "updated_at": 1708887401.198114,
      "name": "Jordan",
      "baseSpriteRef": "jordan.png"
    }
  ],
  "scenes": [
    {
      "id": "6",
      "created_at": 1708887401.201917,
      "updated_at": 1708887401.201921,
      "historyId": "3",
      "caracterId": "5",
      "caracterSpriteRef": "alexhappy.png",
      "speech": "I've always admired the spirit of entrepreneurship. It's about creating value from nothing.",
      "emotion": "happy",
      "position": "left",
      "backgroundRef": "office.png"
    },
    {
      "id": "7",
      "created_at": 1708887401.201933,
      "updated_at": 1708887401.201934,
      "historyId": "3",
      "caracterId": "6",
      "caracterSpriteRef": "jordanthinking.png",
      "speech": "Absolutely, but it's also riddled with challenges. How do you stay motivated?",
      "emotion": "thinking",
      "position": "right",
      "backgroundRef": "office.png"
    },
    {
      "id": "8",
      "created_at": 1708887401.201939,
      "updated_at": 1708887401.201941,
      "historyId": "3",
      "caracterId": "5",
      "caracterSpriteRef": "alexneutral.png",
      "speech": "Motivation comes from vision and impact. Knowing you can change lives keeps you going.",
      "emotion": "neutral",
      "position": "left",
      "backgroundRef": "office.png"
    },
    {
      "id": "9",
      "created_at": 1708887401.201946,
      "updated_at": 1708887401.201947,
      "historyId": "3",
      "caracterId": "6",
      "caracterSpriteRef": "jordanhappy.png",
      "speech": "Speaking of impact, how do you think technology is reshaping entrepreneurship?",
      "emotion": "happy",
      "position": "right",
      "backgroundRef": "office.png"
    },
    {
      "id": "10",
      "created_at": 1708887401.201952,
      "updated_at": 1708887401.201953,
      "historyId": "3",
      "caracterId": "5",
      "caracterSpriteRef": "alexsurprised.png",
      "speech": "It's a game changer! Technology has democratized the field. Anyone with an idea can start.",
      "emotion": "surprised",
      "position": "left",
      "backgroundRef": "office.png"
    },
    {
      "id": "11",
      "created_at": 1708887401.201959,
      "updated_at": 1708887401.20196,
      "historyId": "3",
      "caracterId": "6",
      "caracterSpriteRef": "jordanthinking.png",
      "speech": "That's true, but with so many people starting businesses, how do you stand out?",
      "emotion": "thinking",
      "position": "right",
      "backgroundRef": "office.png"
    },
    {
      "id": "12",
      "created_at": 1708887401.201966,
      "updated_at": 1708887401.201967,
      "historyId": "3",
      "caracterId": "5",
      "caracterSpriteRef": "alexhappy.png",
      "speech": "Innovation and understanding your customer. It's not just about the product but solving real problems.",
      "emotion": "happy",
      "position": "left",
      "backgroundRef": "office.png"
    },
    {
      "id": "13",
      "created_at": 1708887401.201973,
      "updated_at": 1708887401.201974,
      "historyId": "3",
      "caracterId": "6",
      "caracterSpriteRef": "jordanneutral.png",
      "speech": "What strategies do you think are essential for a new entrepreneur?",
      "emotion": "neutral",
      "position": "right",
      "backgroundRef": "office.png"
    },
    {
      "id": "14",
      "created_at": 1708887401.201979,
      "updated_at": 1708887401.201981,
      "historyId": "3",
      "caracterId": "5",
      "caracterSpriteRef": "alexthinking.png",
      "speech": "Flexibility and resilience. The entrepreneurial journey is unpredictable.",
      "emotion": "thinking",
      "position": "left",
      "backgroundRef": "office.png"
    },
    {
      "id": "15",
      "created_at": 1708887401.201986,
      "updated_at": 1708887401.201987,
      "historyId": "3",
      "caracterId": "6",
      "caracterSpriteRef": "jordansad.png",
      "speech": "And how about funding? That's a big hurdle for many.",
      "emotion": "sad",
      "position": "right",
      "backgroundRef": "office.png"
    },
    {
      "id": "16",
      "created_at": 1708887401.201993,
      "updated_at": 1708887401.201994,
      "historyId": "3",
      "caracterId": "5",
      "caracterSpriteRef": "alexhappy.png",
      "speech": "True. But there are more options now than ever, from crowdfunding to angel investors.",
      "emotion": "happy",
      "position": "left",
      "backgroundRef": "office.png"
    },
    {
      "id": "17",
      "created_at": 1708887401.202,
      "updated_at": 1708887401.202001,
      "historyId": "3",
      "caracterId": "6",
      "caracterSpriteRef": "jordanthinking.png",
      "speech": "It's all about networking too, right? Your connections can open doors.",
      "emotion": "thinking",
      "position": "right",
      "backgroundRef": "office.png"
    },
    {
      "id": "18",
      "created_at": 1708887401.202007,
      "updated_at": 1708887401.202008,
      "historyId": "3",
      "caracterId": "5",
      "caracterSpriteRef": "alexhappy.png",
      "speech": "Exactly. It's not just what you know, but who you know.",
      "emotion": "happy",
      "position": "left",
      "backgroundRef": "office.png"
    },
    {
      "id": "19",
      "created_at": 1708887401.202014,
      "updated_at": 1708887401.202015,
      "historyId": "3",
      "caracterId": "6",
      "caracterSpriteRef": "jordanthinking.png",
      "speech": "I guess the key is to start small, learn fast, and scale quickly.",
      "emotion": "thinking",
      "position": "right",
      "backgroundRef": "office.png"
    },
    {
      "id": "20",
      "created_at": 1708887401.202021,
      "updated_at": 1708887401.202022,
      "historyId": "3",
      "caracterId": "5",
      "caracterSpriteRef": "alexneutral.png",
      "speech": "Yes, and never lose sight of your 'why'. That's what keeps you grounded and focused.",
      "emotion": "neutral",
      "position": "left",
      "backgroundRef": "office.png"
    },
    {
      "id": "21",
      "created_at": 1708887401.202028,
      "updated_at": 1708887401.202029,
      "historyId": "3",
      "caracterId": "6",
      "caracterSpriteRef": "jordanhappy.png",
      "speech": "Thanks, Alex. This conversation has given me a lot to think about.",
      "emotion": "happy",
      "position": "right",
      "backgroundRef": "office.png"
    },
    {
      "id": "22",
      "created_at": 1708887401.202035,
      "updated_at": 1708887401.202036,
      "historyId": "3",
      "caracterId": "5",
      "caracterSpriteRef": "alexvery-happy.png",
      "speech": "Anytime, Jordan. Remember, the journey is the reward.",
      "emotion": "very-happy",
      "position": "left",
      "backgroundRef": "office.png"
    },
    {
      "id": "23",
      "created_at": 1708887401.202042,
      "updated_at": 1708887401.202043,
      "historyId": "3",
      "caracterId": "6",
      "caracterSpriteRef": "jordanvery-happy.png",
      "speech": "I'll remember that. Let's make an impact!",
      "emotion": "very-happy",
      "position": "right",
      "backgroundRef": "office.png"
    }
  ]
}
`);

export const foo2 = JSON.parse(`{
  "theme": "Empreendedorismo",
  "resume": "Dois amigos, Ana e Bruno, discutem sobre iniciar um negócio, explorando os desafios e recompensas do empreendedorismo.",
  "ramifications": [
    "Identificação de oportunidades",
    "Gestão de riscos",
    "Inovação e criatividade",
    "Crescimento e escalabilidade"
  ],
  "scenes": [
    {
      "speech": "Você já pensou em abrir seu próprio negócio?",
      "emotion": "thinking",
      "position": "left"
    },
    {
      "speech": "Sim, mas não sei por onde começar.",
      "emotion": "confused",
      "position": "right"
    },
    {
      "speech": "A primeira etapa é identificar uma oportunidade de mercado.",
      "emotion": "neutral",
      "position": "left"
    },
    {
      "speech": "Isso significa resolver um problema ou atender a uma necessidade específica?",
      "emotion": "thinking",
      "position": "right"
    },
    {
      "speech": "Exatamente. Algo que as pessoas precisem ou desejem.",
      "emotion": "happy",
      "position": "left"
    },
    {
      "speech": "E quanto ao risco? Isso me assusta.",
      "emotion": "sad",
      "position": "right"
    },
    {
      "speech": "O empreendedorismo sempre envolve riscos, mas a gestão de riscos pode minimizá-los.",
      "emotion": "neutral",
      "position": "left"
    },
    {
      "speech": "Então, preciso aprender sobre gestão de riscos.",
      "emotion": "thinking",
      "position": "right"
    },
    {
      "speech": "E inovação? Como posso garantir que meu negócio seja único?",
      "emotion": "confused",
      "position": "left"
    },
    {
      "speech": "A chave é oferecer algo novo ou melhorar o que já existe.",
      "emotion": "thinking",
      "position": "right"
    },
    {
      "speech": "Isso soa desafiador, mas também excitante.",
      "emotion": "surprised",
      "position": "left"
    },
    {
      "speech": "E sobre crescimento? Como faço para escalar meu negócio?",
      "emotion": "confused",
      "position": "right"
    },
    {
      "speech": "Isso depende de muitos fatores, incluindo o modelo de negócios e a capacidade de se adaptar.",
      "emotion": "thinking",
      "position": "left"
    },
    {
      "speech": "Então, é uma jornada contínua de aprendizado e adaptação.",
      "emotion": "neutral",
      "position": "right"
    },
    {
      "speech": "Exatamente. Está pronto para embarcar nessa jornada?",
      "emotion": "happy",
      "position": "left"
    },
    {
      "speech": "Acho que sim. Vamos fazer isso juntos?",
      "emotion": "happy",
      "position": "right"
    },
    {
      "speech": "Claro! Vamos nos apoiar nesse caminho.",
      "emotion": "very-happy",
      "position": "left"
    },
    {
      "speech": "Mal posso esperar para ver onde isso vai nos levar.",
      "emotion": "surprised",
      "position": "right"
    },
    {
      "speech": "Com determinação e trabalho duro, podemos alcançar qualquer coisa.",
      "emotion": "very-happy",
      "position": "left"
    },
    {
      "speech": "Sim, vamos transformar nossos sonhos em realidade!",
      "emotion": "very-happy",
      "position": "right"
    }
  ]
}
`);

export const foo3 =
  '```json\n{\n  "theme": "Empreendedorismo",\n  "resume": "Diálogo entre dois personagens sobre empreendedorismo.",\n  "ramifications": [\n    "Inovação",\n    "Resiliência",\n    "Planejamento",\n    "Persistência"\n  ],\n  "scenes": [\n    {\n      "speech": "Você já pensou em empreender?",\n      "emotion": "thinking",\n      "position": "left"\n    },\n    {\n      "speech": "Sim, muitas vezes. Mas tenho medo do fracasso.",\n      "emotion": "confused",\n      "position": "right"\n    },\n    {\n      "speech": "Empreender envolve riscos, mas também traz oportunidades únicas. Você tem uma ideia em mente?",\n      "emotion": "happy",\n      "position": "left"\n    },\n    {\n      "speech": "Tenho sim, mas não sei por onde começar... Você já empreendeu?",\n      "emotion": "thinking",\n      "position": "right"\n    },\n    {\n      "speech": "Sim, já tive meu próprio negócio. O mais importante é planejar e se manter resiliente.",\n      "emotion": "happy",\n      "position": "left"\n    },\n    {\n      "speech": "Resiliência? Isso significa não desistir diante das dificuldades?",\n      "emotion": "confused",\n      "position": "right"\n    },\n    {\n      "speech": "Exatamente! O empreendedorismo exige enfrentar obstáculos e continuar mesmo quando as coisas parecem difíceis.",\n      "emotion": "surprised",\n      "position": "left"\n    },\n    {\n      "speech": "E como você lida com a inovação no seu negócio?",\n      "emotion": "thinking",\n      "position": "right"\n    },\n    {\n      "speech": "A inovação é essencial para se destacar no mercado. Sempre busco novas ideias e formas de melhorar.",\n      "emotion": "happy",\n      "position": "left"\n    },\n    {\n      "speech": "Isso é incrível! Eu realmente preciso trabalhar mais a inovação na minha ideia.",\n      "emotion": "happy",\n      "position": "right"\n    },\n    {\n      "speech": "Você já pensou em montar um plano de negócios para estruturar sua ideia?",\n      "emotion": "thinking",\n      "position": "left"\n    },\n    {\n      "speech": "Acho que isso pode me ajudar a ter uma visão mais clara do que quero alcançar. Você pode me dar algumas dicas?",\n      "emotion": "neutral",\n      "position": "right"\n    },\n    {\n      "speech": "Claro! Um bom plano de negócios deve conter análise de mercado, estratégias de marketing e projeções financeiras.",\n      "emotion": "happy",\n      "position": "left"\n    },\n    {\n      "speech": "Entendi. Planejamento é realmente fundamental para o sucesso. E quanto à persistência, como você a define no empreendedorismo?",\n      "emotion": "thinking",\n      "position": "right"\n    },\n    {\n      "speech": "Persistência é não desistir, é continuar tentando mesmo diante de obstáculos. É fundamental para alcançar os objetivos.",\n      "emotion": "happy",\n      "position": "left"\n    },\n    {\n      "speech": "Agora estou mais motivado a seguir em frente com a minha ideia. Obrigado por todas as dicas!",\n      "emotion": "very-happy",\n      "position": "right"\n    },\n    {\n      "speech": "De nada! Lembre-se, o empreendedorismo é desafiador, mas também pode ser muito gratificante. Estou aqui para ajudar no que precisar.",\n      "emotion": "happy",\n      "position": "left"\n    }\n  ]\n}\n```';
