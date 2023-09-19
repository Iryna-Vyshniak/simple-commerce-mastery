import { combineReducers } from '@reduxjs/toolkit';

import { productsReducer } from './products/products-slice';

export const rootReducer = combineReducers({
  products: productsReducer
});
