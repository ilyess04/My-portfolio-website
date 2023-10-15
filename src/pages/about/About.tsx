import { Data } from "../../common/Data/Data";
import { GITHUB_USERNAME } from "../../common/consts";
import { AboutTemplate } from "../../templates";

const About = (): JSX.Element => {
  const skills = Data.getSkills();
  const tools = Data.getTools();
  const otherActivities = Data.getOtherActivities();
  return (
    <AboutTemplate
      githubUserName={GITHUB_USERNAME}
      skills={skills}
      tools={tools}
      otherActivities={otherActivities}
    />
  );
};
export default About;
