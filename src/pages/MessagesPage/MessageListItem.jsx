import React from "react";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { AskForDeleteComponent } from "../../components/AskForDeleteComponent";
import { MessageListItemModal } from "./MessageListItemModal";

import "./MessagesPage.css";

export const MessageListItem = (props) => {
  const { message, initialValues, readOnly, saveMessage, deleteFunc } = props;

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <Container style={{ margin: 15 }}>
      <Card>
        {!readOnly && (
          <div className="message-list-item-actions">
            <MdModeEditOutline onClick={() => setShowEdit(true)} />
            <MdDelete onClick={() => setShowDelete(true)} />
          </div>
        )}
        <Card.Body>
          <Card.Title>{`${message.user?.name} ${
            message.user?.surname || ""
          }`}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {`${new Date(message.createdDateTime).toUTCString()} - ${
              message.messageType
            }`}
          </Card.Subtitle>
          <Card.Text>{message.content}</Card.Text>
          {message?.link && <Button href={message?.link}>Bağlantıyı aç</Button>}
        </Card.Body>
      </Card>
      <MessageListItemModal
        saveMessage={saveMessage}
        initialValues={message}
        show={showEdit}
        setShow={setShowEdit}
      />
      <AskForDeleteComponent
        deleteFunc={deleteFunc}
        setShow={setShowDelete}
        initialValues={message}
        show={showDelete}
      />
    </Container>
  );
};
