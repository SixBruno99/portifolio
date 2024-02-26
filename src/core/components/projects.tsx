import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
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
      height="732px"
      width="534px"
      marginY="4rem"
      marginX="auto"
      borderRadius="50px"
      flexDirection="column"
    >
      <Box
        borderTopRadius="50px"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundPosition: isHovered ? "0 100%" : "0 0",
          transition: `background-position ${project.scrollTime} ease`,
          backgroundSize: "534px auto",
          height: "440px",
        }}
      >
        <Box
          padding={6}
          marginTop="440px"
          backgroundColor="#252933"
          borderBottomRadius="50px"
        >
          <Flex flexDirection="column" width="full" gap={4}>
            <Text color="white" fontSize="1rem" opacity="0.5">
              {project.technologies}
            </Text>
            <Heading color="white" fontSize="2rem">
              {project.title}
            </Heading>
            <Text color="white" fontSize="1.25rem">
              {project.description}
              {project.collaborator && (
                <Link href={project.collaborator.instagram} isExternal>
                  {project.collaborator.name}
                </Link>
              )}
            </Text>
          </Flex>
          <Flex width="full" marginY={10} gap={4} justifyContent="center">
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
        </Box>
      </Box>
    </Flex>
  );
};
