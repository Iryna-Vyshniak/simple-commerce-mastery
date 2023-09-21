import { instance } from './instance';

export const getReviews = async page => {
  try {
    const response = await instance.get('/reviews', { params: { page, limit: 10 } });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
