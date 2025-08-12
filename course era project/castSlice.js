// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Will be an array of { ...product, quantity: 1 }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action: Add an item to the cart
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      if (!existingItem) {
        state.items.push({ ...product, quantity: 1 });
      }
      // Note: The rubric says the button should be disabled after adding.
      // So we don't need to handle increasing quantity here.
    },
    // Action: Increase item quantity
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    // Action: Decrease item quantity
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      // If item exists and quantity is more than 1, decrement
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    // Action: Remove an item from the cart
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
  },
});

// Export the actions so we can use them in our components
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;