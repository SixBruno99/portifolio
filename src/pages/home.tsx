import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

import { SocialMedias } from "../core/components/social";
import { Projects } from "../core/components/projects";
import { IProjects } from "../types/projects/interface";

// Images imports
import Foto from "../assets/Images/foto.jpg";
import Curriculo from "../assets/Images/curriculo.png";
import Manual from "../assets/Images/manual-leticia.png";

const imageChange = keyframes`
  0% {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
  }
  100% {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }

`;

const textInitialization = keyframes`
  0% {
    margin-top: 50px;
    opacity: 0.1
  }
  50% {
    opacity: 0.5
  }
  100% {
    margin-top: 0
    opacity: 1.0
  }
`;

export function Home() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const imageAnimation = prefersReducedMotion
    ? `${imageChange} infinite 3s ease-in`
    : undefined;

  const textAnimation = prefersReducedMotion
    ? `${textInitialization} 1 1.5s ease-in`
    : undefined;

  const PROJECTS_PROPS: Array<IProjects> = [
    {
      projectImage: Curriculo,
      projectLink: "https://brunohenrique.netlify.app/",
      repositoryLink: "https://github.com/SixBruno99/Curriculo",
      title: "Currículo programado",
      description: "Oi",
      technologies: "React",
      scrollTime: "1s",
    },
    {
      projectImage: Manual,
      projectLink: "http://localhost:3000/",
      repositoryLink: "https://github.com/SixBruno99/landing-page",
      title: "Landing Page",
      description: "Oi",
      technologies: "React",
      scrollTime: "5s",
    },
    {
      projectImage: Curriculo,
      projectLink: "https://brunohenrique.netlify.app/",
      repositoryLink: "https://github.com/SixBruno99/Curriculo",
      title: "Currículo programado",
      description: "Oi",
      technologies: "React",
      scrollTime: "1s",
    },
    {
      projectImage: Curriculo,
      projectLink: "https://brunohenrique.netlify.app/",
      repositoryLink: "https://github.com/SixBruno99/Curriculo",
      title: "Currículo programado",
      description: "Oi",
      technologies: "React",
      scrollTime: "1s",
    },
    {
      projectImage: Curriculo,
      projectLink: "https://brunohenrique.netlify.app/",
      title: "Currículo programado",
      technologies: "React",
      scrollTime: "1s",
    },
    {
      projectImage: Curriculo,
      title: "Currículo programado",
      scrollTime: "1s",
    },
  ];

  return (
    <Flex
      minHeight="calc(100vh - 112px)"
      maxWidth="7xl"
      marginY={8}
      marginX="auto"
      paddingInline="5"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <a href="#footer">nav</a>
      <Flex width="full" justifyContent="space-evenly">
        <Box marginY="auto">
          <Text
            fontSize="22px"
            fontWeight="bold"
            color="#F5F5F5"
            animation={textAnimation}
          >
            Bruno Henrique
          </Text>
          <Text
            fontSize="32px"
            fontWeight="bold"
            color="#F5F5F5"
            animation={textAnimation}
          >
            Front End Developer
          </Text>
          <Text marginTop={4} color="#F5F5F5" animation={textAnimation}>
            Criando Interfaces Intuitivas e Experiências Incríveis no
            <br />
            Desenvolvimento Web de Alto Nível.
          </Text>
          <Flex>
            <SocialMedias />
          </Flex>
        </Box>
        <Box>
          <Image animation={imageAnimation} src={Foto} width="300" h="400" />
        </Box>
      </Flex>

      <Heading marginY={12} color="white">
        Projects
      </Heading>

      <Flex maxWidth="full" minWidth="7xl" overflowX="scroll" gap={5}>
        {PROJECTS_PROPS.map((project, index) => (
          <Projects
            key={index}
            title={project.title}
            projectImage={project.projectImage}
            projectLink={project.projectLink}
            repositoryLink={project.repositoryLink}
            description={project.description}
            technologies={project.technologies}
            scrollTime={project.scrollTime}
          />
        ))}
      </Flex>
    </Flex>
  );
}
