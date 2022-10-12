import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { AnnouncementInputComponent } from "./AnnouncementInputComponent";
import { ChannelInputComponent } from "./ChannelInputComponent";
import { MessageInputComponent } from "./MessageInputComponent";

export const TabComponent = ({
  saveAnnouncement,
  saveMessage,
  saveChannel,
  channels,
}) => {
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
        <MessageInputComponent channels={channels} saveMessage={saveMessage} />
      </Tab>
      <Tab eventKey="announcement" title={t("announcement")}>
        <AnnouncementInputComponent saveAnnouncement={saveAnnouncement} />
      </Tab>
      <Tab eventKey="channel" title={t("channel")}>
        <ChannelInputComponent saveChannel={saveChannel} />
      </Tab>
    </Tabs>
  );
};
