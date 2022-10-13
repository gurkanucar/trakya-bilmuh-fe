import React from "react";
import { MessageListItem } from "./MessageListItem";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./MessagesPage.css";
import { useTranslation } from "react-i18next";

export const MessageList = (props) => {
  const { messageList, deleteFunc, saveMessage, channels } = props;
  const { t } = useTranslation();

  const [parent] = useAutoAnimate(/* optional config */);
  return (
    <div className="message-list" ref={parent}>
      {messageList.length == 0 && <h5>{t("dataNotFound")}</h5>}
      {messageList.map((x, idx) => (
        <MessageListItem
          channels={channels}
          deleteFunc={deleteFunc}
          saveMessage={saveMessage}
          key={idx}
          message={x}
        />
      ))}
    </div>
  );
};
