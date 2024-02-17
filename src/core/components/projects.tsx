import { useState } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

interface IProjects {
  title?: string;
  projectImage?: string;
  projectLink?: string;
  description?: string;
  technologies?: string;
  scrollTime: string;
}

export const Projects = ({
  title,
  projectImage,
  projectLink,
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
        width="400px"
        overflow="hidden"
        position="relative"
        borderTopRadius="50px"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: `url(${projectImage})`,
          backgroundPosition: isHovered ? "0 100%" : "0 0",
          transition: `background-position ${scrollTime} ease`,
          backgroundSize: "400px auto",
          height: "400px",
        }}
      ></Box>
      <Flex flexDirection="column" gap={4} marginX={8} marginY={6}>
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
      <Flex gap={4} marginX={8} marginY={6}>
        <Button
          onClick={() => {
            handleNavigate(projectLink);
          }}
        >
          Vizitar site
        </Button>
        <Button onClick={() => {}}>Repositório</Button>
      </Flex>
    </Flex>
  );
};
