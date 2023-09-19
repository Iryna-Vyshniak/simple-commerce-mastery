import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllProducts } from '../../shared/services/api-products';

export const getAllShoes = createAsyncThunk(
  'products/getAll',
  async (page, { rejectWithValue }) => {
    try {
      const { products } = await getAllProducts(page);
      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
