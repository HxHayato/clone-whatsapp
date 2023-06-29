export function GerarArrayDasConversas (){
  const arrayConversas = [
    {
      nome: "Milena Santos",
      foto: "./src/img/img1.jpg",
      online: true,
      historico: [
        {
          autor: "amigo",
          mensagem: "Ei, você viu aquele novo filme que lançaram?",
          horario: "10:30",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Sim, assisti ontem à noite. Foi incrível!",
          horario: "10:31",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Sério? Preciso conferir então. Qual foi a parte que mais gostou?",
          horario: "10:31",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Acho que as cenas de ação foram sensacionais. Os efeitos especiais estavam muito bem feitos.",
          horario: "10:31",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Legal! Vou chamar mais alguns amigos para irmos juntos ao cinema. Tenho certeza de que vão adorar também.",
          horario: "10:32",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Ótima ideia! Vai ser divertido curtirmos juntos esse filme.",
          horario: "10:32",
          status: 1
        }
      ] 
    },
    {
      nome: "Raul Lopez",
      foto: "./src/img/img2.jpg",
      online: true,
      historico: [
        {
          autor: "amigo",
          mensagem: "Ei, você viu a notícia sobre o novo parque que estão construindo na cidade?",
          horario: "09:41",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Sim, ouvi falar! Parece que vai ser enorme e ter várias atrações legais.",
          horario: "09:50",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Mal posso esperar para explorar todas as áreas do parque. Acho que vou passar horas nos brinquedos radicais.",
          horario: "09:51",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Eu também estou ansioso pelos brinquedos, mas confesso que as áreas temáticas me chamam mais atenção. Quero muito conhecer a área de fantasia!",
          horario: "09:51",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Ah, sim! A área de fantasia promete ser incrível. Vamos ter a sensação de estar dentro de um conto de fadas.",
          horario: "09:51",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Com certeza! Vamos marcar um dia para irmos juntos assim que o parque for inaugurado. Vai ser demais!",
          horario: "09:52",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Combinado! Vamos aproveitar ao máximo todas as atrações e nos divertir bastante. Mal posso esperar por esse dia!",
          horario: "09:52",
          status: "lida"
        }
      ] 
    },
    {
      nome: "Júlia Rodrigues",
      foto: "./src/img/img3.jpg",
      online: false,
      historico: [
        {
          autor: "eu",
          mensagem: "E aí, já decidiu qual filme vamos assistir hoje?",
          horario: "17:30",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Ainda estou em dúvida, mas estou pensando em um suspense ou uma comédia.",
          horario: "17:31",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Que tal um suspense? Adoro filmes que me deixam tenso do começo ao fim.",
          horario: "17:31",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Boa escolha! Vamos preparar as pipocas e nos preparar para uma noite cheia de emoção.",
          horario: "17:31",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Com certeza! Tenho certeza de que vamos ficar vidrados na tela. Mal posso esperar para começar!",
          horario: "17:32",
          status: 3
        }
      ] 
    },
    {
      nome: "Luana",
      foto: "./src/img/img4.jpg",
      online: false,
      historico: [
        {
          autor: "amigo",
          mensagem: "Ei, você já ouviu falar sobre aquela nova banda de rock?",
          horario: "12:20",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Sim, eu ouvi algumas músicas deles. São realmente bons!",
          horario: "12:31",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Concordo, eles têm um som único e letras muito cativantes.",
          horario: "12:32",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Com certeza, acho que eles têm potencial para se tornarem grandes no cenário musical.",
          horario: "12:32",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Seria incrível vê-los em um show ao vivo. A energia deve ser contagiante!",
          horario: "12:33",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Com certeza, vamos ficar de olho nas datas e garantir nossos ingressos quando eles se apresentarem na nossa cidade.",
          horario: "12:33",
          status: 3
        }
      ] 
    },
    {
      nome: "Sofia",
      foto: "./src/img/img5.jpg",
      online: true,
      historico: [
        {
          autor: "amigo",
          mensagem: "E aí, já decidiu para onde vamos nas férias?",
          horario: "03:41",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Ainda estou em dúvida. Estava pensando em ir para a praia ou fazer um passeio de aventura.",
          horario: "03:50",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Praia seria ótimo para relaxar e aproveitar o sol, mas um passeio de aventura também tem seu charme.",
          horario: "03:51",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Concordo, seria emocionante fazer trilhas, praticar esportes radicais e explorar novos lugares.",
          horario: "03:51",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Talvez possamos conciliar os dois, escolhendo um destino que tenha praia e opções de aventura.",
          horario: "03:51",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Boa ideia! Vou pesquisar algumas opções e ver o que encontramos. Tenho certeza de que será uma viagem incrível!",
          horario: "03:52",
          status: 3
        }
      ] 
    },
    {
      nome: "Jennifer Oliveira",
      foto: "./src/img/img6.jpg",
      online: false,
      historico: [
        {
          autor: "amigo",
          mensagem: "Ei, você viu o novo filme que lançou no cinema?",
          horario: "09:41",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Ainda não, mas estou curioso para assistir. Qual é o gênero?",
          horario: "09:50",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "É um suspense psicológico, dizem que é muito intrigante e cheio de reviravoltas.",
          horario: "09:51",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Adoro filmes desse tipo! É sempre empolgante tentar desvendar os mistérios ao longo da história.",
          horario: "09:51",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Com certeza! Eu fiquei envolvido do início ao fim, não conseguia parar de tentar desvendar o desfecho.",
          horario: "09:51",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Mal posso esperar para assistir. Vamos marcar um dia para irmos juntos ao cinema?",
          horario: "09:52",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Combinado! Vamos aproveitar a experiência de desvendar os segredos desse filme juntos.",
          horario: "09:52",
          status: "lida"
        }
      ] 
    },
    {
      nome: "Tio Pedro",
      foto: "./src/img/img7.jpg",
      online: false,
      historico: [
        {
          autor: "amigo",
          mensagem: "Você viu as notícias sobre a descoberta de um novo planeta?",
          horario: "09:41",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Não, conte-me mais! Que tipo de planeta é esse?",
          horario: "09:50",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "É um planeta fora do nosso sistema solar, conhecido como exoplaneta. Os cientistas acreditam que ele possui condições favoráveis para abrigar vida.",
          horario: "09:51",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Incrível! Seria fantástico se pudéssemos encontrar outras formas de vida no universo.",
          horario: "09:51",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Com certeza! É uma descoberta emocionante e nos faz refletir sobre a possibilidade de existir vida além da Terra.",
          horario: "09:51",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Concordo. A exploração espacial é realmente fascinante, e essas descobertas nos mostram o quão vasto e misterioso é o universo.",
          horario: "09:52",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Completamente. Quem sabe um dia poderemos visitar esses planetas e desvendar seus segredos? Seria uma aventura incrível.",
          horario: "09:52",
          status: "não lida"
        }
      ] 
    },
    {
      nome: "Marco Silva",
      foto: "./src/img/img8.jpg",
      online: false,
      historico: [
        {
          autor: "amigo",
          mensagem: "Você viu o novo filme que lançaram recentemente?",
          horario: "09:41",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Qual filme? Estou um pouco por fora das novidades.",
          horario: "09:50",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "É um filme de ação e aventura, com muitos efeitos especiais e cenas emocionantes.",
          horario: "09:51",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Legal! Qual é a história do filme? Tem algum protagonista famoso?",
          horario: "09:51",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "A história se passa em um futuro distópico, onde um grupo de rebeldes luta contra um governo opressor. O protagonista é interpretado por um ator renomado, conhecido por seus papéis de herói.",
          horario: "09:51",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Parece interessante! E como estão as críticas do filme?",
          horario: "09:52",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "As críticas têm sido positivas, elogiando principalmente as cenas de ação bem coreografadas e os efeitos visuais impressionantes.",
          horario: "09:52",
          status: "não lida"
        }
      ] 
    },
    {
      nome: "Seu Jorge",
      foto: "./src/img/img9.jpg",
      online: false,
      historico: [
        {
          autor: "eu",
          mensagem: "Ei, você viu aquele filme novo que lançou?",
          horario: "09:50",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Não vi ainda, mas estou curioso para assistir. O que achou?",
          horario: "09:51",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Eu gostei bastante! A história é envolvente e os efeitos especiais são incríveis.",
          horario: "09:51",
          status: 3
        },
        {
          autor: "amigo",
          mensagem: "Legal, preciso colocar na minha lista de filmes para assistir então.",
          horario: "09:51",
          status: "lida"
        },
        {
          autor: "eu",
          mensagem: "Recomendo! Tenho certeza de que você vai gostar.",
          horario: "09:52",
          status: 1
        }
      ] 
    }
  ];

  return arrayConversas;
}

/* Se a mensagem foi o usuário (eu) que enviou:
  Enviada     = 1
  Recebida    = 2
  Visualizada = 3
*/