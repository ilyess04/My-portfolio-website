import { useState, useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import { Particle } from "../../components";
import { CV_URL } from "../../common/consts";

const ResumeTemplate = (): JSX.Element => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={CV_URL}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row className="resume">
        <Document file={CV_URL} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>
    </Container>
  );
};

export default ResumeTemplate;
