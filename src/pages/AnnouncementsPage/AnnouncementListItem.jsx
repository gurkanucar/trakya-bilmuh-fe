import React from "react";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { AnnouncementListItemModal } from "./AnnouncementListItemModal";
import { AskForDeleteComponent } from "../../components/AskForDeleteComponent";
import "./AnnouncementsPage.css";

export const AnnouncementListItem = (props) => {
  const { announcement, readOnly, saveAnnouncement, deleteFunc } = props;

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
          <div className="announcement-list-item-actions">
            <MdModeEditOutline onClick={() => setShowEdit(true)} />
            <MdDelete onClick={() => setShowDelete(true)} />
          </div>
        )}
        <Card.Body>
          <Card.Title>{announcement.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {`${
              announcement.createdDateTime != announcement.updatedDateTime
                ? "Güncellendi ! - "
                : ""
            } ${new Date(announcement.createdDateTime).toUTCString()}`}
          </Card.Subtitle>
          <Card.Text>{announcement.content}</Card.Text>
          {announcement?.link && (
            <Button href={announcement?.link}>Bağlantıyı aç</Button>
          )}
        </Card.Body>
      </Card>
      <AnnouncementListItemModal
        saveAnnouncement={saveAnnouncement}
        initialValues={announcement}
        show={showEdit}
        setShow={setShowEdit}
      />
      <AskForDeleteComponent
        deleteFunc={deleteAndCloseModalFunc}
        setShow={setShowDelete}
        initialValues={announcement}
        show={showDelete}
      />
    </Container>
  );
};
