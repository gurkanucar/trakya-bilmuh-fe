import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavbarComponent } from "../../components/NavbarComponent";
import { logout } from "../../store/auth";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const credientals = useSelector((state) => state.auth.value);

  const doLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <NavbarComponent
        username={credientals.myDetails.username}
        doLogout={doLogout}
      />
    </div>
  );
};
