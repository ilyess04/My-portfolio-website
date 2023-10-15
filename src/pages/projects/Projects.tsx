import { Data } from "../../common/Data/Data";
import { ProjectsTemplate } from "../../templates";

const Projects = (): JSX.Element => {
  const projects = Data.getProjects();
  return <ProjectsTemplate projects={projects} />;
};
export default Projects;
