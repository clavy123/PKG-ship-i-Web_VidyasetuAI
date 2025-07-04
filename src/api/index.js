import axios from "axios";

export const axiosInstance = axios.create();

// Example interceptor: Add Authorization header if token exists
axiosInstance.interceptors.request.use(
  (config) => {
    // You can customize this logic as needed
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Example response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can handle global errors here
    return Promise.reject(error);
  }
);
