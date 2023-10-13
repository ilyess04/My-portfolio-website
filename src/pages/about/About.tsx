import { ICommonComponent } from "../../common/interfaces";
import { AboutTemplate } from "../../templates";

const About = ({ lang }: ICommonComponent): JSX.Element => {
  return <AboutTemplate lang={lang} />;
};
export default About;
