import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getMessageList } from "../../api/apiCalls";
import { MessageList } from "./MessageList";
import "./MessagesPage.css";
export const MessagesPage = (props) => {
  const { credientals } = props;

  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, [credientals]);

  const fetchMessages = () => {
    getMessageList(credientals.myToken)
      .then((x) => {
        const data = x.data;
        setMessageList(data);
      })
      .catch((e) => {
        alert(e.response.data.error);
        console.log(e.e.response.data.error);
      });
  };

  return (
    <div>
      <h1>MessagesPage</h1>
      <MessageList messageList={messageList} />
    </div>
  );
};
