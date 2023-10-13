import { ICommonComponent } from "../../common/interfaces";
import { ProjectsTemplate } from "../../templates";

const Projects = ({ lang }: ICommonComponent): JSX.Element => {
  return <ProjectsTemplate lang={lang} />;
};
export default Projects;
