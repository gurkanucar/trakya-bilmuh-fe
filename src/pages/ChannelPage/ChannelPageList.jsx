import React from "react";
import "./ChannelPage.css";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useTranslation } from "react-i18next";
import { ChannelPageListItem } from "./ChannelPageListItem";
export const ChannelPageList = (props) => {
  const { channelList, deleteFunc, saveChannel } = props;
  const { t } = useTranslation();

  const [parent] = useAutoAnimate(/* optional config */);
  return (
    <div className="channel-list" ref={parent}>
      {channelList.length == 0 && <h5>{t("dataNotFound")}</h5>}
      {channelList.map((x, idx) => (
        <ChannelPageListItem
          saveChannel={saveChannel}
          key={idx}
          channel={x}
          deleteFunc={deleteFunc}
        />
      ))}
    </div>
  );
};
