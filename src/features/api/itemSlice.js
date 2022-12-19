import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./axios";
const initialState = {
  loading: false,
  item: {},
  itemData: [],
  errors: "",
  filters: {},
};

export const createItemListing = createAsyncThunk(
  "item/createItemListing",
  async (values, { rejectWithValue }) => {
    try {
      await axios.post("/item", values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchallItems = createAsyncThunk(
  "item/fetchallItems",
  async (values, { rejectWithValue }) => {
    try {
      const data = await axios.get("/item");
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchItemListings = createAsyncThunk(
  "item/fetchItemListings",
  async (id, { rejectWithValue }) => {
    try {
      const data = await axios.get("/item/seller/" + id);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchItem = createAsyncThunk(
  "item/fetchItem",
  async (id, { rejectWithValue }) => {
    try {
      const data = await axios.get("/item/" + id);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchItemsByfilter = createAsyncThunk(
  "item/fetchItemsByfilter",
  async (value, { rejectWithValue }) => {
    try {
      const data = await axios.get("/item/filters/filter?" + value);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getHomeItems = createAsyncThunk(
  "item/getHomeItems",
  async (value, { rejectWithValue }) => {
    try {
      const Data = await axios.get("/item/home");
      return Data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createItemListing.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createItemListing.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = "";
    });
    builder.addCase(createItemListing.rejected, (state, action) => {
      state.loading = false;
      state.errors = { ...action.payload };
    });

    builder.addCase(fetchallItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchallItems.fulfilled, (state, action) => {
      state.loading = false;
      state.itemData = [...action.payload];
      state.errors = "";
    });
    builder.addCase(fetchallItems.rejected, (state, action) => {
      state.loading = false;
      state.itemData = [];
      state.errors = { ...action.payload };
    });

    builder.addCase(fetchItemListings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItemListings.fulfilled, (state, action) => {
      state.loading = false;
      state.itemData = action.payload;
      state.errors = "";
    });
    builder.addCase(fetchItemListings.rejected, (state, action) => {
      state.loading = false;
      state.itemData = [];
      state.errors = { ...action.payload };
    });

    builder.addCase(fetchItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItem.fulfilled, (state, action) => {
      state.loading = false;
      state.item = action.payload;
      state.errors = "";
    });
    builder.addCase(fetchItem.rejected, (state, action) => {
      state.loading = false;
      state.item = {};
      state.errors = { ...action.payload };
    });

    builder.addCase(fetchItemsByfilter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItemsByfilter.fulfilled, (state, action) => {
      state.loading = false;
      state.itemData = action.payload;
      state.errors = "";
    });
    builder.addCase(fetchItemsByfilter.rejected, (state, action) => {
      state.loading = false;
      state.itemData = [];
      state.errors = { ...action.payload };
    });

    builder.addCase(getHomeItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHomeItems.fulfilled, (state, action) => {
      state.loading = false;
      state.itemData = action.payload;
      state.errors = "";
    });
    builder.addCase(getHomeItems.rejected, (state, action) => {
      state.loading = false;
      state.itemData = [];
      state.errors = { ...action.payload };
    });
  },
});

export default itemSlice.reducer;
export const { setFilters, clearFilters } = itemSlice.actions;
