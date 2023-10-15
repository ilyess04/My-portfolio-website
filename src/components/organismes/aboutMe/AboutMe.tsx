import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
import { myImg } from "../../../assets";
import { IAboutMe } from "../../../common/interfaces";

const AboutMe = ({ icons }: IAboutMe): JSX.Element => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am Full Stack developer using programing languages like
              <i>
                <b className="purple">&nbsp;Javascript, Typescript and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web/Mobile Technologies and Products </b>
                and also in areas related to
                <b className="purple"> Blockchain and Web3.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with<b className="purple">&nbsp;Node.js</b>&nbsp;and&nbsp;
              <i>
                <b className="purple">
                Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple">
                &nbsp; React.js, React native, Next.js, Express.js and Nest.js
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {icons.map((icon, index) => (
                <li key={index} className="social-icons">
                  <a
                    href={icon.url}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    {icon.child}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default AboutMe;
