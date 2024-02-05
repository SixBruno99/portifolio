import { HStack } from "@chakra-ui/react";

interface IProjects {
  projectLink: string;
  title: string;
}

export const Projects = ({ projectLink, title }: IProjects) => {
  return (
    <HStack py="1rem" gap="1rem">
      <iframe src={projectLink} width="400" height="400">
        <p>{title}</p>
      </iframe>
    </HStack>
  );
};
