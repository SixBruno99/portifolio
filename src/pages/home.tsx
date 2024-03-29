import {
  Box,
  Flex,
  Grid,
  HStack,
  Heading,
  Text,
  keyframes,
  useMediaQuery,
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
import { AnimatedText } from "../core/components/animated-text";
import { SocialMedias } from "../core/components/social-medias";
import { ImageEffect } from "../core/components/image-effect";
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
  const [isLargerThan1296] = useMediaQuery("(min-width: 1296px)");
  const prefersReducedMotion = usePrefersReducedMotion();

  const textAnimation = prefersReducedMotion
    ? `${textInitialization} 1 1.5s ease-in`
    : undefined;

  return (
    <Flex
      marginY={12}
      maxWidth={isLargerThan1296 ? "7xl" : "full"}
      marginX="auto"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      minHeight="calc(100vh - 112px)"
    >
      <Flex
        width={isLargerThan1296 ? "full" : ""}
        justifyContent="space-evenly"
        flexDirection={isLargerThan1296 ? "row" : "column"}
      >
        <Box marginY="auto">
          {/* <Text
            fontSize="22px"
            fontWeight="bold"
            color="#F5F5F5"
            animation={textAnimation}
          >
            Bruno Henrique
          </Text> */}
          <AnimatedText text="  Bruno Henrique" delay={100} />
          <Text
            fontSize="32px"
            fontWeight="bold"
            color="#F5F5F5"
            animation={textAnimation}
          >
            Front End Developer
          </Text>
          {/* <AnimatedText text="  Front End Developer" delay={100} /> */}
          <Text marginTop={4} color="#F5F5F5" animation={textAnimation}>
            Criando Interfaces intuitivas para o usuário <br /> Proporcionando
            experiências incríveis.
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
        <ImageEffect />
      </Flex>

      <Heading
        id="technologies"
        marginY={isLargerThan1296 ? 12 : 8}
        color="white"
        fontStyle="italic"
      >
        Tecnologias
      </Heading>

      <Grid
        width="full"
        templateColumns={isLargerThan1296 ? "repeat(4, 1fr)" : "repeat(2, 1fr)"}
        gap={4}
      >
        {SKILLS_PROPS.map((skill, index) => (
          <Skills
            key={index}
            id={skill.id}
            title={skill.title}
            icon={skill.icon}
          />
        ))}
      </Grid>

      <Heading
        id="projects"
        marginY={isLargerThan1296 ? 12 : 8}
        color="white"
        fontStyle="italic"
      >
        Projetos desenvolvidos
      </Heading>

      <Flex maxWidth="full" minWidth={isLargerThan1296 ? "7xl" : "0"}>
        <Swiper
          slidesPerView={isLargerThan1296 ? 2 : 1}
          grabCursor={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={isLargerThan1296 ? true : false}
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

      <Heading
        id="about"
        marginY={isLargerThan1296 ? 12 : 8}
        color="white"
        fontStyle="italic"
        fontSize={isLargerThan1296 ? "2.5rem" : "1.75rem"}
      >
        Um pouco mais sobre mim
      </Heading>

      <About />

      <Heading
        id="contacts"
        marginTop={16}
        color="white"
        textAlign="center"
        fontStyle="italic"
      >
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
