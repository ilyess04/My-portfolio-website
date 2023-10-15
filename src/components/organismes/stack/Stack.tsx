import { Col, Row } from "react-bootstrap";
import { IStack } from "../../../common/interfaces";

const Stack = ({ elements }: IStack): JSX.Element => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {elements.map((element, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {element}
        </Col>
      ))}
    </Row>
  );
};

export default Stack;
