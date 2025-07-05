import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  evaluateQuiz,
  generatePromptQuiz,
  generateVideoQuiz,
} from "../../api/quizApi";
import { STATIC_QUIZ_RES } from "../../utils/constants";

export const generateQuizFromVideo = createAsyncThunk(
  "quiz/generateQuizFromVideo",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await generateVideoQuiz(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err?.response?.data?.message || "Device registration failed"
      );
    }
  }
);

export const generateQuizFromPrompt = createAsyncThunk(
  "quiz/generateQuizFromPrompt",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await generatePromptQuiz(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err?.response?.data?.message || "Device registration failed"
      );
    }
  }
);

export const quizEvaluate = createAsyncThunk(
  "quiz/evaluateQuiz",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await evaluateQuiz(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err?.response?.data?.message || "Quiz evaluation failed"
      );
    }
  }
);

const initialState = {
  quizData: localStorage.getItem("quizData")
    ? JSON.parse(localStorage.getItem("quizData"))
    : null,
  quizToken: null,
  //   quizData: STATIC_QUIZ_RES,
  loading: false,
  error: null,
  evaluateQuizData: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateQuizFromVideo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateQuizFromVideo.fulfilled, (state, action) => {
        console.log("action-", action)
        state.loading = false;
        state.error = null;
        state.quizData =
          action.payload?.data?.questionnaireResponseModel || null;
        localStorage.setItem("quizData", JSON.stringify(state.quizData));
        state.quizToken = action.payload?.data?.token || null;
        localStorage.setItem("quizToken", state.quizToken);
      })
      .addCase(generateQuizFromVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to generate quiz";
        state.quizData = null;
        state.quizToken = null;
      });
    builder
      .addCase(generateQuizFromPrompt.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateQuizFromPrompt.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.quizData =
          action.payload?.data?.questionnaireResponseModel || null;
        state.quizToken = action.payload?.data?.token || null;
        localStorage.setItem("quizData", JSON.stringify(state.quizData));
        localStorage.setItem("quizToken", state.quizToken);
      })
      .addCase(generateQuizFromPrompt.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to generate quiz";
        state.quizData = null;
        state.quizToken = null;
      });
    builder
      .addCase(quizEvaluate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(quizEvaluate.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.evaluateQuizData = action.payload?.data || null;
      })
      .addCase(quizEvaluate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to evaluate quiz";
        state.evaluateQuizData = null;
      });
  },
});

export default quizSlice.reducer;
