import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  deleteMessageById,
  getMessageList,
  getMyChannels,
  updateMessage,
} from "../../api/apiCalls";
import { MessageList } from "./MessageList";
import "./MessagesPage.css";
export const MessagesPage = (props) => {
  const { credientals } = props;

  const [messageList, setMessageList] = useState([]);
  const { t } = useTranslation();

  const [channels, setChannels] = useState([]);

  const getChannels = () => {
    getMyChannels(credientals.myToken)
      .then((res) => {
        console.log(res.data);
        setChannels(res.data);
      })
      .catch((e) => {
        console.log(e.e.response.data.error);
      });
  };

  const saveMessage = async (e) => {
    e.user = credientals.myDetails;
    console.log("Message: ", e);
    await updateMessage(e, credientals.myToken).catch((e) => {
      alert(e.response.data.error);
      console.log(e.e.response.data.error);
    });
    fetchMessages();
  };

  const deleteFunc = async (e) => {
    console.log("Delete: ", e);
    await deleteMessageById(e.id, credientals.myToken).catch((e) => {
      alert(e.response.data.error);
      console.log(e.e.response.data.error);
    });
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
    getChannels();
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
      <span className="message-page-title">{t("messagePage")}</span>
      <MessageList
      channels={channels}
        deleteFunc={deleteFunc}
        saveMessage={saveMessage}
        messageList={messageList}
      />
    </div>
  );
};
