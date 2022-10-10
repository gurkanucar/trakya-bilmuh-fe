import axios from "axios";
import { API_BASE_URL } from "../Constants";
import { instance as axiosInstance } from "./apiInterceptor";

export const loginUser = (post) => {
  return axiosInstance.post(API_BASE_URL + "/api/auth/login", post);
};

export const createMessage = (payload, token) => {
  return axiosInstance.post(API_BASE_URL + "/api/message", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateMessage = (payload, token) => {
  return axiosInstance.put(API_BASE_URL + "/api/message", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createAnnouncement = (payload, token) => {
  return axiosInstance.post(API_BASE_URL + "/api/announcement", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createChannel = (payload, token) => {
  return axiosInstance.post(API_BASE_URL + "/api/channel", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateAnnouncement = (payload, token) => {
  return axiosInstance.put(API_BASE_URL + "/api/announcement", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateChannel = (payload, token) => {
  return axiosInstance.put(API_BASE_URL + "/api/channel", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAnnouncementList = (token) => {
  return axiosInstance.get(API_BASE_URL + "/api/announcement", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAnnouncementById = (id, token) => {
  return axiosInstance.get(API_BASE_URL + "/api/announcement/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteAnnouncementById = (id, token) => {
  return axiosInstance.delete(API_BASE_URL + "/api/announcement/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteChannelById = (id, token) => {
  return axiosInstance.delete(API_BASE_URL + "/api/channel/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getMessageList = (token) => {
  return axiosInstance.get(API_BASE_URL + "/api/message", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getMessageById = (id, token) => {
  return axiosInstance.get(API_BASE_URL + "/api/message/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteMessageById = (id, token) => {
  return axiosInstance.delete(API_BASE_URL + "/api/message/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getMyChannels = (token) => {
  return axiosInstance.get(API_BASE_URL + "/api/channel/my-channels", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
