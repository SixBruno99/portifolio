import { Flex, Image, Text } from "@chakra-ui/react";
import Logo from "/src/assets/favicon-header.ico";

export function Header() {
  return (
    <Flex backgroundColor="#232D3F" justifyContent="center">
      <Flex
        width="7xl"
        justifyContent="space-between"
        height="14"
        alignItems="center"
      >
        <Image src={Logo} />
        <Text fontSize="18px" fontWeight="bold" color="white">
          Home Projetos Sobre
        </Text>
      </Flex>
    </Flex>
  );
}
