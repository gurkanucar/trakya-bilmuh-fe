import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
  Container,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";

import React from "react";

export const NavbarComponent = (props) => {
  const { credientals } = props;

  const navigate = useNavigate();

  return (
    <Navbar bg="warning" variant={"light"} expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate("/home")}>
          <strong>Trakya Bilmuh - Panel</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/home">
              Anasayfa
            </Nav.Link>
            <Nav.Link as={Link} to="/messages">
              Mesaj
            </Nav.Link>
            <Nav.Link as={Link} to="/announcements">
              Duyurular
            </Nav.Link>
          </Nav>
          {/* <Nav onClick={doLogout} style={{ cursor: "pointer" }}>
            <Navbar.Text>
              Çıkış Yap:{" "}
              <strong href="#logout">
                {username} <FaSignOutAlt size={20} />
              </strong>
            </Navbar.Text>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
