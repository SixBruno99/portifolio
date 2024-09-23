import { IProjects } from "../types/projects/interface";

// Images imports
import Curriculo from "../assets/Images/curriculo.png";
import Manual from "../assets/Images/manual-leticia.png";
import Timer from "../assets/Images/time-counter.png";

export const PROJECTS_PROPS: IProjects[] = [
  {
    id: "1",
    image: Curriculo,
    link: "https://brunohenrique.netlify.app/",
    repositoryUrl: "https://github.com/SixBruno99/Curriculo",
    title: "Currículo programado",
    description:
      "Projeto a fim de por em prática os conhecimentos adquiridos durante minha carreira",
    technologies: "React | Chakra-ui",
    scrollTime: "1s",
  },
  {
    id: "2",
    image: Timer,
    link: "https://dudagaymer.netlify.app/",
    repositoryUrl: "https://github.com/SixBruno99/maria-eduarda",
    title: "Temporizador",
    description:
      "Projeto que fiz para fortalecer os conhecimentos adquiridos durante meu estágio.",
    technologies: "React | Sass",
    scrollTime: "1s",
  },
  {
    id: "3",
    image: Manual,
    // link: "http://localhost:3000/",
    repositoryUrl: "https://github.com/SixBruno99/landing-page",
    title: "Landing Page",
    description: "Landing-page feito em parceria com a desenvolvedora ",
    collaborator: {
      name: "@lletcode",
      instagram: "https://www.instagram.com/lletcode/",
    },
    technologies: "React | Chakra-ui",
    scrollTime: "5s",
  },
  {
    id: "4",
    image: Curriculo,
    link: "https://brunohenrique.netlify.app/",
    repositoryUrl: "https://github.com/SixBruno99/Curriculo",
    title: "Currículo programado",
    description:
      "Projeto a fim de por em prática os conhecimentos adquiridos durante minha carreira",
    technologies: "React",
    scrollTime: "1s",
  },

  {
    id: "5",
    image: Timer,
    link: "https://dudagaymer.netlify.app/",
    repositoryUrl: "https://github.com/SixBruno99/maria-eduarda",
    title: "Temporizador",
    description:
      "Projeto que fiz para fortalecer os conhecimentos adquiridos durante meu estágio.",
    technologies: "React | Sass",
    scrollTime: "1s",
  },
  {
    id: "6",
    image: Manual,
    // link: "http://localhost:3000/",
    repositoryUrl: "https://github.com/SixBruno99/landing-page",
    title: "Landing Page",
    description: "Landing-page feito em parceria com a desenvolvedora ",
    collaborator: {
      name: "@lletcode",
      instagram: "https://www.instagram.com/lletcode/",
    },
    technologies: "React | Chakra-ui",
    scrollTime: "5s",
  },
];
