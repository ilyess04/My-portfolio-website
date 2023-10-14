import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

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
}
export { Data };
