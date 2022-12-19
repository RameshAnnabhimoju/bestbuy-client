import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./axios";
const initialState = {
  loading: false,
  sellerData: {},
  errors: "",
};

export const sellerSignup = createAsyncThunk(
  "seller/sellerSignup",
  async (values, { rejectWithValue }) => {
    try {
      const data = await axios.post("/seller", {
        ...values,
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const sellerLogin = createAsyncThunk(
  "seller/sellerLogin",
  async (values, { rejectWithValue }) => {
    try {
      const data = await axios.post("/seller/login", {
        ...values,
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    logout: (state) => {
      state.sellerData = {};
    },
    loggedin: (state, action) => {
      state.sellerData = { ...state.sellerData, isLoggedin: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sellerSignup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sellerSignup.fulfilled, (state, action) => {
      state.loading = false;
      state.sellerData = action.payload;
      state.errors = "";
    });
    builder.addCase(sellerSignup.rejected, (state, action) => {
      state.loading = false;
      state.sellerData = {};
      state.errors = action.payload.msg;
    });

    builder.addCase(sellerLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sellerLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.sellerData = action.payload;
      state.errors = "";
    });
    builder.addCase(sellerLogin.rejected, (state, action) => {
      state.loading = false;
      state.sellerData = {};
      state.errors = action.payload;
    });
  },
});

export default sellerSlice.reducer;
export const { logout } = sellerSlice.actions;
