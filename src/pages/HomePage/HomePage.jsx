import React, { useEffect, useState } from "react";
import { TabComponent } from "../../components/TabComponent";
import {
  createAnnouncement,
  createChannel,
  createMessage,
  getMyChannels,
} from "../../api/apiCalls";

export const HomePage = (props) => {
  const { credientals } = props;
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    getChannels();
  }, [credientals]);

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
    e.channel = { id: e.channel.id };
    console.log("Message: ", e);
    await createMessage(e, credientals.myToken);
    getChannels();
  };

  const saveAnnouncement = async (e) => {
    console.log("Announcement: ", e);
    await createAnnouncement(e, credientals.myToken);
    getChannels();
  };

  const saveChannel = async (e) => {
    e.user = credientals.myDetails;
    console.log("Channel: ", e);
    await createChannel(e, credientals.myToken);
    getChannels();
  };

  return (
    <div>
      <TabComponent
        channels={channels}
        saveChannel={saveChannel}
        saveMessage={saveMessage}
        saveAnnouncement={saveAnnouncement}
      />
    </div>
  );
};
