import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";

export const AskForDeleteComponent = (props) => {
  const { t } = useTranslation();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { deleteFunc, initialValues, show, setShow } = props;

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{t("warning")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t("askForDelete")}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("cancel")}
          </Button>
          <Button variant="danger" onClick={() => deleteFunc(initialValues)}>
            {t("delete")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
