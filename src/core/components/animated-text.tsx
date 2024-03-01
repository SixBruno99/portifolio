import { Flex, Text, keyframes } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const blinkAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

interface IText {
  text: string;
  delay: number;
}

export const AnimatedText = ({ text, delay }: IText) => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setTypedText((prevText) => prevText + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length - 1) {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay]);

  useEffect(() => {
    const cursorIntervalId = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    return () => clearInterval(cursorIntervalId);
  }, []);

  return (
    <Flex>
      <Text
        fontSize="22px"
        fontWeight="bold"
        textAlign="center"
        color="white"
        position="relative"
      >
        {typedText}
        <Text
          as="span"
          display="inline-block"
          verticalAlign="bottom"
          opacity={showCursor ? 1 : 0}
          animation={`${blinkAnimation} 1s infinite`}
        >
          _
        </Text>
      </Text>
    </Flex>
  );
};
