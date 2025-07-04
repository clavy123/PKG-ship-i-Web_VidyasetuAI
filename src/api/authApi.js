import { axiosInstance, LOGIN_URL, SIGNUP_URL } from "./instance";

export const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const deviceRegister = async (payload) => {
  return axiosInstance.post(`${BASE_URL}/Auth/device-register`, payload);
};

export const signupApi = (payload) => {
  return axiosInstance.post(`${BASE_URL}/Auth/signup`, payload);
};

export const loginApi = (payload) => {
  return axiosInstance.post(`${BASE_URL}/Auth/login`, payload);
};

export const logoutApi = () => {
  return axiosInstance.get(`${BASE_URL}/Auth/logout`);
};
