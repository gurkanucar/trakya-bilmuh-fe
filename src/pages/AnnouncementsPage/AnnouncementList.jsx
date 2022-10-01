import React from "react";
import { AnnouncementListItem } from "./AnnouncementListItem";
import "./AnnouncementsPage.css";

import { useAutoAnimate } from "@formkit/auto-animate/react";
export const AnnouncementList = (props) => {
  const { announcementList, deleteFunc, saveAnnouncement } = props;

  const [parent] = useAutoAnimate(/* optional config */);
  return (
    <div className="announcement-list" ref={parent}>
      {announcementList.length == 0 && <h5>Veri Bulunamadı!</h5>}
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
