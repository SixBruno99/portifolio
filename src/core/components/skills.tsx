import { Flex, GridItem, Icon, IconButton, Text, useMediaQuery } from "@chakra-ui/react";
import { ISkills } from "../../types/skills/interface";

export const Skills = (skill: ISkills) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <GridItem margin="auto" height={isLargerThan768 ? "164px" : "128px"} width={isLargerThan768 ? "164px" : "128px"}>
      <Flex
        height="full"
        width="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="Center"
        gap={6}
      >
        <Text textColor="white" fontWeight="bold" fontSize={isLargerThan768 ? "1.25rem" : "1rem"}>
          {skill.title}
        </Text>
        <IconButton
          aria-label="icons-ib"
          variant="none"
          _hover={{
            transform: "scale(1.2)",
            transition: "transform 0.25s ease-in-out",
          }}
        >
          <Icon color="white" height="64px" width="64px" as={skill.icon} />
        </IconButton>
      </Flex>
    </GridItem>
  );
};
