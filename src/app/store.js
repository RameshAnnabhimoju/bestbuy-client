import { configureStore } from "@reduxjs/toolkit";
import sellerReducer from "../features/api/sellerSlice";
import itemReducer from "../features/api/itemSlice";
import orderReducer from "../features/api/orderSlice";
import userReducer from "../features/api/userSlice";
import cartReducer from "../features/api/cartSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "bestbuy",
  version: 1,
  storage,
};
const sellerPersistedReducer = persistReducer(persistConfig, sellerReducer);
const orderPersistedReducer = persistReducer(persistConfig, orderReducer);
const cartPersistReducer = persistReducer(persistConfig, cartReducer);
const userPersistReducer = persistReducer(persistConfig, userReducer);
const itemPersistReducer = persistReducer(persistConfig, itemReducer);

export const store = configureStore({
  reducer: {
    seller: sellerPersistedReducer,
    order: orderPersistedReducer,
    user: userPersistReducer,
    cart: cartPersistReducer,
    item: itemPersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;
