import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  updateAnnouncement,
  getAnnouncementList,
  deleteAnnouncementById,
} from "../../api/apiCalls";
import { AnnouncementList } from "./AnnouncementList";
import "./AnnouncementsPage.css";

export const AnnouncementsPage = (props) => {
  const { credientals } = props;  
  const { t } = useTranslation();

  const [announcementList, setAnnouncementList] = useState([]);

  const saveAnnouncement = async (e) => {
    console.log("Announcement: ", e);
    await updateAnnouncement(e, credientals.myToken);
    fetchAnnouncements();
  };

  const deleteFunc = async (e) => {
    console.log("Delete: ", e);
    await deleteAnnouncementById(e.id, credientals.myToken);
    fetchAnnouncements();
  };

  useEffect(() => {
    fetchAnnouncements();
  }, [credientals]);

  const fetchAnnouncements = () => {
    getAnnouncementList(credientals.myToken)
      .then((x) => {
        const data = x.data;
        setAnnouncementList(data);
      })
      .catch((e) => {
        // alert(e.response.data.error);
        console.log(e.e.response.data.error);
      });
  };

  return (
    <div>
      <span className="announcement-page-title">{t("announcementPage")}</span>
      <AnnouncementList
        deleteFunc={deleteFunc}
        saveAnnouncement={saveAnnouncement}
        announcementList={announcementList}
      />
    </div>
  );
};
