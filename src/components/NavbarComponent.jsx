import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

export const NavbarComponent = (props) => {
  const { username,doLogout } = props;




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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FaHome />
                Anasayfa
              </div>
            </Nav.Link>
            <Nav.Link href="#link">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <MdSettings />
                Ayarlar
              </div>
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
