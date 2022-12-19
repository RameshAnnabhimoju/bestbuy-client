import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./axios";
const initialState = {
  loading: false,
  orderData: [],
  errors: "",
};
export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (values, { rejectWithValue }) => {
    try {
      await axios.post("/order", values);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getOrder = createAsyncThunk(
  "order/getOrder",
  async (id, { rejectWithValue }) => {
    try {
      const Data = await axios.get("/order/" + id);
      return Data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  "order/updateOrderStatus",
  async (value, { rejectWithValue }) => {
    try {
      await axios.patch("/order/update" + value.id, {
        orderStatus: value.payload,
      });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchOrdersByfilter = createAsyncThunk(
  "order/fetchOrdersByfilter",
  async (value, { rejectWithValue }) => {
    try {
      const data = await axios.get("/order/filter?" + value);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = "";
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.loading = false;
      state.errors = { ...action.payload };
    });

    builder.addCase(updateOrderStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateOrderStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = "";
    });
    builder.addCase(updateOrderStatus.rejected, (state, action) => {
      state.loading = false;
      state.errors = { ...action.payload };
    });

    builder.addCase(getOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orderData = action.payload;
      state.errors = "";
    });
    builder.addCase(getOrder.rejected, (state, action) => {
      state.loading = false;
      state.orderData = [];
      state.errors = { ...action.payload };
    });
  },
});
export default orderSlice.reducer;
