import { chakra, shouldForwardProp, Image, useMediaQuery } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import Foto from "../../assets/Images/foto.jpg";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const ImageEffect = () => {
  const [isLargerThan556] = useMediaQuery('(min-width: 556px)')

  return (
    <ChakraBox
      height="400"
      width={isLargerThan556 ? "300" : "225"}
      overflow="hidden"
      animate={{
        y: [3, -3, 3],
        x: [-3, 3, -3],
        borderRadius: ["70% 30% 70% 30% / 45% 55% 45% 55%"],
      }}
      // @ts-expect-error no problem in operation, although type error appears.
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <Image src={Foto} width="300" height="400" />
    </ChakraBox>
  );
};
