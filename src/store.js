import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { cartReducer } from "./components/Cart/CartSlice";
import { favoritesReducer } from "./components/Favorites/FavoritesSlice";
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'

// const persistConfig = {
//   key: 'root',
//   storage,

// }

// const rootReducer = combineReducers({ 
//   cart: cartReducer,
//   favorites: favoritesReducer
// })


// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: rootReducer,
  // reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
// });

// export const persistor = persistStore(store);

export default configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});
