import React from "react";
import { TabComponent } from "../../components/TabComponent";
import { createAnnouncement, createMessage } from "../../api/apiCalls";

export const HomePage = (props) => {
  const { credientals } = props;

  const saveMessage = (e) => {
    e.user = credientals.myDetails;
    console.log("Message: ", e);
    createMessage(e, credientals.myToken);
  };

  const saveAnnouncement = (e) => {
    console.log("Announcement: ", e);
    createAnnouncement(e, credientals.myToken);
  };

  return (
    <div>
      <TabComponent
        saveMessage={saveMessage}
        saveAnnouncement={saveAnnouncement}
      />
    </div>
  );
};
