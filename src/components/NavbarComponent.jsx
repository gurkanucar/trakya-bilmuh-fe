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
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

export const NavbarComponent = (props) => {
  const { t } = useTranslation();
  const { credientals, doLogout } = props;
  const { myDetails: user } = credientals;

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
              {t("homePage")}
            </Nav.Link>
            <Nav.Link as={Link} to="/messages">
              {t("messagePage")}
            </Nav.Link>
            <Nav.Link as={Link} to="/announcements">
              {t("announcementPage")}
            </Nav.Link>
            <Nav.Link as={Link} to="/channels">
              {t("channelPage")}
            </Nav.Link>
          </Nav>
          <Nav onClick={doLogout} style={{ cursor: "pointer" }}>
            <Navbar.Text>
              {t("logout")}
              <strong href="#logout">
                {user.username} <FaSignOutAlt size={20} />
              </strong>
            </Navbar.Text>
          </Nav>
          <LanguageSelector />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
