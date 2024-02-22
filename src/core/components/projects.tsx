import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IProjects } from "../../types/projects/interface";

export const Projects = (project: IProjects) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleNavigate(navigator: string | undefined) {
    if (!navigator) return;
    window.open(`${navigator}`, "_blank");
  }

  return (
    <Flex
      my="4rem"
      width="500px"
      flexDirection="column"
      backgroundColor="#252933"
      borderRadius="50px"
      marginX="auto"
    >
      <Box
        width="500px"
        overflow="hidden"
        position="relative"
        borderTopRadius="50px"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundPosition: isHovered ? "0 100%" : "0 0",
          transition: `background-position ${project.scrollTime} ease`,
          backgroundSize: "500px auto",
          height: "400px",
        }}
      ></Box>
      <Flex flexDirection="column" gap={4} marginX={8} marginTop={6}>
        <Text color="white" fontSize="1rem" opacity="0.5">
          {project.technologies}
        </Text>
        <Heading color="white" fontSize="2rem">
          {project.title}
        </Heading>
        <Text color="white" fontSize="1.25rem">
          {project.description}
        </Text>
      </Flex>
      <Flex marginY={10} marginX={8} gap={4} justifyContent="center">
        {project.link && (
          <Button
            width="120px"
            onClick={() => {
              handleNavigate(project.link);
            }}
          >
            Vizualizar
          </Button>
        )}
        {project.repositoryUrl && (
          <Button
            width="120px"
            onClick={() => {
              handleNavigate(project.repositoryUrl);
            }}
          >
            Repositório
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
