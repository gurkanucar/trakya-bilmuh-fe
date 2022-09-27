import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const MessageInputComponent = (props) => {
  const initialValues = props?.initialValues;
  const [values, setValues] = useState({
    id: initialValues?.id || 0,
    content: initialValues?.content || "",
    user: {},
    messageType: initialValues?.messageType || "JOB",
    link: initialValues?.link || "",
  });

  const saveMessage = (e) => {
    e.preventDefault();
    props.saveMessage(values);
    setValues({
      content: "",
      user: {},
      messageType: "JOB",
      link: "",
    });
  };

  return (
    <div style={{ margin: 50 }}>
      <h2>Mesaj Gönder</h2>
      <br />
      <Form onSubmit={saveMessage}>
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
        <Form.Group size="lg" className="mb-3" controlId="form.messageType">
          <Form.Label size="lg">Mesaj Tipi</Form.Label>
          <Form.Select
            required
            size="lg"
            value={values.messageType}
            onChange={(e) =>
              setValues({ ...values, messageType: e.target.value })
            }
            aria-label="Default select example"
          >
            <option value="JOB">İŞ</option>
            <option value="INTERNSHIP">STAJ</option>
            <option value="FIRST_GRADE">1. Sınıf</option>
            <option value="SECOND_GRADE">2. Sınıf</option>
            <option value="THIRD_GRADE">3. Sınıf</option>
            <option value="FOURTH_GRADE">4. Sınıf</option>
          </Form.Select>
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
