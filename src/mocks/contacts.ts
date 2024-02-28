import { IContacts } from "../types/contacts/interface";

// Icons
import {
  RiGithubFill,
  RiWhatsappLine,
  RiLinkedinBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

export const INITIAL_CONTACTS_PROPS: IContacts[] = [
  {
    name: "github",
    link: "https://github.com/SixBruno99",
    color: "#9D1BF2",
    icon: RiGithubFill,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/bruno-henrique-ferreira-marinho-cec%C3%ADlio-811858222/",
    color: "#25D366",
    icon: RiWhatsappLine,
  },
  {
    name: "whatsapp",
    link: "https://api.whatsapp.com/send/?phone=5561981030795&text&type=phone_number&app_absent=0",
    color: "#0077B5",
    icon: RiLinkedinBoxFill,
  },
];

export const FINAL_CONTACTS_PROPS: IContacts[] = [
  {
    name: "github",
    link: "https://github.com/SixBruno99",
    color: "#9D1BF2",
    icon: RiGithubFill,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/bruno-henrique-ferreira-marinho-cec%C3%ADlio-811858222/",
    color: "#0077B5",
    icon: RiWhatsappLine,
  },
  {
    name: "whatsapp",
    link: "https://api.whatsapp.com/send/?phone=5561981030795&text&type=phone_number&app_absent=0",
    color: "#25D366",
    icon: RiLinkedinBoxFill,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/_brunohfc",
    color: "#E63772",
    icon: RiInstagramFill,
  },
];
