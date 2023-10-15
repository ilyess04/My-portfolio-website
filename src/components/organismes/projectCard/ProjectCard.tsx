import { BsGithub } from "react-icons/bs";
import { Button, Card } from "react-bootstrap";
import { IProject } from "../../../common/interfaces";

const ProjectCard = ({ name, url, description }: IProject): JSX.Element => {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button variant="primary" href={url} target="_blank">
          <div className="d-flex">
            <BsGithub className="mt-1" /> <span className="ps-1">GitHub</span>
          </div>
        </Button>
      </Card.Body>
    </Card>
  );
};
export default ProjectCard;
