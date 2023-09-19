import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { getAllShoes } from './products-operations';

const customArrThunks = [getAllShoes];

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected'
};

const fn = status => customArrThunks.map(el => el[status]);

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    const { pending, rejected } = status;

    builder
      .addCase(getAllShoes.fulfilled, handleFulfilled)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  }
});

export const productsReducer = productsSlice.reducer;