import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { loginUser } from "../../api/apiCalls";
import "./LoginPage.css";

export const LoginPage = () => {
  const [credientals, setCredientals] = useState({
    username: "",
    password: "",
  });

  const doLogin = (e) => {
    e.preventDefault();
    console.log(credientals);
    loginUser(credientals)
      .then((x) => {
        console.log(x.data.accessToken);
      })
      .catch((e) => {
        alert(e.response.data.error);
        console.log(e.e.response.data.error);
      });
  };

  return (
    <div className="login_page_root">
      <img src="https://www.trakya.edu.tr/images/logo.png" />
      <h2>
        <strong>Trakya - Bilmuh</strong>
      </h2>
      <br />
      <Form onSubmit={doLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <strong>Kullanici Adi</strong>
          </Form.Label>
          <Form.Control
            onChange={(e) =>
              setCredientals({ ...credientals, username: e.target.value })
            }
            type="text"
            required
            placeholder="kullanici adini girin"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <strong>Parola</strong>
          </Form.Label>
          <Form.Control
            onChange={(e) =>
              setCredientals({ ...credientals, password: e.target.value })
            }
            type="password"
            placeholder="parola"
          />
        </Form.Group>
        <br />
        <div className="d-grid gap-2">
          <Button variant="warning" required type="submit" size="md">
            Giriş Yap
          </Button>
        </div>
      </Form>
    </div>
  );
};
