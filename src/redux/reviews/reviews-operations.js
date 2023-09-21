import { createAsyncThunk } from '@reduxjs/toolkit';

import { getReviews } from '../../shared/services/api-reviews';

export const getAllReviews = createAsyncThunk(
  'reviews/getAllReviews',
  async (page = 1, { rejectWithValue }) => {
    try {
      const { reviews } = await getReviews(page);
      return reviews;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
