import { useState, useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import { Particle } from "../../components";
import { cv } from "../../assets";

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
          href={cv}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          <span>Download CV</span>
        </Button>
      </Row>

      <Row className="resume">
        <Document file={cv} className="d-flex justify-content-center">
          <Page pageNumber={1} />
        </Document>
      </Row>
    </Container>
  );
};

export default ResumeTemplate;
