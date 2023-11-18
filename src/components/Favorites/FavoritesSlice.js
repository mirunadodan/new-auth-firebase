import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { ...action.payload, quantity: 1 };
      }
    },
    removeFromFavorites: (state, action) => {
      console.log(action.payload) //action.payload este tot obiectul, inclusiv id
      const removeItem = state.items.filter((item) => item.id !== action.payload.id);
      state.items = removeItem;
      console.log(removeItem) 
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const {
  addToFavorites,
  removeFromFavorites,
} = favoritesSlice.actions;