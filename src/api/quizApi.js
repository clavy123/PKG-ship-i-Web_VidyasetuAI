import { BASE_URL } from "./authApi";
import { axiosInstance } from "./instance";

export const generateVideoQuiz = async (payload) => {
  return axiosInstance.post(`${BASE_URL}/GenerateResponse/GenrateQuestionnaireFromVideoURL`, payload);
};