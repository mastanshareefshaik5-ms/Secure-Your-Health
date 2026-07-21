import axios from "axios";

// Change this URL after deploying your backend
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Automatically attach JWT token to every request
API.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default API;