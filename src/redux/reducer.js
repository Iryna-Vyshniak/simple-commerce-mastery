import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { productsReducer } from './products/products-slice';
import { cartReducer } from './cart/cart-slice';
import { reviewsReducer } from './reviews/reviews-slice';

const persistCartConfig = {
  key: 'cart',
  storage
};

const persistProductConfig = {
  key: 'products',
  storage,
  whitelist: ['items', 'detailsItem', 'favorites', 'filter']
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);

const persistedProductsReducer = persistReducer(persistProductConfig, productsReducer);

export const rootReducer = combineReducers({
  products: persistedProductsReducer,
  cart: persistedCartReducer,
  reviews: reviewsReducer
});
