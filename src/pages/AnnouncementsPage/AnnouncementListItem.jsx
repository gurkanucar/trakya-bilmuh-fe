import React from "react";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { AnnouncementListItemModal } from "./AnnouncementListItemModal";

import "./AnnouncementsPage.css";

export const AnnouncementListItem = (props) => {
  const { message, readOnly, saveAnnouncement } = props;

  const [showEdit, setShowEdit] = useState(false);

  return (
    <Container style={{ margin: 15 }}>
      <Card>
        {!readOnly && (
          <div className="announcement-list-item-actions">
            <MdModeEditOutline onClick={() => setShowEdit(true)} />
            <MdDelete />
          </div>
        )}
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            {`${
              message.createdDateTime != message.updatedDateTime
                ? "Güncellendi ! - "
                : ""
            } ${new Date(message.createdDateTime).toUTCString()}`}
          </Card.Subtitle>
          <Card.Text>{message.content}</Card.Text>
          {message?.link && <Button href={message?.link}>Bağlantıyı aç</Button>}
        </Card.Body>
      </Card>
      <AnnouncementListItemModal
        saveAnnouncement={saveAnnouncement}
        initialValues={message}
        show={showEdit}
        setShow={setShowEdit}
      />
    </Container>
  );
};
