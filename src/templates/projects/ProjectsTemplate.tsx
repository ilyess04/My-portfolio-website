import { Container, Row, Col } from "react-bootstrap";
import { Particle, ProjectCard } from "../../components";
import { IProjectsTemplate } from "../../common/interfaces";

const ProjectsTemplate = ({ projects }: IProjectsTemplate): JSX.Element => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                name={project.name}
                url={project.url}
                description={project.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default ProjectsTemplate;
