import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { getAllShoes, getById } from './products-operations';

const customArrThunks = [getAllShoes, getById];

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
const handleFulfilledDetails = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.detailsItem = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setToFavorite: (state, { payload }) => {
      const product = state.items.find(item => item._id === payload);

      if (product) {
        state.favorites.push(product._id);
      }
    },
    removeFromFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(item => item !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    resetFilter: state => {
      state.filter = {};
    }
  },
  extraReducers: builder => {
    const { pending, rejected } = status;

    builder
      .addCase(getAllShoes.fulfilled, handleFulfilled)
      .addCase(getById.fulfilled, handleFulfilledDetails)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  }
});

export const { setToFavorite, removeFromFavorite, setFilter, resetFilter } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
