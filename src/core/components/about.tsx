import { Box, Flex, Image, Text } from "@chakra-ui/react";

// Images imports
import Tech from "../../assets/Images/tech.jpg";

export const About = () => {
  const year = new Date().getFullYear();
  return (
    <Flex marginX="56px" height="476px">
      <Image
        alt="tech"
        src={Tech}
        height="476px"
        objectFit="scale-down"
        borderLeftRadius="24px"
      />
      <Box borderRightRadius="24px" backgroundColor="#252933">
        <Box
          width="176px"
          margin="48px"
          paddingX="24px"
          paddingY="16px"
          borderRadius="12px"
          backgroundColor="#222F40"
        >
          <Text
            color="white"
            fontSize="1.25rem"
            textAlign="center"
            fontWeight="bold"
          >
            Brasília - DF
          </Text>
        </Box>
        <Text color="white" fontSize="1.25rem" margin="48px">
          Olá, meu nome é Bruno tenho {year - 2003} anos e sou Desenvolvedor
          Frontend com experiência em React.js, JavaScript, TypeScript, React
          Native, Flutter, Chakra-UI, e outras tecnologias Sou estudante de
          Ciências da Computação e desenvolvedor frontend.
        </Text>
        <Text color="white" fontSize="1.25rem" margin="48px">
          Estou em busca de oportunidades para melhorar minhas habilidades
          técnicas e desenvolver meu conhecimento participando de projetos
          desafiadores.
        </Text>
      </Box>
    </Flex>
  );
};
