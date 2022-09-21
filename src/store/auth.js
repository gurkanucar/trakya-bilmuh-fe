import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      isLoggedIn: false,
      myToken: "",
      myDetails: {},
    },
  },
  reducers: {
    login: (state, action) => {
      state.value.myToken = action.payload.myToken;
      state.value.myDetails = action.payload.myDetails;
      state.value.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.value.myToken = "";
      state.value.isLoggedIn = false;
      state.value.myDetails = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
