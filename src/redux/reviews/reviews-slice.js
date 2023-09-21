import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getAllReviews } from './reviews-operations';
import { initialState } from './initialState';

const customArrayThunks = [getAllReviews];

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected'
};

const fn = status => customArrayThunks.map(el => el[status]);

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.reviews = payload;
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: builder => {
    const { pending, rejected } = status;

    builder
      .addCase(getAllReviews.fulfilled, handleFulfilled)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  }
});

export const reviewsReducer = reviewsSlice.reducer;
