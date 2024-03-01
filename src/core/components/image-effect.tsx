import { chakra, shouldForwardProp, Image } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import Foto from "../../assets/Images/foto.jpg";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const ImageEffect = () => {
  return (
    <ChakraBox
      height="400"
      width="300"
      overflow="hidden"
      animate={{
        y: [5, -5, 5],
        x: [-5, 5, -5],
        borderRadius: ["70% 30% 70% 30% / 45% 55% 45% 55%"],
      }}
      // @ts-expect-error no problem in operation, although type error appears.
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <Image src={Foto} width="300" height="400" />
    </ChakraBox>
  );
};
