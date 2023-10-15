import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from "../consts";
import { FaLinkedinIn } from "react-icons/fa";
import { ISocialIcon } from "../interfaces";
import React from "react";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import {
  SiFirebase,
  SiMacos,
  SiNestjs,
  SiNextdotjs,
  SiPostman,
  SiSlack,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

class Data {
  static getNavItems() {
    return [
      {
        to: "/",
        icon: (
          <AiOutlineHome className="mt-1" style={{ marginBottom: "2px" }} />
        ),
        text: "Home",
      },
      {
        to: "/about",
        icon: (
          <AiOutlineUser className="mt-1" style={{ marginBottom: "2px" }} />
        ),
        text: "About",
      },
      {
        to: "/projects",
        icon: (
          <AiOutlineFundProjectionScreen
            className="mt-1"
            style={{ marginBottom: "2px" }}
          />
        ),
        text: "Projects",
      },
      {
        to: "/resume",
        icon: (
          <CgFileDocument className="mt-1" style={{ marginBottom: "2px" }} />
        ),
        text: "Resume",
      },
    ];
  }
  static getSocialItems(): Array<ISocialIcon> {
    return [
      { url: GITHUB_URL, child: <AiFillGithub /> },
      { url: TWITTER_URL, child: <AiOutlineTwitter /> },
      { url: LINKEDIN_URL, child: <FaLinkedinIn /> },
      { url: INSTAGRAM_URL, child: <AiFillInstagram /> },
    ];
  }
  static getSkills(): Array<React.ReactNode> {
    return [
      <DiJavascript1 />,
      <SiTypescript />,
      <DiJava />,
      <DiNodejs />,
      <SiNestjs />,
      <DiReact />,
      <SiNextdotjs />,
      <DiMongodb />,
      <DiGit />,
      <SiFirebase />,
    ];
  }
  static getTools(): Array<React.ReactNode> {
    return [
      <SiMacos />,
      <SiVisualstudiocode />,
      <SiPostman />,
      <SiSlack />,
      <SiVercel />,
    ];
  }
  static getOtherActivities(): Array<string> {
    return ["Playing Games", "Writing Tech Blogs", "Travelling"];
  }
}
export { Data };
