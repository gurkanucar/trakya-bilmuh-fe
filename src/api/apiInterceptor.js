import axios from "axios";
import { API_BASE_URL } from "../Constants";

export const instance = axios.create({ baseURL: API_BASE_URL });

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(`error ${error}`);
    // if (error.response.status) {

    //   return Axios.request(error.config);
    // }
    return Promise.reject(error);
  }
);
