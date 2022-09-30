import React from "react";
import { AnnouncementListItem } from "./AnnouncementListItem";
import "./AnnouncementsPage.css";

export const AnnouncementList = (props) => {
  const { announcementList, saveAnnouncement } = props;

  return (
    <div className="announcement-list">
      {announcementList.size == 0 && <h2>Loading...</h2>}
      {announcementList.map((x, idx) => (
        <AnnouncementListItem
          saveAnnouncement={saveAnnouncement}
          key={idx}
          announcement={x}
        />
      ))}
    </div>
  );
};
