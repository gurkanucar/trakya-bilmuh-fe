import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavbarComponent } from "../../components/NavbarComponent";
import { logout } from "../../store/auth";
import { MessageInputComponent } from "../../components/MessageInputComponent";
import { TabComponent } from "../../components/TabComponent";
import { createMessage } from "../../api/apiCalls";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const credientals = useSelector((state) => state.auth.value);

  const doLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const saveMessage = (e) => {
    e.user = credientals.myDetails;
    console.log("Message: ", e);
    createMessage(e, credientals.myToken);
  };

  const saveAnnouncement = (e) => {
    console.log("Announcement: ", e);
  };

  return (
    <div>
      <NavbarComponent
        username={credientals.myDetails.username}
        doLogout={doLogout}
      />
      <TabComponent
        saveMessage={saveMessage}
        saveAnnouncement={saveAnnouncement}
      />
    </div>
  );
};
