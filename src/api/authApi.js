import { axiosInstance, LOGIN_URL, SIGNUP_URL } from "./instance";

export const signupApi = (payload) => {
  return axiosInstance.post(SIGNUP_URL, payload);
};

export const loginApi = (payload) => {
  return axiosInstance.post(LOGIN_URL, payload);
}
