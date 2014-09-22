module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "GDG Semana Acadêmica BSI 2014",
      description: "Semana Acadêmica do curso de Bacharelado em Sistemas de Informação",
      date: "13 - 17 de outubro",
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
        name: "Romulo Jales",
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
        name: "Lucas da Silva",
        photo: "themes/yellow-swan/img/speakers/lucas.jpg",
        bio: "Criador e organizer do GDG Jaraguá do Sul, acadêmico do curso de Bacharelado em Sistemas da Informação, Web Developer na AWLKA",
        company: "AWLKA",
        link: {
          href: "https://twitter.com/_agtlucas",
          text: "@_agtlucas"
        },
        presentation: {
          title: "Otimizando o Front-End",
          description: "Como otimizar aplicações web sem muito esforço.",
          time: "15/10 - 19h00"
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
          logoClass: 'awlka-logo',
          url: "http://www.awlka.com"
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
