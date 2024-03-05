import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Flex
      id="footer"
      alignItems="center"
      justifyContent="center"
      width="full"
      height="14"
      backgroundColor="#3A506B"
    >
      <Text
        fontWeight="semibold"
        fontSize={["sm", "xs"]}
        textAlign="center"
        color="white"
      >
        Developed by Bruno Henrique © {year}
      </Text>
    </Flex>
  );
}
