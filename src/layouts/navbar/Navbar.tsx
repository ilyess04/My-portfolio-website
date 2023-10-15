import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { logo } from "../../assets";
import { Data } from "../../common/Data/Data";
import { GIT_PORTFOLIO_URL } from "../../common/consts";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const navItems = Data.getNavItems();

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(!expand)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navItems.map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  to={item.to}
                  onClick={() => setExpand(false)}
                >
                  <div className="d-flex justify-content-center">
                    {item.icon}
                    <span className="ps-1">{item.text}</span>
                  </div>
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className="d-none d-md-block fork-btn">
              <Button
                href={GIT_PORTFOLIO_URL}
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
