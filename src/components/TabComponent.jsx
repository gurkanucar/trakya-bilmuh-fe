import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import { AnnouncementnputComponents } from "./AnnouncementnputComponents";
import { MessageInputComponent } from "./MessageInputComponent";

export const TabComponent = ({saveAnnouncement,saveMessage}) => {
  const [key, setKey] = useState("message");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="message" title="Mesaj">
        <MessageInputComponent saveMessage={saveMessage} />
      </Tab>
      <Tab eventKey="announcement" title="Duyuru">
        <AnnouncementnputComponents saveAnnouncement={saveAnnouncement} />
      </Tab>
    </Tabs>
  );
};
