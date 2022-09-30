import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  deleteMessageById,
  getMessageList,
  updateMessage,
} from "../../api/apiCalls";
import { MessageList } from "./MessageList";
import "./MessagesPage.css";
export const MessagesPage = (props) => {
  const { credientals } = props;

  const [messageList, setMessageList] = useState([]);

  const saveMessage = async (e) => {
    e.user = credientals.myDetails;
    console.log("Message: ", e);
    await updateMessage(e, credientals.myToken);
    fetchMessages();
  };

  const deleteFunc = async (e) => {
    console.log("Delete: ", e);
    await deleteMessageById(e.id, credientals.myToken);
    fetchMessages();
  };

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
        //alert(e.response.data.error);
        console.log(e.e.response.data.error);
      });
  };

  return (
    <div>
      <span className="message-page-title">MessagesPage</span>
      <MessageList
        deleteFunc={deleteFunc}
        saveMessage={saveMessage}
        messageList={messageList}
      />
    </div>
  );
};
