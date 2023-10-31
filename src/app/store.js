import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import { combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persitConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  allCart: cartReducer,
});

const persistedReducer = persistReducer(persitConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../features/cartSlice";

// export const store = configureStore({
//   reducer: {
//     allCart: cartReducer,
//   },
// });
