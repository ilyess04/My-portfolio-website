import { BsGithub } from "react-icons/bs";
import { Button, Card } from "react-bootstrap";

const ProjectCard = (props: any): JSX.Element => {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <div className="d-flex">
            <BsGithub className="mt-1" /> <span className="ps-1">GitHub</span>
          </div>
        </Button>
      </Card.Body>
    </Card>
  );
};
export default ProjectCard;
