import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://127.0.0.1:4000",
});

export { axiosInstance };
