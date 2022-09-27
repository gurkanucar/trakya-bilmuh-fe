import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { MdSettings, MdMessage } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
export const NavbarComponent = (props) => {
  const { username, doLogout } = props;




  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <strong>Trakya Bilmuh - Panel</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <FaHome size={25} />
              <span className="navbar-component-item-text">
                {" "}Anasayfa</span>
            </Nav.Link>
            <Nav.Link href="#messages">
              <MdMessage size={25} />
              <span className="navbar-component-item-text">
                {" "}Mesajlar</span>
            </Nav.Link>
            <Nav.Link href="#announcements">
              <GrAnnounce size={25} />
              <span className="navbar-component-item-text">{" "}Duyurular</span>
            </Nav.Link>
            <Nav.Link href="#settings">
              <MdSettings size={25} /><span className="navbar-component-item-text">{" "}Ayarlar</span>
            </Nav.Link>
          </Nav>
          <Nav onClick={doLogout} style={{ cursor: "pointer" }}>
            <Navbar.Text>
              Çıkış Yap:{" "}
              <strong href="#logout">
                {username} <FaSignOutAlt size={20} />
              </strong>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
