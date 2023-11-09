import { Flex, Text } from "@chakra-ui/react";

export function Home() {
  return (
    <Flex
      width="full"
      height="14"
      paddingInline="5"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
    >
      <Text fontSize="18px" fontWeight="bold" color="#181818">
        HOME
      </Text>
    </Flex>
  );
}
