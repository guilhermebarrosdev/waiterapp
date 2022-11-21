import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.20.78.39/:3390",
});
