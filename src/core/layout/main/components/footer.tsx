import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex alignItems="center" justifyContent="center" width="full" height="14">
      <Text fontWeight="semibold" fontSize={["sm", "xs"]} textAlign="center">
        Develop by Bruno Henrique
      </Text>
    </Flex>
  );
}
