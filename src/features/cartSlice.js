import { createSlice } from "@reduxjs/toolkit";
import products from "../app/data";

const cartItems =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const wishlistItems =
  localStorage.getItem("wishlist") !== null
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];

const ItemsQuantity =
  localStorage.getItem("Total_Quantity") !== null
    ? JSON.parse(localStorage.getItem("Total_Quantity"))
    : 0;

const ItemsPrice =
  localStorage.getItem("Total_Price") !== null
    ? JSON.parse(localStorage.getItem("Total_Price"))
    : 0;

const initialState = {
  cart: cartItems,
  wishlist: wishlistItems,
  products: products,
  totalQuantity: ItemsQuantity,
  totalPrice: ItemsPrice,
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
      localStorage.setItem(
        "cart",
        JSON.stringify(state.cart.map((item) => item))
      );
    },

    addWishlist: (state, action) => {
      const wish = state.wishlist.find((item) => item.id === action.payload.id);
      if (!wish) {
        state.wishlist.push(action.payload);
      } else alert("kapil");
      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.wishlist.map((item) => item))
      );
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
      // localStorage.setItem(
      //   "Total_Quantity",
      //   JSON.stringify(state.totalQuantity)
      // );
      // localStorage.setItem("Total_Price", JSON.stringify(state.totalPrice));
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
      const userData = action.payload.user.name;
      state.isAuthenticated = true;
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem(
        "isAuthentication",
        JSON.stringify(state.isAuthenticated)
      );
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      localStorage.setItem(
        "isAuthentication",
        JSON.stringify(state.isAuthenticated),
        localStorage.removeItem("user")
      );
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
