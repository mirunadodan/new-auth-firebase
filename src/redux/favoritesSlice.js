import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const itemInFavorites = state.favorites.find((item) => item.id === action.payload.id);

      if (itemInFavorites) {
        itemInFavorites.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromFavorites: (state, action) => {
      const removeItem = state.favorites.filter((item) => item.id !== action.payload);
      state.favorites = removeItem;
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const {
  addToFavorites,
  removeFromFavorites,
} = favoritesSlice.actions;