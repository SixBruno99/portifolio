import { Flex, GridItem, Icon, IconButton, Text } from "@chakra-ui/react";
import { ISkills } from "../../types/skills/interface";

export const Skills = (skill: ISkills) => {
  return (
    <GridItem margin="auto" height="164px" width="164px">
      <Flex
        height="full"
        width="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="Center"
        gap={6}
      >
        <Text textColor="white" fontWeight="bold" fontSize="20px">
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
