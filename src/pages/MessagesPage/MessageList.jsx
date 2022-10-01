import React from "react";
import { MessageListItem } from "./MessageListItem";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./MessagesPage.css";

export const MessageList = (props) => {
  const { messageList, deleteFunc, saveMessage } = props;

  const [parent] = useAutoAnimate(/* optional config */);
  return (
    <div className="message-list" ref={parent}>
      {messageList.length == 0 && <h5>Veri Bulunamadı!</h5>}
      {messageList.map((x, idx) => (
        <MessageListItem
          deleteFunc={deleteFunc}
          saveMessage={saveMessage}
          key={idx}
          message={x}
        />
      ))}
    </div>
  );
};
