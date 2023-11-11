import { Box, Flex, Image, Text } from "@chakra-ui/react";

import Foto from "../assets/Images/foto.jpg";
import { SocialMedias } from "../core/components/social";

export function Home() {
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
          <Text fontSize="22px" fontWeight="bold" color="#F5F5F5">
            Bruno Henrique
          </Text>
          <Text fontSize="32px" fontWeight="bold" color="#F5F5F5">
            Front End Developer
          </Text>
          <Text marginTop={4} color="#F5F5F5">
            Criando Interfaces Intuitivas e Experiências Incríveis no
            <br />
            Desenvolvimento Web de Alto Nível.
          </Text>
          <Flex>
            <SocialMedias />
          </Flex>
        </Box>
        <Box>
          <Image src={Foto} width="300" h="400" />
        </Box>
      </Flex>
      {/* <iframe src="https://brunohenrique.netlify.app/" width="400" height="400">
        <p>CV</p>
      </iframe> */}
    </Flex>
  );
}
