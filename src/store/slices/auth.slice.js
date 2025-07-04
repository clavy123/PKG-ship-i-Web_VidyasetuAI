import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deviceRegister, loginApi, signupApi } from "../../api/authApi";

export const deviceRegisterFn = createAsyncThunk(
  "auth/deviceRegisterFn",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await deviceRegister(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err?.response?.data?.message || "Device registration failed"
      );
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await signupApi(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message || "Signup failed");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await loginApi(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message || "Login failed");
    }
  }
);

const initialState = {
  deviceId: null,
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deviceRegisterFn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deviceRegisterFn.fulfilled, (state, action) => {
        state.loading = false;
        state.deviceId = action?.payload?.id || null;
        state.error = null;
        localStorage.setItem("deviceId", action?.payload?.data?.id);
      })
      .addCase(deviceRegisterFn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Signup failed";
      });
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.userDetails || null;
        state.token = action.payload.data.token || null;
        localStorage.setItem("token", action.payload.data.token);
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Signup failed";
      });
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.userDetails || null;
        state.token = action.payload.data.token || null;
        localStorage.setItem("token", action.payload.data.token);
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
