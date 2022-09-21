import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const AnnouncementnputComponents = (props) => {
  const [values, setValues] = useState({
    content: "",
    title: "",
    link: "",
  });

  const saveAnnouncement = (e) => {
    e.preventDefault();
    props.saveAnnouncement(values);
    setValues({
      content: "",
      title: "",
      link: "",
    });
  };

  return (
    <div style={{ margin: 50 }}>
      <h2>Duyuru Ekle</h2>
      <br />
      <Form onSubmit={saveAnnouncement}>
        <Form.Group className="mb-3" size="lg" controlId="form.title">
          <Form.Label size="lg">Başlık</Form.Label>
          <Form.Control
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            value={values.title}
            required
            size="lg"
            type="text"
            placeholder="ÖR: ... dersi iptal"
          />
        </Form.Group>
        <Form.Group size="lg" className="mb-3" controlId="form.detail">
          <Form.Label size="lg">Detay</Form.Label>
          <Form.Control
            onChange={(e) => setValues({ ...values, content: e.target.value })}
            value={values.content}
            required
            size="lg"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3" size="lg" controlId="form.link">
          <Form.Label size="lg">Link</Form.Label>
          <Form.Control
            onChange={(e) => setValues({ ...values, link: e.target.value })}
            value={values.link}
            size="lg"
            type="text"
            placeholder="yönlendirme linki (keyfi)"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="warning" required type="submit" size="md">
            Kaydet
          </Button>
        </div>
      </Form>
    </div>
  );
};
