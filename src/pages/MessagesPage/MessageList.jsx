import React from "react";
import { MessageListItem } from "./MessageListItem";

import "./MessagesPage.css";

export const MessageList = (props) => {
  const { messageList } = props;

  return (
    <div className="message-list">
      {messageList.size == 0 && <h2>Loading...</h2>}
      {messageList.map((x, idx) => (
        <MessageListItem key={idx} message={x} />
      ))}
    </div>
  );
};
