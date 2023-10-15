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
}
export { Data };
