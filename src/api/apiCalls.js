import axios from "axios";
import { API_BASE_URL } from "../Constants";

export const loginUser = (post) => {
  return axios.post(API_BASE_URL + "/api/auth/login", post);
};

export const createMessage = (payload, token) => {
  return axios.post(API_BASE_URL + "/api/message", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateMessage = (payload, token) => {
  return axios.put(API_BASE_URL + "/api/message", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createAnnouncement = (payload, token) => {
  return axios.post(API_BASE_URL + "/api/announcement", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateAnnouncement = (payload, token) => {
  return axios.put(API_BASE_URL + "/api/announcement", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
