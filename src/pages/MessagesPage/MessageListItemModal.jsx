import React from "react";
import { Button, Modal } from "react-bootstrap";
import { MessageInputComponent } from "../../components/MessageInputComponent";

export const MessageListItemModal = (props) => {
  const { show, setShow, initialValues, saveMessage } = props;

  const handleClose = () => setShow(false);

  const saveMessageFunc = (e) => {
    saveMessage(e);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MessageInputComponent
          initialValues={initialValues}
          saveMessage={saveMessageFunc}
        />
      </Modal.Body>
    </Modal>
  );
};
