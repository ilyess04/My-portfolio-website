import { Data } from "../../common/Data/Data";
import { HomeTemplate } from "../../templates";

const Home = (): JSX.Element => {
  const icons = Data.getSocialItems();
  return <HomeTemplate icons={icons} />;
};
export default Home;
