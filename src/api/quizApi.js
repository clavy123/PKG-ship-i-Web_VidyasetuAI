import { BASE_URL } from "./authApi";
import { axiosInstance } from "./instance";

export const generateVideoQuiz = async (payload) => {
  return axiosInstance.post(
    `${BASE_URL}/GenerateResponse/GenrateQuestionnaireFromVideoURL`,
    payload
  );
};

export const generatePromptQuiz = async (payload) => {
  return axiosInstance.post(
    `${BASE_URL}/GenerateResponse/GenrateQuestionnaireFromPrompt`,
    payload
  );
};

export const evaluateQuiz = async (payload) => {
  return axiosInstance.post(`${BASE_URL}/QuizEvaluation/evaluate`, payload);
};
