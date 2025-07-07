import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import quizReducer from "./slices/quiz.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    quiz: quizReducer,
  },
});
