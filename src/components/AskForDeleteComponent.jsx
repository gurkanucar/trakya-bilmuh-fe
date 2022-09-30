import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const AskForDeleteComponent = (props) => {
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
          <Modal.Title>Uyarı!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Silmek istediğinize emin misiniz?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            İptal
          </Button>
          <Button variant="danger" onClick={() => deleteFunc(initialValues)}>
            Sil
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
