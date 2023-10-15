import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { IAboutCard } from "../../../common/interfaces";

const AboutCard = ({ otherActivities }: IAboutCard): JSX.Element => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br /> I am a final year student pursuing an Integrated MSc (IMSc)
            in Maths and Computing at BIT Mesra.
            <br />
            Additionally, I am currently employed as a software developer at
            Juspay.
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
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
