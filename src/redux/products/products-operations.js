import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllProducts } from '../../shared/services/api-products';
import { getDetails } from '../../shared/services/api-details';

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

export const getById = createAsyncThunk('products/getById', async (id, { rejectWithValue }) => {
  try {
    const data = await getDetails(id);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
