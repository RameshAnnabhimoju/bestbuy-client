import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./axios";
const initialState = {
  loading: false,
  cartItems: [],
  cartVisible: false,
  errors: "",
};
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (values, { rejectWithValue, dispatch }) => {
    try {
      await axios
        .post("/cart", {
          ...values,
        })
        .then(() => {
          dispatch(getCartItems(values.user));
        });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (id, { rejectWithValue }) => {
    try {
      const Data = await axios.get("/cart/" + id);
      return Data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async (values, { rejectWithValue, dispatch }) => {
    try {
      await axios.patch("/cart/" + values.id, {
        quantity: values.payload,
      });
      dispatch(getCartItems(values.user));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (values, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete("/cart/" + values.id).then(() => {
        dispatch(getCartItems(values.user));
      });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete("/cart/clear/" + id).then(() => {
        dispatch(getCartItems(id));
      });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartVisibleToggle: (state, action) => {
      state.cartVisible = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = "";
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.errors = { ...action.payload };
    });

    builder.addCase(getCartItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItems = action.payload;
      state.errors = "";
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.loading = false;
      state.cartItems = [];
      state.errors = { ...action.payload };
    });

    builder.addCase(updateCartItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCartItem.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = "";
    });
    builder.addCase(updateCartItem.rejected, (state, action) => {
      state.loading = false;
      state.errors = { ...action.payload };
    });

    builder.addCase(removeCartItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = "";
    });
    builder.addCase(removeCartItem.rejected, (state, action) => {
      state.loading = false;
      state.errors = { ...action.payload };
    });

    builder.addCase(clearCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(clearCart.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = "";
    });
    builder.addCase(clearCart.rejected, (state, action) => {
      state.loading = false;
      state.errors = { ...action.payload };
    });
  },
});
export const { cartVisibleToggle } = cartSlice.actions;
export default cartSlice.reducer;
