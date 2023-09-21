import { instance } from './instance';

export const getDetails = async id => {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
