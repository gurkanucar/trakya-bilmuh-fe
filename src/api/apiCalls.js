import axios from "axios";
import { API_BASE_URL } from "../Constants";




export const loginUser = (post) => {
    return axios.post(API_BASE_URL + "/api/auth/login", post);
};