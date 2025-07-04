import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generateVideoQuiz } from "../../api/quizApi";
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

const initialState = {
  quizData: localStorage.getItem("quizData")
    ? JSON.parse(localStorage.getItem("quizData"))
    : null,
  //   quizData: STATIC_QUIZ_RES,
  loading: false,
  error: null,
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
        state.loading = false;
        state.error = null;
        state.quizData = action.payload?.data || null;
        localStorage.setItem("quizData", JSON.stringify(state.quizData));
      })
      .addCase(generateQuizFromVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to generate quiz";
        state.quizData = null;
      });
  },
});

export default quizSlice.reducer;
