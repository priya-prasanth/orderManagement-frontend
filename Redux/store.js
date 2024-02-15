import {configureStore} from "@reduxjs/toolkit"
import { combineReducers } from "redux";
import { productDetailsReducer, productListReducer } from "./Reducers/ProductReducers.js";
import { cartReducer } from "./Reducers/CartReducers.js";



const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart:cartReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartitem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : []

const initialState = {
  cart: {
    cartItems:cartItemsFromLocalStorage,
  },
};



export const store = configureStore({reducer}, initialState);

// export default store;
