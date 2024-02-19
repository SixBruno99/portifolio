import { useState } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

interface IProjects {
  title?: string;
  projectImage?: string;
  projectLink?: string;
  repositoryLink?: string;
  description?: string;
  technologies?: string;
  scrollTime: string;
}

export const Projects = ({
  title,
  projectImage,
  projectLink,
  repositoryLink,
  description,
  technologies,
  scrollTime,
}: IProjects) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleNavigate(navigator: string | undefined) {
    if (!navigator) return;
    window.open(`${navigator}`, "_blank");
  }

  return (
    <Flex
      my="2rem"
      gap="1rem"
      flexDirection="column"
      backgroundColor="#252933"
      borderRadius="50px"
    >
      <Box
        width="500px"
        overflow="hidden"
        position="relative"
        borderTopRadius="50px"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: `url(${projectImage})`,
          backgroundPosition: isHovered ? "0 100%" : "0 0",
          transition: `background-position ${scrollTime} ease`,
          backgroundSize: "500px auto",
          height: "400px",
        }}
      ></Box>
      <Flex flexDirection="column" gap={4} marginX={8} marginTop={6}>
        <Text color="white" fontSize="1rem" opacity="0.5">
          {technologies}
        </Text>
        <Heading color="white" fontSize="2rem">
          {title}
        </Heading>
        <Text color="white" fontSize="1.25rem">
          {description}
        </Text>
      </Flex>
      <Flex marginY={10} marginX={8} gap={4} justifyContent="center">
        {projectLink && (
          <Button
            width="120px"
            onClick={() => {
              handleNavigate(projectLink);
            }}
          >
            Vizualizar
          </Button>
        )}
        {repositoryLink && (
          <Button
            width="120px"
            onClick={() => {
              handleNavigate(repositoryLink);
            }}
          >
            Repositório
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
