import { createSlice } from "@reduxjs/toolkit";
import product from "../productData";

const initialState = {
  cart: [],
  wishlist: [],
  products: product,
  totalQuantity: 0,
  totalPrice: 0,
  isAuthenticated: false,
  user: {
    id: null,
    name: null,
    address: null,
    birth: null,
    contact: null,
    username: null,
    password: null,
  },
};
const cartSlice = createSlice({
  name: "allCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    addWishlist: (state, action) => {
      const wish = state.wishlist.find((item) => item.id === action.payload.id);
      if (!wish) {
        state.wishlist.push(action.payload);
      } else alert("kapil");
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    removeItemWish: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },

    login: (state, action) => {
      const userData = action.payload.user;
      state.isAuthenticated = true;
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify(userData));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const {
  addToCart,
  addWishlist,
  getCartTotal,
  removeItem,
  removeItemWish,
  increaseItemQuantity,
  decreaseItemQuantity,
  login,
  logout,
} = cartSlice.actions;

export default cartSlice.reducer;
