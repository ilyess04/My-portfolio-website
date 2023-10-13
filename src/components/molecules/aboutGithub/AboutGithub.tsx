import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const AboutGithub = (): JSX.Element => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="ilyess04"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </Row>
  );
};

export default AboutGithub;
