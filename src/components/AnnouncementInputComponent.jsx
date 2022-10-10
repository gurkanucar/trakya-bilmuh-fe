import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const AnnouncementInputComponent = (props) => {
  const { t } = useTranslation();
  const initialValues = props?.initialValues;
  const [values, setValues] = useState({
    id: initialValues?.id || 0,
    content: initialValues?.content || "",
    title: initialValues?.title || "",
    link: initialValues?.link || "",
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
      {values.id == 0 && (
        <div>
          <h2> {t("createAnnouncement")}</h2>
          <br />
        </div>
      )}
      <Form onSubmit={saveAnnouncement}>
        <Form.Group className="mb-3" size="lg" controlId="form.title">
          <Form.Label size="lg">{t("title")}</Form.Label>
          <Form.Control
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            value={values.title}
            required
            size="lg"
            type="text"
            placeholder={t("examplePlaceholderForAnnouncement")}
          />
        </Form.Group>
        <Form.Group size="lg" className="mb-3" controlId="form.detail">
          <Form.Label size="lg">{t("detail")}</Form.Label>
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
          <Form.Label size="lg">{t("link")}</Form.Label>
          <Form.Control
            onChange={(e) => setValues({ ...values, link: e.target.value })}
            value={values.link}
            size="lg"
            type="text"
            placeholder={t("redirectOptional")}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="warning" required type="submit" size="md">
          {t("save")}
          </Button>
        </div>
      </Form>
    </div>
  );
};
