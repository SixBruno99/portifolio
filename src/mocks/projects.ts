import { IProjects } from "../types/projects/interface";

// Images imports
import Curriculo from "../assets/Images/projects/curriculo.png";
import Manual from "../assets/Images/projects/manual-leticia.png";
import Timer from "../assets/Images/projects/time-counter.png";

export const PROJECTS_PROPS: IProjects[] = [
  {
    id: "1",
    image: Curriculo,
    link: "https://brunohenrique.netlify.app/",
    repositoryUrl: "https://github.com/SixBruno99/Curriculo",
    title: "Currículo programado",
    description:
      "Projeto realizado para reforçar meus cinhecimentos sobre construção de interface e habilidades com o git",
    technologies: "React | JavaScript | Chakra-ui",
    scrollTime: "1s",
  },
  {
    id: "2",
    image: Timer,
    link: "https://dudagaymer.netlify.app/",
    repositoryUrl: "https://github.com/SixBruno99/maria-eduarda",
    title: "Temporizador",
    description:
      "Projeto realizado a fim de me desafiar e testar novas tecnologias dentro do mercado como o Sass",
    technologies: "React | TypeScript | Sass",
    scrollTime: "1s",
  },
  {
    id: "3",
    image: Manual,
    // link: "http://localhost:3000/",
    repositoryUrl: "https://github.com/SixBruno99/landing-page",
    title: "Landing Page",
    description: "Landing-page para praticar habilidades de construção de interface feito em parceria com a dev ",
    collaborator: {
      name: "@lletcode",
      instagram: "https://www.instagram.com/lletcode/",
    },
    technologies: "React | JavaScript | Chakra-ui",
    scrollTime: "5s",
  },
  {
    id: "4",
    image: Curriculo,
    link: "https://brunohenrique.netlify.app/",
    repositoryUrl: "https://github.com/SixBruno99/Curriculo",
    title: "Currículo programado",
    description:
      "Projeto realizado para reforçar meus cinhecimentos sobre construção de interface e habilidades com o git",
    technologies: "React | JavaScript | Chakra-ui",
    scrollTime: "1s",
  },
  {
    id: "5",
    image: Timer,
    link: "https://dudagaymer.netlify.app/",
    repositoryUrl: "https://github.com/SixBruno99/maria-eduarda",
    title: "Temporizador",
    description:
      "Projeto realizado a fim de me desafiar e testar novas tecnologias dentro do mercado como o Sass",
    technologies: "React | TypeScript | Sass",
    scrollTime: "1s",
  },
  {
    id: "6",
    image: Manual,
    // link: "http://localhost:3000/",
    repositoryUrl: "https://github.com/SixBruno99/landing-page",
    title: "Landing Page",
    description: "Landing-page para praticar habilidades de construção de interface feito em parceria com a dev ",
    collaborator: {
      name: "@lletcode",
      instagram: "https://www.instagram.com/lletcode/",
    },
    technologies: "React | JavaScript | Chakra-ui",
    scrollTime: "5s",
  },
];
