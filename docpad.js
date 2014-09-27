module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "GDG Semana Acadêmica BSI 2014",
      description: "Semana Acadêmica do curso de Bacharelado em Sistemas de Informação",
      date: "14 a 17 de outubro",
      // If your event is free, just comment this line
      // price: "Entrada Gratuita",
      venue: "Centro Universitário Católica de Santa Catarina",
      address: "R. dos Imigrantes, 500 - Rau",
      city: "Jaraguá do Sul",
      state: "Santa Catarina"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Entrada Gratuita",
        link: "#"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/devfestsul/site-2014"
    // },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://semanaacademica.gdgjs.org/",
      googleanalytics: ""
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Patrocínio",
      partners: "Realização",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Lucas da Silva",
        photo: "themes/yellow-swan/img/speakers/lucas.jpg",
        bio: "Criador e organizer do GDG Jaraguá do Sul, acadêmico do curso de Bacharelado em Sistemas da Informação, Web Developer na AWLKA.",
        company: "AWLKA",
        link: {
          href: "https://twitter.com/_agtlucas",
          text: "@_agtlucas"
        },
        presentation: {
          title: "Keynote",
          description: "Apresentação da Semana Acadêmica.",
          time: "14/10 - 18h50"
        }
      },
      {
        name: "Rômulo Jales",
        photo: "themes/yellow-swan/img/speakers/romulo-jales.jpeg",
        bio: "Computer Engineer, focus on software engineer, actually working at globo.com, largest website portal in Brazil.",
        company: "Globo.com",
        link: {
          href: "https://twitter.com/romulojales",
          text: "@romulojales"
        },
        presentation: {
          title: "Semântica e vocabulários semânticos",
          description: "Workshop sobre como usar vocabulários semânticos para construir sistemas. O que é semântica? O que são vocabulários semânticos? SparQL e virtuoso, tudo isso e muito mais!",
          time: "14/10 - 19h00"
        }
      },
      {
        name: "Thiago Pradi",
        photo: "themes/yellow-swan/img/speakers/thiago-pradi.jpeg",
        bio: "Desenvolvedor Ruby / Rails desde 2008, já trabalhou nos mais diversos projetos. Atualmente, é Desenvolvedor de Software na JobScore, Mestrando em Ciência da Computação na UFPR e Pesquisador no grupo de pesquisa IMAGO. ",
        company: "JobScore",
        link: {
          href: "https://twitter.com/thiagopradi",
          text: "@thiagopradi"
        },
        presentation: {
          title: "Seu trabalho é inventar o futuro",
          description: "Com a ascensão da tecnologia no mundo moderno, cada vez mais ela modificando o nosso cotidiano. Porém, como nós, os profissionais de tecnologia, podemos trabalhar para que essa tecnologia se converta em um futuro melhor? Nessa palestra, introduzirei alguns conceitos sobre pesquisas, produtos e ideias da área de tecnologia que estão mudando o mundo para melhor. Além disso, serão apresentadas algumas dicas sobre como você pode participar dessa revolução.",
          time: "14/10 - 20h30"
        }
      },
      {
        name: "Ione Souza Junior",
        photo: "themes/yellow-swan/img/speakers/ione-souza.jpg",
        bio: "Ione Souza Junior, 27 anos, graduado em Análise e Desenvolvimento de Sistemas pela Católica SC e especializado em Tecnologias Web pela PUC PR. Desenvolvedor há 8 anos, curioso e apreciador de assuntos relacionados a qualidade e testes de software.",
        company: "Priori",
        link: {
          href: "https://twitter.com/ionixjunior",
          text: "@ionixjunior"
        },
        presentation: {
          title: "Mantendo seu software sob controle",
          description: "A palestra tem o objetivo de mostrar algumas ferramentas voltadas à qualidade de software aplicadas ao PHP.",
          time: "15/10 - 19h00"
        }
      },
      {
        name: "Carlos Alexandre Fuechter",
        photo: "themes/yellow-swan/img/speakers/carlos-alexandre.jpeg",
        bio: "Web Developer Full-Stack nas horas livres e desenvolvedor Front-End na Agência Milagro, formado em Tecnologia e Análise de Desenvolvimento de Sistemas.",
        company: "Milagro",
        link: {
          href: "https://twitter.com/alexandref93",
          text: "@alexandref93"
        },
        presentation: {
          title: "Node.js - Um novo universo",
          description: "Palestra sobre a plataforma Node.js. O que é? O que ela é capaz de fazer? O seu potencial no mercado. Sua influência no JavaScript.",
          time: "15/10 - 20h30"
        }
      },
      {
        name: "Núcleo de Inovação Digital e Startups",
        photo: "themes/yellow-swan/img/speakers/acijs.png",
        bio: "Núcleo de Inovação Digital e Startups.",
        company: "ACIJS",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Núcleo de Inovação Digital e Startups apresenta cases",
          description: "Cases e dicas de empreendedorismo.",
          time: "16/10 - 19:00"
        }
      },
      {
        name: "João Pedro Schmitt",
        photo: "themes/yellow-swan/img/speakers/joao.png",
        bio: "Acadêmico formado em Técnico em Redes de Computadores pelo Senai e cursando Bacharelado em Sistemas de Informação pelo Centro Universitário Católica de SC - Jaraguá do Sul, atualmente empregado como Desenvolvedor de Sistemas WEB de engenharia pela WEG e pesquisador em Sistemas Robóticos/Embarcados pelo Centro Universitário Católica de SC.",
        company: "WEG",
        presentation: {
          title: "IoT - Internet das coisas",
          description: "Nesta palestra, João e Joe farão um overview sobre IoT.",
          time: "17/10 - 20h30"
        }
      },
      {
        name: "Joe Jonas Vogel",
        photo: "themes/yellow-swan/img/speakers/joe.jpg",
        bio: "Graduando de Bacharelado em Sistemas de Informação pelo Centro Universitário Católica de Santa Catarina. Pesquisador em Sistemas Roboticos/Embarcados no Centro Universitário Católica de Santa Catarina. Estagiário em Engenharia de Software na WEG Equipamentos Eletrônicos S.A.",
        company: "WEG",
        presentation: {
          title: "IoT - Internet das coisas",
          description: "Nesta palestra, João e Joe farão um overview sobre IoT.",
          time: "17/10 - 20h30"
        }
      }
    ],

    // List of Sponsors
    sponsors: {
      adamantium: [
        // {
        //   name: "Google",
        //   logo: "themes/yellow-swan/img/google.png",
        //   url: "http://google.com"
        // },
        {
          name: "AWLKA",
          logo: "themes/yellow-swan/img/awlka-logo.png",
          logoClassImg: 'awlka-logo__img',
          logoClass: 'awlka-logo',
          url: "http://www.awlka.com"
        },
        {
          name: "GitHub",
          logo: "themes/yellow-swan/img/github-logo.png",
          logoClassImg: 'github-logo__img',
          logoClass: 'github-logo',
          url: "https://github.com/"
        }
      ],
    },

    // List of Partners
    partners: [
      {
        name: "Católica de SC",
        logo: "themes/yellow-swan/img/catolicasc.jpg",
        url: "http://catolicasc.org.br"
      },
      {
        name: "GDG Jaraguá do Sul",
        logo: "themes/yellow-swan/img/gdgjs.png",
        url: "http://gdgjs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
