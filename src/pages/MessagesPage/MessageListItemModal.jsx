import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { MessageInputComponent } from "../../components/MessageInputComponent";

export const MessageListItemModal = (props) => {
  const { show, setShow, initialValues, saveMessage, channels } = props;
  const { t } = useTranslation();

  const handleClose = () => setShow(false);

  const saveMessageFunc = (e) => {
    saveMessage(e);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{t("edit")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MessageInputComponent
          channels={channels}
          initialValues={initialValues}
          saveMessage={saveMessageFunc}
        />
      </Modal.Body>
    </Modal>
  );
};
