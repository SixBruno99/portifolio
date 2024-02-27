import { Flex, Image, Text } from "@chakra-ui/react";
import Logo from "/src/assets/favicon-header.ico";

// Libraries
import { Link } from "react-scroll";

export function Header() {
  return (
    <Flex backgroundColor="#232D3F" justifyContent="center" height="14">
      <Flex width="7xl" justifyContent="space-between" alignItems="center">
        <Image src={Logo} />
        <Flex gap={4}>
          <Link
            to="footer"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={0}
          >
            <Text fontSize="18px" fontWeight="bold" color="white">
              Home
            </Text>
          </Link>
          <Link
            to="technologies"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={0}
          >
            <Text fontSize="18px" fontWeight="bold" color="white">
              Tecnologias
            </Text>
          </Link>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={0}
          >
            <Text fontSize="18px" fontWeight="bold" color="white">
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
            <Text fontSize="18px" fontWeight="bold" color="white">
              Sobre
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
