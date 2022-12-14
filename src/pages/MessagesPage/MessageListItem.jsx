import React from "react";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { AskForDeleteComponent } from "../../components/AskForDeleteComponent";
import { MessageListItemModal } from "./MessageListItemModal";
import "./MessagesPage.css";

export const MessageListItem = (props) => {
  const { message, readOnly, saveMessage, deleteFunc,channels} = props;
  const { t } = useTranslation();

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const deleteAndCloseModalFunc = (e) => {
    setShowDelete(false);
    deleteFunc(e);
  };

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
              message.channel.channelName
            }`}
          </Card.Subtitle>
          <Card.Text>{message.content}</Card.Text>
          {message?.link && (
            <Button href={message?.link}>{t("openLink")}</Button>
          )}
        </Card.Body>
      </Card>
      <MessageListItemModal
      channels={channels}
        saveMessage={saveMessage}
        initialValues={message}
        show={showEdit}
        setShow={setShowEdit}
      />
      <AskForDeleteComponent
        deleteFunc={deleteAndCloseModalFunc}
        setShow={setShowDelete}
        initialValues={message}
        show={showDelete}
      />
    </Container>
  );
};
