import React from "react";
import { Button, Card, Container } from "react-bootstrap";

export const MessageListItem = (props) => {
  const { message } = props;

  return (
    <Container style={{ margin: 15 }}>
      <Card>
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
    </Container>
  );
};
