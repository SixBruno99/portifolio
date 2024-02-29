import {
  Box,
  Flex,
  Grid,
  HStack,
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
import { Skills } from "../core/components/skills";
import { About } from "../core/components/about";

// Mocks
import {
  FINAL_CONTACTS_PROPS,
  INITIAL_CONTACTS_PROPS,
} from "../mocks/contacts";
import { PROJECTS_PROPS } from "../mocks/projects";
import { SKILLS_PROPS } from "../mocks/skills";

// Images imports
import Foto from "../assets/Images/foto.jpg";

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

  const textAnimation = prefersReducedMotion
    ? `${textInitialization} 1 1.5s ease-in`
    : undefined;

  return (
    <Flex
      minHeight="calc(100vh - 112px)"
      maxWidth="7xl"
      marginY={12}
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
            Criando Interfaces intuitivas para o usuário <br /> com uma
            Experiências incríveis.
          </Text>
          <HStack py="1rem" gap="1rem">
            {INITIAL_CONTACTS_PROPS.map((contact, index) => (
              <SocialMedias
                key={index}
                name={contact.name}
                link={contact.link}
                color={contact.color}
                icon={contact.icon}
              />
            ))}
          </HStack>
        </Box>
        <Box>
          <Image src={Foto} width="300" height="400" />
        </Box>
      </Flex>

      <Heading id="technologies" marginY={12} color="white">
        Tecnologias
      </Heading>

      <Grid width="full" templateColumns="repeat(4, 1fr)" gap={4}>
        {SKILLS_PROPS.map((skill, index) => (
          <Skills
            key={index}
            id={skill.id}
            title={skill.title}
            icon={skill.icon}
          />
        ))}
      </Grid>

      <Heading id="projects" marginY={12} color="white">
        Projetos desenvolvidos
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
        Um pouco mais sobre mim
      </Heading>

      <About />

      <Heading id="contacts" marginTop={16} color="white" textAlign="center">
        Vamos trabalhar juntos?
        <br /> Entre em contato!
      </Heading>

      <HStack py="1rem" gap="1rem">
        {FINAL_CONTACTS_PROPS.map((contact, index) => (
          <SocialMedias
            key={index}
            name={contact.name}
            link={contact.link}
            color={contact.color}
            icon={contact.icon}
          />
        ))}
      </HStack>
    </Flex>
  );
}
