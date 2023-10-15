import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { logo } from "../../assets";
import { Data } from "../../common/Data/Data";

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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
