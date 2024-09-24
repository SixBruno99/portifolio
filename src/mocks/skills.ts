import { ISkills } from "../types/skills/interface";

// Icons
import { TbBrandNextjs } from "react-icons/tb";
import { SiChakraui, SiGitlab } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoFlutter,
} from "react-icons/bi";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

export const SKILLS_PROPS: ISkills[] = [
  {
    id: "1",
    title: "HTML",
    icon: FaHtml5,
  },
  {
    id: "2",
    title: "CSS",
    icon: FaCss3,
  },
  {
    id: "3",
    title: "Javascript",
    icon: BiLogoJavascript,
  },
  {
    id: "4",
    title: "Typescript",
    icon: BiLogoTypescript,
  },
  {
    id: "5",
    title: "ReactJs",
    icon: FaReact,
  },
  {
    id: "6",
    title: "NextJs",
    icon: TbBrandNextjs,
  },
  {
    id: "7",
    title: "ChakraUi",
    icon: SiChakraui,
  },
  {
    id: "8",
    title: "Sass",
    icon: FaSass,
  },
  {
    id: "9",
    title: "Gitlab",
    icon: SiGitlab,
  },
  {
    id: "10",
    title: "Github",
    icon: FaGithub,
  },
  {
    id: "11",
    title: "Flutter",
    icon: BiLogoFlutter,
  },
  {
    id: "12",
    title: "Figma",
    icon: FaFigma,
  },
];
