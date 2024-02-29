import { Flex, Image, Text } from "@chakra-ui/react";

// Logo file import
import Logo from "/src/assets/favicon-header.ico";

// Libraries
import { Link } from "react-scroll";

export function Header() {
  return (
    <Flex backgroundColor="#232D3F" justifyContent="center">
      <Flex
        width="7xl"
        paddingY={6}
        paddingX={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src={Logo} />
        <Flex
          gap={6}
          paddingY={4}
          paddingX={8}
          bgGradient="linear-gradient(to right, #232D3F, #3A506B, #3A506B, #3A506B, #3A506B, #232D3F)"
          rounded="lg"
          fontSize="18px"
        >
          <Link
            to="footer"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={0}
          >
            <Text
              _hover={{ color: "#3DD6BB" }}
              fontWeight="bold"
              color="white"
              cursor="pointer"
            >
              Home
            </Text>
          </Link>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={0}
          >
            <Text
              _hover={{ color: "#3DD6BB" }}
              fontWeight="bold"
              color="white"
              cursor="pointer"
            >
              Projetos
            </Text>
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={0}
          >
            <Text
              _hover={{ color: "#3DD6BB" }}
              fontWeight="bold"
              color="white"
              cursor="pointer"
            >
              Sobre
            </Text>
          </Link>
          <Link
            to="contacts"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={0}
          >
            <Text
              _hover={{ color: "#3DD6BB" }}
              fontWeight="bold"
              color="white"
              cursor="pointer"
            >
              Contato
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
