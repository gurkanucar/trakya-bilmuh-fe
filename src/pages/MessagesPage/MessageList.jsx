import React from "react";
import { MessageListItem } from "./MessageListItem";

export const MessageList = (props) => {
  const { messageList } = props;

  return (
    <div>
      {messageList.size == 0 && <h2>Loading...</h2>}
      {messageList.map((x, idx) => (
        <MessageListItem key={idx} message={x} />
      ))}
    </div>
  );
};
