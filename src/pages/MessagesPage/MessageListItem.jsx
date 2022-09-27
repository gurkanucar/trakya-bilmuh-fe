import React from "react";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { MessageListItemModal } from "./MessageListItemModal";

import "./MessagesPage.css";

export const MessageListItem = (props) => {
  const { message, readOnly,saveMessage } = props;

  const [showEdit, setShowEdit] = useState(false);

  return (
    <Container style={{ margin: 15 }}>
      <Card>
        {!readOnly && (
          <div className="message-list-item-actions">
            <MdModeEditOutline onClick={() => setShowEdit(true)} />
            <MdDelete />
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
    </Container>
  );
};
