import React from "react";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import "./ChannelPage.css";
import { useTranslation } from "react-i18next";
import { AskForDeleteComponent } from "../../components/AskForDeleteComponent";
import { ChannelListItemModal } from "./ChannelListItemModal";
export const ChannelPageListItem = (props) => {
  const { channel, readOnly, saveChannel, deleteFunc } = props;
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
          <div className="channel-list-item-actions">
            <MdModeEditOutline onClick={() => setShowEdit(true)} />
            <MdDelete onClick={() => setShowDelete(true)} />
          </div>
        )}
        <Card.Body>
          <Card.Title>{`${channel.channelName} - ${channel.user.name} ${channel.user.surname}`}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {`${
              channel.createdDateTime != channel.updatedDateTime
                ? t("updated")
                : ""
            } ${new Date(channel.createdDateTime).toUTCString()}`}
          </Card.Subtitle>
          <Card.Text>{channel.canSendOthers && t("canSendOthers")}</Card.Text>
        </Card.Body>
      </Card>
      <ChannelListItemModal
        saveChannel={saveChannel}
        initialValues={channel}
        show={showEdit}
        setShow={setShowEdit}
      />
      <AskForDeleteComponent
        deleteFunc={deleteAndCloseModalFunc}
        setShow={setShowDelete}
        initialValues={channel}
        show={showDelete}
      />
    </Container>
  );
};
