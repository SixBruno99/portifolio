import { HStack, IconButton } from "@chakra-ui/react";

// Icons
import { RiGithubFill } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";

export const SocialMedias = () => {
  return (
    <HStack py="1rem" gap="1rem">
      <IconButton
        aria-label="github-ib"
        variant="none"
        color="white"
        cursor="pointer"
        _hover={{
          transform: "scale(1.5)",
          transition: "transform 0.2s ease-in-out",
          color: "#9D1BF2",
        }}
        onClick={() => window.open("https://github.com/SixBruno99", "_blank")}
      >
        <RiGithubFill size={32} />
      </IconButton>
      <IconButton
        aria-label="linkedin-ib"
        variant="none"
        color="white"
        cursor="pointer"
        _hover={{
          transform: "scale(1.5)",
          transition: "transform 0.2s ease-in-out",
          color: "#0077B5",
        }}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/bruno-henrique-ferreira-marinho-cec%C3%ADlio-811858222/",
            "_blank"
          )
        }
      >
        <RiLinkedinBoxFill size={32} />
      </IconButton>
      <IconButton
        aria-label="whatsapp-ib"
        variant="none"
        color="white"
        cursor="pointer"
        _hover={{
          transform: "scale(1.5)",
          transition: "transform 0.2s ease-in-out",
          color: "#25D366",
        }}
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send/?phone=5561981030795&text&type=phone_number&app_absent=0",
            "_blank"
          )
        }
      >
        <RiWhatsappLine size={32} />
      </IconButton>
    </HStack>
  );
};
