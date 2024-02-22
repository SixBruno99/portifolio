import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
  const date = new Date().getFullYear();
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
        Developed by Bruno Henrique © {date}
      </Text>
    </Flex>
  );
}
