import React from "react";
import { AnnouncementListItem } from "./AnnouncementListItem";
import "./AnnouncementsPage.css";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useTranslation } from "react-i18next";
export const AnnouncementList = (props) => {
  const { announcementList, deleteFunc, saveAnnouncement } = props;  
  const { t } = useTranslation();

  const [parent] = useAutoAnimate(/* optional config */);
  return (
    <div className="announcement-list" ref={parent}>
      {announcementList.length == 0 && <h5>{t("dataNotFound")}</h5>}
      {announcementList.map((x, idx) => (
        <AnnouncementListItem
          saveAnnouncement={saveAnnouncement}
          key={idx}
          announcement={x}
          deleteFunc={deleteFunc}
        />
      ))}
    </div>
  );
};
