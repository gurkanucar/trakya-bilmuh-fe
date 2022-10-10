import React from "react";
import { TabComponent } from "../../components/TabComponent";
import {
  createAnnouncement,
  createChannel,
  createMessage,
} from "../../api/apiCalls";

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

  const saveChannel = (e) => {
    e.user = credientals.myDetails;
    console.log("Channel: ", e);
    createChannel(e, credientals.myToken);
  };

  return (
    <div>
      <TabComponent
        saveChannel={saveChannel}
        saveMessage={saveMessage}
        saveAnnouncement={saveAnnouncement}
      />
    </div>
  );
};
