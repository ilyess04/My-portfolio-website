import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { IAboutCard } from "../../../common/interfaces";

const AboutCard = ({ otherActivities }: IAboutCard): JSX.Element => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Ilyess Sellami&nbsp;</span>
            from <span className="purple"> Tunisia.</span>
            <br /> I am a first year student pursuing Master degree  
            in Cyber Security at  University of Sfax.
            <br />
            Additionally, I am currently employed as a Full Stack software developer at
            Ocean Soft .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {otherActivities.map((activity, index) => (
              <li key={index} className="about-activity">
                <ImPointRight /> {activity}
              </li>
            ))}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Ilyess</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
