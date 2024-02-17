import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex
      id="footer"
      alignItems="center"
      justifyContent="center"
      width="full"
      height="14"
      backgroundColor="#0B666A"
    >
      <Text
        fontWeight="semibold"
        fontSize={["sm", "xs"]}
        textAlign="center"
        color="white"
      >
        Develop by Bruno Henrique
      </Text>
    </Flex>
  );
}
