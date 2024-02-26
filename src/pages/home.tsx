import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../style/swiper.css";

// Libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper/modules";

// Components
import { SocialMedias } from "../core/components/social";
import { Projects } from "../core/components/projects";
import { IProjects } from "../types/projects/interface";

// Images imports
import Foto from "../assets/Images/foto.jpg";
import Curriculo from "../assets/Images/curriculo.png";
import Manual from "../assets/Images/manual-leticia.png";
import { About } from "../core/components/about";

// const imageChange = keyframes`
//   0% {
//     clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
//   }
//   50% {
//     clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
//   }
//   100% {
//     clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
//   }

// `;

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

  // const imageAnimation = prefersReducedMotion
  //   ? `${imageChange} infinite 3s ease-in`
  //   : undefined;

  const textAnimation = prefersReducedMotion
    ? `${textInitialization} 1 1.5s ease-in`
    : undefined;

  const PROJECTS_PROPS: IProjects[] = [
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
      image: Manual,
      link: "http://localhost:3000/",
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
      id: "3",
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
      image: Curriculo,
      link: "https://brunohenrique.netlify.app/",
      title: "Currículo programado",
      technologies: "React",
      scrollTime: "1s",
    },
    {
      id: "6",
      image: Curriculo,
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
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
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
          <Image
            src={Foto}
            width="300"
            height="400"
            // animation={imageAnimation}
          />
        </Box>
      </Flex>

      <Heading id="projects" marginY={12} color="white">
        Projects
      </Heading>

      <Flex maxWidth="full" minWidth="7xl">
        <Swiper
          slidesPerView={2}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation
          modules={[Pagination, Keyboard, Navigation, Autoplay]}
        >
          {PROJECTS_PROPS.map((project, index) => (
            <SwiperSlide data-hash={`slide${index}`} key={project.id}>
              <Projects
                id={project.id}
                title={project.title}
                image={project.image}
                link={project.link}
                repositoryUrl={project.repositoryUrl}
                description={project.description}
                collaborator={project.collaborator}
                technologies={project.technologies}
                scrollTime={project.scrollTime}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>

      <Heading id="about" marginY={12} color="white">
        Sobre mim
      </Heading>

      <About />
    </Flex>
  );
}
