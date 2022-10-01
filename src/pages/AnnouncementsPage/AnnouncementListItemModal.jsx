import React from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { AnnouncementnputComponents } from "../../components/AnnouncementnputComponents";

export const AnnouncementListItemModal = (props) => {
  const { show, setShow, initialValues, saveAnnouncement } = props;
  const { t } = useTranslation();

  const handleClose = () => setShow(false);

  const saveAnnouncementFunc = (e) => {
    saveAnnouncement(e);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{t("edit")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AnnouncementnputComponents
          initialValues={initialValues}
          saveAnnouncement={saveAnnouncementFunc}
        />
      </Modal.Body>
    </Modal>
  );
};
