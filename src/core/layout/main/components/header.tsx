import { Flex, Image, Text, chakra, shouldForwardProp, useMediaQuery } from "@chakra-ui/react";

// Logo file import
import Logo from "/src/assets/favicon-header.ico";

// Libraries
import { Link } from "react-scroll";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export function Header() {
  const [isLargerThan556] = useMediaQuery('(min-width: 556px)')

  return (
    <Flex backgroundColor="#232D3F" justifyContent="center">
      <Flex
        width="7xl"
        paddingY={isLargerThan556 ? 6 : 2}
        paddingX={isLargerThan556 ? 16 : 12}
        alignItems="center"
        justifyContent="space-between"
      >
        <ChakraBox
          overflow="hidden"
          animate={{
            y: [2, -2, 2],
            x: [2, -2, 2],
            borderRadius: ["70% 30% 70% 30% / 45% 55% 45% 55%"],
          }}
          // @ts-expect-error no problem in operation, although type error appears.
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Image src={Logo} />
        </ChakraBox>
        <Flex
          gap={isLargerThan556 ? 6 : 4}
          paddingY={isLargerThan556 ? 4 : 2}
          paddingX={isLargerThan556 ? 8 : 4}
          bgGradient="linear-gradient(to right, #232D3F, #384C66, #384C66, #384C66, #384C66, #232D3F)"
          rounded="lg"
          fontSize="18px"
        >
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={0}
          >
            <Text
              _hover={{ color: "#3DD6BB" }}
              fontSize={isLargerThan556 ? "1rem" : "0.75rem"}
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
              fontSize={isLargerThan556 ? "1rem" : "0.75rem"}
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
              fontSize={isLargerThan556 ? "1rem" : "0.75rem"}
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
