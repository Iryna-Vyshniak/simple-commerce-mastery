import { instance } from './instance';

export const getAllProducts = async page => {
  try {
    const response = await instance.get('/products', {
      params: {
        page,
        limit: 10
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
