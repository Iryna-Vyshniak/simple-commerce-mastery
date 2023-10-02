import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const productIdx = state.cartItems.findIndex(({ _id }) => _id === payload._id);

      if (productIdx >= 0) {
        const currentItem = state.cartItems[productIdx];

        state.cartItems[productIdx].cartQuantity += 1;
        if (!currentItem.sizes) {
          currentItem.sizes = {
            [payload.currentSize]: {
              quantity: 1
            }
          };
        } else if (!currentItem.sizes[payload.currentSize]) {
          currentItem.sizes[payload.currentSize] = {
            quantity: 1
          };
        } else {
          currentItem.sizes[payload.currentSize].quantity += 1;
        }
      } else {
        // Якщо товару немає в корзині, додаємо його з кількістю 1 для кожного розміру.
        const product = {
          ...payload,
          cartQuantity: 1,
          sizes: {
            [payload.currentSize]: {
              quantity: 1
            }
          }
        };
        state.cartItems.push(product);
      }
    },

    removeFromCart: (state, { payload }) => {
      const { _id, currentSize } = payload;
      state.cartItems = state.cartItems.map(item => {
        if (item._id === _id && item.sizes && item.sizes[currentSize]) {
          const newSizes = { ...item.sizes };

          item.cartQuantity -= newSizes[payload.currentSize].quantity;
          delete newSizes[payload.currentSize];

          item.sizes = newSizes;
        }
        return item;
      });
      state.cartItems = state.cartItems.filter(item => item.cartQuantity > 0);
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
      const { _id, currentSize } = payload;
      const productIdx = state.cartItems.findIndex(item => item._id === _id);

      const currentItem = state.cartItems[productIdx];

      if (productIdx !== -1) {
        if (currentItem.sizes[currentSize] && currentItem.sizes[currentSize].quantity >= 1) {
          currentItem.sizes[currentSize].quantity += 1;
          currentItem.cartQuantity += 1;
        }
      }
    },
    setDecrementProduct: (state, { payload }) => {
      const { _id, currentSize } = payload;
      const productIdx = state.cartItems.findIndex(item => item._id === _id);

      const currentItem = state.cartItems[productIdx];

      if (productIdx !== -1) {
        if (currentItem.sizes[currentSize] && currentItem.sizes[currentSize].quantity > 1) {
          currentItem.sizes[currentSize].quantity -= 1;
          currentItem.cartQuantity -= 1;
        }
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
  extraReducers: builder => {}
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
