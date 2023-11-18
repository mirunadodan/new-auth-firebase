import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { ...action.payload, quantity: 1 };
      }
    },
    removeFromCart: 
    (state, action) => {
      console.log(action.payload) //action.payload este tot obiectul, inclusiv id
      const removeItem = state.items.filter((item) => item.id !== action.payload.id);
      state.items = removeItem;
      console.log(removeItem) 
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      state.items[id].quantity++;
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      state.items[id].quantity--; 
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
