import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { IProjects } from "../../types/projects/interface";

export const Projects = (project: IProjects) => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan764] = useMediaQuery("(min-width: 764px)");
  const [isLargerThan420] = useMediaQuery("(min-width: 420px)");
  const [isHovered, setIsHovered] = useState(false);

  function handleNavigate(navigator: string | undefined) {
    if (!navigator) return;
    window.open(`${navigator}`, "_blank");
  }

  return (
    <Flex
      maxHeight={isLargerThan764 ? "732px" : "564px"}
      width={
        isLargerThan1024
          ? "534px"
          : isLargerThan764
          ? "464px"
          : isLargerThan420
          ? "376px"
          : "350px"
      }
      marginY={isLargerThan764 ? 16 : 8}
      marginX="auto"
      borderRadius="24px"
      flexDirection="column"
    >
      <Box
        borderTopRadius="24px"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundPosition: isHovered ? "0 100%" : "0 0",
          transition: `background-position ${project.scrollTime} ease`,
          backgroundSize: isLargerThan1024
            ? "534px auto"
            : isLargerThan764
            ? "464px auto"
            : isLargerThan420
            ? "376px auto"
            : "100% auto",
          height: isLargerThan1024
            ? "440px"
            : isLargerThan420
            ? "384px"
            : "300px",
        }}
      ></Box>
      <Box padding={6} backgroundColor="#252933" borderBottomRadius="24px">
        <Flex flexDirection="column" width="full" gap={isLargerThan764 ? 4 : 2}>
          <Text color="white" fontSize="1rem" opacity="0.5">
            {project.technologies}
          </Text>
          <Heading
            color="white"
            fontSize={isLargerThan1024 ? "2rem" : "1.5rem"}
          >
            {project.title}
          </Heading>
          <Text color="white" fontSize={isLargerThan1024 ? "1.25rem" : "1rem"}>
            {project.description}
            {project.collaborator && (
              <Link
                href={project.collaborator.instagram}
                fontWeight="bold"
                isExternal
              >
                {project.collaborator.name}
              </Link>
            )}
          </Text>
        </Flex>
        <Flex
          width="full"
          marginY={isLargerThan764 ? 10 : 6}
          gap={4}
          justifyContent="center"
        >
          {project.link && (
            <Button
              width={isLargerThan1024 ? "120px" : "100px"}
              fontSize={isLargerThan1024 ? "1rem" : "0.75rem"}
              onClick={() => {
                handleNavigate(project.link);
              }}
            >
              Vizualizar
            </Button>
          )}
          {project.repositoryUrl && (
            <Button
              width={isLargerThan1024 ? "120px" : "100px"}
              fontSize={isLargerThan1024 ? "1rem" : "0.75rem"}
              onClick={() => {
                handleNavigate(project.repositoryUrl);
              }}
            >
              Repositório
            </Button>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};
