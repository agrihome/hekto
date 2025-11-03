import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage on initialization
const loadCartFromStorage = () => {
  if (typeof window === "undefined") return [];
  
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error);
    return [];
  }
};

const saveCartToStorage = (cart) => {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
};

const initialState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { name } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ name, qty: 1 });
      }

      saveCartToStorage(state.items);
    },
    removeFromCart: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter((item) => item.name !== name);
      saveCartToStorage(state.items);
    },
    updateQuantity: (state, action) => {
      const { name, qty } = action.payload;
      const item = state.items.find((item) => item.name === name);

      if (item) {
        if (qty <= 0) {
          state.items = state.items.filter((item) => item.name !== name);
        } else {
          item.qty = qty;
        }
      }

      saveCartToStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },
    loadCart: (state) => {
      state.items = loadCartFromStorage();
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, loadCart } =
  cartSlice.actions;

export default cartSlice.reducer;

