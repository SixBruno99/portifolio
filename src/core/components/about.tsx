import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";

// Images imports
import Tech from "../../assets/Images/footer.jpg";

export const About = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const isBeforeBirthday = currentDate < new Date(currentYear, 4, 23);

  const age = isBeforeBirthday ? currentYear - 2004 : currentYear - 2003;

  return (
    <Flex
      marginX={isLargerThan1024 ? "56px" : "36px"}
      height={isLargerThan1024 ? "476px" : "full"}
    >
      {isLargerThan1024 && (
        <Image
          alt="tech"
          src={Tech}
          height="476px"
          objectFit="scale-down"
          borderLeftRadius="24px"
        />
      )}
      <Box
        borderRadius={isLargerThan1024 ? "" : "24px"}
        borderRightRadius="24px"
        backgroundColor="#252933"
      >
        <Box
          width="176px"
          marginY="24px"
          marginX={isLargerThan1024 ? "48px" : "auto"}
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
        <Box
          minWidth="300px"
          maxWidth={isLargerThan1024 ? "full" : "768px"}
          margin={isLargerThan1024 ? "48px" : "24px"}
        >
          <Text
            textAlign="center"
            color="white"
            fontSize={isLargerThan1024 ? "1.25rem" : "1rem"}
          >
            Olá! Me chamo Bruno, tenho {age} anos e atuo como Desenvolvedor
            Frontend. Tenho experiência sólida em React.js, Next.js JavaScript,
            TypeScript, Flutter, Chakra-UI, Sass, entre outras tecnologias
            relevantes. Atualmente, estou cursando Ciências da Computação no
            CEUB.
          </Text>
          <Text
            textAlign="center"
            color="white"
            fontSize={isLargerThan1024 ? "1.25rem" : "1rem"}
            marginTop={isLargerThan1024 ? "48px" : "24px"}
          >
            Estou em busca de oportunidades que me permitam aprimorar minhas
            habilidades técnicas e expandir meu conhecimento por meio de
            projetos desafiadores. Estou entusiasmado em contribuir e crescer em
            um ambiente dinâmico e inovador.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
