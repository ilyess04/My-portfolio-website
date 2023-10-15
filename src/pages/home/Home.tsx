import { Data } from "../../common/Data/Data";
import { HomeTemplate } from "../../templates";

const Home = (): JSX.Element => {
  const icons = Data.getSocialItems();
  const skills = Data.getPortfolioSkills();
  return <HomeTemplate icons={icons} portfolioSkills={skills} />;
};
export default Home;
