import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

export const NavbarComponent = () => {
  const isLoggedIn = !false;

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
          <Nav>
            <Navbar.Text>
              Kullanici:{" "}
              <strong href="#login">
                Gurkan <FaSignOutAlt size={20} />
              </strong>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
/*
 <Navbar bg="warning">
      <Container>
        <Navbar.Brand>Trakya Bilmuh - Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-bar" />
        <Navbar.Collapse
          id="responsive-navbar-bar"
          className="justify-content-end"
        >
          <Nav className="me-auto">
            <Nav.Link href="#home">Anasayfa</Nav.Link>
            <Nav.Link href="#features">Ayarlar</Nav.Link>
          </Nav>
          {isLoggedIn && (
            <>
              <Navbar.Text>
                Kullanici: <strong href="#login">Gurkan</strong>
              </Navbar.Text>
              <Button style={{ marginLeft: 20 }} variant="dark">
                signout
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>*/
