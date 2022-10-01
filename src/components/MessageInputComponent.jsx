import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const MessageInputComponent = (props) => {
  const { t } = useTranslation();
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
      {values.id == 0 && (
        <div>
          <h2>{t("sendMessage")}</h2>
          <br />
        </div>
      )}
      <Form onSubmit={saveMessage}>
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
        <Form.Group size="lg" className="mb-3" controlId="form.messageType">
          <Form.Label size="lg">{t("messageType")}</Form.Label>
          <Form.Select
            required
            size="lg"
            value={values.messageType}
            onChange={(e) =>
              setValues({ ...values, messageType: e.target.value })
            }
          >
            <option value="JOB">{t("messageType_JOB")}</option>
            <option value="INTERNSHIP">{t("messageType_INTERNSHIP")}</option>
            <option value="FIRST_GRADE">{t("messageType_FIRST_GRADE")}</option>
            <option value="SECOND_GRADE">
              {t("messageType_SECOND_GRADE")}
            </option>
            <option value="THIRD_GRADE">{t("messageType_THIRD_GRADE")}</option>
            <option value="FOURTH_GRADE">
              {t("messageType_FOURTH_GRADE")}
            </option>
          </Form.Select>
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
