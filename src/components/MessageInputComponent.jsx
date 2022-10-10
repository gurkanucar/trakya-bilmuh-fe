import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMyChannels } from "../api/apiCalls";

export const MessageInputComponent = (props) => {
  const credientals = useSelector((state) => state.auth.value);
  const { t } = useTranslation();
  const initialValues = props?.initialValues;
  const [values, setValues] = useState({
    id: initialValues?.id || 0,
    content: initialValues?.content || "",
    user: {},
    channel: initialValues?.channel.id || "",
    link: initialValues?.link || "",
  });

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    getChannels();
  }, [credientals]);

  const getChannels = () => {
    getMyChannels(credientals.myToken)
      .then((res) => {
        setChannels(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        //alert(e.response.data.error);
        console.log(e.e.response.data.error);
      });
  };

  const saveMessage = (e) => {
    e.preventDefault();
    values.channel = { id: parseInt(values.channel) };
    props.saveMessage(values);
    setValues({
      content: "",
      user: {},
      channel: "",
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
            value={values.channel}
            onChange={(e) => setValues({ ...values, channel: e.target.value })}
          >
            {channels.map((x) => (
              <option value={x.id}>{x.channelName}</option>
            ))}
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
