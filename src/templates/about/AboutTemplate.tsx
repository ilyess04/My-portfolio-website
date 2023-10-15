import { Container, Row, Col } from "react-bootstrap";
import { AboutCard, AboutGithub, Particle, Stack } from "../../components";
import { aboutImg } from "../../assets";
import { IAboutTemplate } from "../../common/interfaces";

const AboutTemplate = ({
  githubUserName,
  skills,
  tools,
  otherActivities,
}: IAboutTemplate): JSX.Element => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard otherActivities={otherActivities} />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={aboutImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>

        <Stack elements={skills} />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Stack elements={tools} />
        <AboutGithub githubUserName={githubUserName} />
      </Container>
    </Container>
  );
};

export default AboutTemplate;
