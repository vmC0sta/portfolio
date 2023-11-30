window.sr = ScrollReveal({reset: true});
sr.reveal('.reveal',{duration:2000})

const data = {
    pt: {
        navAbout: "Sobre",
        navWhatIdo: "Projetos",
        navContact: "Contato",
        status:"Disponível para oportunidades",
        title: "Bem-vindo ao meu Portfólio",
        subtitle1:"Sou uma estudante de programação. <br> Meu interesse é em Java e desenvolvimento em Web",
        buttonTalk:"Bora conversar",
        whatIdo:"P R O J E T O S",
        title2:"Projetos recentes",
        project1:"Um design responsivo que permite que os usuários insiram um link, gerando um código QR na tela.",
        project2:" Em um design responsivo, os usuários podem escolher interativamente uma avaliação de 1 a 5 estrelas.",
        project3:"Este repositório possue minha jornada de aprendizado em Java no Entra21",
        btnProject:"Dar uma olhadinha",
        aboutMe:"S O B R E",
        title3:"Saiba quem eu sou",
        textAboutMe:"Sou apaixonada por aprendizado contínuo!<br/> Estou participando do Entra21, um programa de formação em tecnologia bem conceituado em Santa Catarina.<br/><br/> Meu primeiro contato com o mercado de trabalho aconteceu aos 14 anos, na Unimed Alto Vale, onde adquiri um conhecimento sólido sobre o funcionamento interno das empresas e a vantagem do cooperativismo. Agora, tive a oportunidade de liderar uma equipe de suporte ao sistema WMS (Warehouse Management System) em uma empresa de tecnologia, onde mergulhei nas complexidades das regras de negócio. Meu próximo objetivo é ingressar na área de desenvolvimento.<br/><br/> Além do meu interesse pela tecnologia, tenho paixão por música, jogos, negócios e livros. Meu nível de inglês é intermediário (B1).<br/><br/> Estou sempre aberta a novas conexões e adoro compartilhar experiências.",
        subtitle2:"Conheça um pouquinho mais sobre mim",
        currentRead:"Leitura atual",
        experiencies:"E X P E R I Ê N C I A S",
        title4:"Evolução Profissional",
        experience1: "Suporte técnico, ",
        dateExperience1:"Maio 2022 - Nov 2023 / Rio do Sul, Brasil",
        descriptionExperience1:"Lidero uma equipe como ponto de contato principal para clientes em questões técnicas do sistema WMS. Sempre de olho no SLA, garantindo que as necessidades sejam atendidas de maneira rápida e eficiente. <br/>Utilizo habilidades em SQL para análise e solução de problemas em bancos de dados. <br/>Ofereço suporte a usuários finais para resolver problemas do sistema. Isso envolve a resolução de problemas técnicos, a explicação de funcionalidades do sistema e a garantia de que os usuários possam utilizar a plataforma de forma eficaz. <br/>Trabalho em estreita colaboração com a equipe de desenvolvimento para identificar falhas e otimizar o sistema. Fornecendo feedback para melhorar a qualidade e a eficiência do sistema. <br/>Tenho experiência em lidar com integrações e APIs.",
    },
    en: {
        navAbout: "About",
        navWhatIdo: "What I do",
        navContact: "Contact",
        status:"Available for opportunies",
        title: "Wander Throug My Portfolio",
        subtitle1:"I`m a student of programming<br> My interest is in Java and Web development",
        buttonTalk:"Let's talk",
        whatIdo:"W H A T  I  D O",
        title2:"Recently Projects",
        project1:"In a responsive design allows users to enter a URL, generating a QR code on the screen for convenient use.",
        project2:"In a responsive design, users can interactively choose a numerical rating from 1 to 5 stars.",
        project3:"This repo logs my Java learning at Entra21, covering basics to advanced Java, ending with a hands-on project.",
        btnProject:"View the project",
        aboutMe:"A B O U T",
        title3:"Know who I am",
        textAboutMe:"I'm passionate about continuous learning! <br/><br/> I am participating in Entra21, a well-regarded technology training program in Santa Catarina, Brazil. <br/>My first exposure to the job market was at the age of 14, at Unimed Alto Vale, where I gained a solid understanding of how businesses operate and the benefits of cooperation. <br/><br/>I have had the opportunity to lead a support team for Warehouse Management System (WMS) at a technology company, where I dove into the business rules. <br/>Now, my next goal is to transition into the area of development. <br/>In addition to my passion for technology, I have a love for music, games, business, and books. <br/><br/>My English proficiency is at an intermediate level (B1). <br/><br/>I'm always open to new connections and enjoy sharing experiences.",
        subtitle2:"Let’s now more about me",
        currentRead:"Current Read",
        experiencies:"M Y  E X P E R I E N C E S",
        title4:"Professional Evolution",
        experience1: "Technical Support, ",
        dateExperience1:"May 2022 - Nov 2023 / Rio do Sul, Brazil",
        descriptionExperience1:"I lead a team as the main point of contact for clients on technical matters of the WMS system. <br/>Always keeping an eye on SLAs, ensuring that needs are met quickly and efficiently. <br/>I use SQL skills for database analysis and problem-solving. <br/>I provide support to end-users to resolve system issues. This involves troubleshooting technical issues, explaining system functionalities, and ensuring users can effectively use the platform. <br/>I work closely with the development team to identify flaws and optimize the system, providing feedback to improve system quality and efficiency. <br/>I have experience in dealing with integrations and APIs.",
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    updateContent(lang);
}

function updateContent(lang) {
    document.getElementById("nav-about").innerHTML = data[lang].navAbout
    document.getElementById("nav-whatIdo").innerHTML = data[lang].navWhatIdo
    document.getElementById("nav-contact").innerHTML = data[lang].navContact
    document.getElementById("status").innerHTML = data[lang].status
    document.getElementById("title1").innerText = data[lang].title;
    document.getElementById("subtitle-1").innerHTML = data[lang].subtitle1
    document.getElementById("button-talk").innerHTML = data[lang].buttonTalk
    document.getElementById("whatIdo").innerHTML = data[lang].whatIdo
    document.getElementById("title2").innerHTML = data[lang].title2
    document.getElementById("project1").innerHTML = data[lang].project1
    document.getElementById("project2").innerHTML = data[lang].project2
    document.getElementById("project3").innerHTML = data[lang].project3
    document.getElementsByClassName("button-project")[0].innerHTML = data[lang].btnProject
    document.getElementsByClassName("button-project")[1].innerHTML = data[lang].btnProject
    document.getElementsByClassName("button-project")[2].innerHTML = data[lang].btnProject
    document.getElementById("aboutMe").innerHTML = data[lang].aboutMe
    document.getElementById("title3").innerHTML = data[lang].title3
    document.getElementById("text-aboutMe").innerHTML = data[lang].textAboutMe
    document.getElementById("subtitle2").innerHTML = data[lang].subtitle2
    document.getElementById("current-read").innerHTML = data[lang].currentRead
    document.getElementById("experiences").innerHTML = data[lang].experiencies
    document.getElementById("title4").innerHTML = data[lang].title4
    document.getElementById("experience1").innerHTML = data[lang].experience1
    document.getElementById("date-experience1").innerHTML = data[lang].dateExperience1
    document.getElementById("descriptionExperience1").innerHTML = data[lang].descriptionExperience1

}

changeLanguage('pt');