import React from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ChannelInputComponent } from "../../components/ChannelInputComponent";

export const ChannelListItemModal = (props) => {
  const { show, setShow, initialValues, saveChannel } = props;
  const { t } = useTranslation();

  const handleClose = () => setShow(false);

  const saveChannelFunc = (e) => {
    saveChannel(e);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{t("edit")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ChannelInputComponent
          initialValues={initialValues}
          saveChannel={saveChannelFunc}
        />
      </Modal.Body>
    </Modal>
  );
};
