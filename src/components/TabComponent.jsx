import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { AnnouncementnputComponents } from "./AnnouncementnputComponents";
import { ChannelInputComponent } from "./ChannelInputComponent";
import { MessageInputComponent } from "./MessageInputComponent";

export const TabComponent = ({ saveAnnouncement, saveMessage,saveChannel }) => {
  const [key, setKey] = useState("message");
  const { t } = useTranslation();

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="message" title={t("message")}>
        <MessageInputComponent saveMessage={saveMessage} />
      </Tab>
      <Tab eventKey="announcement" title={t("announcement")}>
        <AnnouncementnputComponents saveAnnouncement={saveAnnouncement} />
      </Tab> 
       <Tab eventKey="channel" title={t("channel")}>
        <ChannelInputComponent saveChannel={saveChannel} />
      </Tab>
    </Tabs>
  );
};
