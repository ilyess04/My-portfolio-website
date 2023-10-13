import { ICommonComponent } from "../../common/interfaces";
import { HomeTemplate } from "../../templates";

const Home = ({ lang }: ICommonComponent): JSX.Element => {
  return <HomeTemplate lang={lang} />;
};
export default Home;
