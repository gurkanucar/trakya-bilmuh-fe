import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  deleteChannelById,
  getMyChannels,
  updateChannel,
} from "../../api/apiCalls";
import "./ChannelPage.css";
import { ChannelPageList } from "./ChannelPageList";

export const ChannelPage = (props) => {
  const { credientals } = props;
  const { t } = useTranslation();
  const [channelList, setChannelList] = useState([]);

  const saveChannel = async (e) => {
    console.log("Channel: ", e);
    await updateChannel(e, credientals.myToken);
    fetchChannels();
  };

  const deleteFunc = async (e) => {
    console.log("Delete: ", e);
    await deleteChannelById(e.id, credientals.myToken);
    fetchChannels();
  };

  useEffect(() => {
    fetchChannels();
  }, [credientals]);

  const fetchChannels = () => {
    getMyChannels(credientals.myToken)
      .then((x) => {
        const data = x.data;
        setChannelList(data);
      })
      .catch((e) => {
        // alert(e.response.data.error);
        console.log(e.e.response.data.error);
      });
  };

  return (
    <div>
      <span className="channel-page-title">{t("announcementPage")}</span>
      <ChannelPageList
        deleteFunc={deleteFunc}
        saveChannel={saveChannel}
        channelList={channelList}
      />
    </div>
  );
};
