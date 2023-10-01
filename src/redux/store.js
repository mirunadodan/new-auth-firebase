import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { cartReducer } from "./cartSlice";
import { favoritesReducer } from "./favoritesSlice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,

}

const rootReducer = persistReducer(persistConfig,cartReducer);
const rootReducers = persistReducer(persistConfig,favoritesReducer);


export const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);