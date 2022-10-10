import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const ChannelInputComponent = (props) => {
  const { t } = useTranslation();
  const initialValues = props?.initialValues;
  const [values, setValues] = useState({
    id: initialValues?.id || 0,
    canSendOthers: initialValues?.canSendOthers || "",
    channelName: initialValues?.channelName || "",
    channelImageUrl: initialValues?.channelImageUrl || "",
  });

  const saveChannel = (e) => {
    e.preventDefault();
    props.saveChannel(values);
    setValues({
      canSendOthers: false,
      channelName: "",
      channelImageUrl: "",
    });
  };

  return (
    <div style={{ margin: 50 }}>
      {values.id == 0 && (
        <div>
          <h2> {t("createChannel")}</h2>
          <br />
        </div>
      )}
      <Form onSubmit={saveChannel}>
        <Form.Group className="mb-3" size="lg" controlId="form.channelName">
          <Form.Label size="lg">{t("channelName")}</Form.Label>
          <Form.Control
            onChange={(e) =>
              setValues({ ...values, channelName: e.target.value })
            }
            value={values.channelName}
            required
            size="lg"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3" size="lg" controlId="form.channelImage">
          <Form.Label size="lg">{t("image")}</Form.Label>
          <Form.Control
            onChange={(e) =>
              setValues({ ...values, channelImage: e.target.value })
            }
            value={values.channelImage}
            size="lg"
            type="text"
            placeholder={t("optional")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="canSendOthers">
          <Form.Check
            onChange={(e) =>
              setValues({ ...values, canSendOthers: e.target.checked })
            }
            type="checkbox"
            label={t("canSendOthers")}
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
