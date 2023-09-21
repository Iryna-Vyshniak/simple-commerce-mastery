import { combineReducers } from '@reduxjs/toolkit';

import { productsReducer } from './products/products-slice';
import { cartReducer } from './cart/cart-slice';
import { reviewsReducer } from './reviews/reviews-slice';

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  reviews: reviewsReducer
});
