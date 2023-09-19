import { createSlice } from '@reduxjs/toolkit';

// export const addToCart = createAction('addToCart');
// export const removeFromCart = createAction('removeFromCart');

import { initialState } from './initialState';

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const productIdx = state.cartItems.findIndex(({ _id }) => _id === payload._id);
      if (productIdx >= 0) {
        state.cartItems[productIdx].cartQuantity += 1;
      } else {
        const product = { ...payload, cartQuantity: 1 };
        state.cartItems.push(product);
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(({ _id }) => _id !== payload._id);
    },
    setClearCart: state => {
      state.cartItems = [];
    },
    setOpenCart: (state, { payload }) => {
      state.cartState = payload;
    },
    setCloseCart: (state, { payload }) => {
      state.cartState = payload;
    },
    setIncrementProduct: (state, { payload }) => {
      const productIdx = state.cartItems.findIndex(item => item._id === payload.item._id);
      if (state.cartItems[productIdx].cartQuantity >= 1) {
        state.cartItems[productIdx].cartQuantity += 1;
      }
    },
    setDecrementProduct: (state, { payload }) => {
      const productIdx = state.cartItems.findIndex(item => item._id === payload.item._id);
      if (state.cartItems[productIdx].cartQuantity > 1) {
        state.cartItems[productIdx].cartQuantity -= 1;
      }
    },
    setGetTotals: state => {
      const { totalAmount, totalQuantity } = state.cartItems.reduce(
        (acc, item) => {
          const { price, cartQuantity } = item;
          const totalPrice = price * cartQuantity;

          acc.totalAmount += totalPrice;
          acc.totalQuantity += cartQuantity;

          return acc;
        },
        { totalAmount: 0, totalQuantity: 0 }
      );

      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
    }
  },
  extraReducers: builder => {
    // builder
    //   .addCase(addToCart, (state, { payload }) => {
    //     const productIdx = state.cartItems.findIndex(({ _id }) => _id === payload._id);
    //     if (productIdx >= 0) {
    //       state.cartItems[productIdx].cartQuantity += 1;
    //     } else {
    //       const product = { ...payload, cartQuantity: 1 };
    //       state.cartItems.push(product);
    //     }
    //   })
    //   .addCase(removeFromCart, (state, { payload }) => {
    //     state.cartItems = state.cartItems.filter(({ _id }) => _id !== payload._id);
    //   });
  }
});

export const {
  addToCart,
  removeFromCart,
  setOpenCart,
  setCloseCart,
  setClearCart,
  setIncrementProduct,
  setDecrementProduct,
  setGetTotals
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
