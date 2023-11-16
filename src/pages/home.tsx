import {
  Box,
  Flex,
  Image,
  Text,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

import Foto from "../assets/Images/foto.jpg";
import { SocialMedias } from "../core/components/social";

const imageChange = keyframes`
  0% {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
  }
  100% {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }

`;

const textInitialization = keyframes`
  0% {
    margin-top: 50px;
    opacity: 0
  }
  50% {
    opacity: 0.5
  }
  100% {
    margin-top: 0
    opacity: 1.0
  }
`;

export function Home() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const imageAnimation = prefersReducedMotion
    ? undefined
    : `${imageChange} infinite  5s ease-in`;

  const textAnimation = prefersReducedMotion
    ? undefined
    : `${textInitialization} 1  2.5s ease-in`;

  return (
    <Flex
      minHeight="calc(100vh - 112px)"
      width="7xl"
      marginX="auto"
      paddingInline="5"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Flex width="full" justifyContent="space-evenly">
        <Box>
          <Text fontSize="22px" fontWeight="bold" color="#F5F5F5" animation={textAnimation}>
            Bruno Henrique
          </Text>
          <Text fontSize="32px" fontWeight="bold" color="#F5F5F5" animation={textAnimation}>
            Front End Developer
          </Text>
          <Text marginTop={4} color="#F5F5F5" animation={textAnimation}>
            Criando Interfaces Intuitivas e Experiências Incríveis no
            <br />
            Desenvolvimento Web de Alto Nível.
          </Text>
          <Flex>
            <SocialMedias />
          </Flex>
        </Box>
        <Box>
          <Image animation={imageAnimation} src={Foto} width="300" h="400" />
        </Box>
      </Flex>
      {/* <iframe src="https://brunohenrique.netlify.app/" width="400" height="400">
        <p>CV</p>
      </iframe> */}
    </Flex>
  );
}
