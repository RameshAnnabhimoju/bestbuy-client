import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./axios";
const initialState = {
  loading: false,
  userData: {},
  errors: "",
};
export const createUser = createAsyncThunk(
  "user/createUser",
  async (values, { rejectWithValue }) => {
    try {
      const Data = await axios.post("/user", {
        ...values,
      });
      return Data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (values, { rejectWithValue }) => {
    try {
      const data = await axios.post("/user/login", {
        ...values,
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userData = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.errors = "";
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.userData = {};
      state.errors = action.payload.msg;
    });

    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.errors = "";
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.userData = {};
      state.errors = action.payload;
    });
  },
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
