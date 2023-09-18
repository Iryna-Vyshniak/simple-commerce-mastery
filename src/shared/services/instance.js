import axios from 'axios';
const API = import.meta.env.VITE_API_KEY;

export const instance = axios.create({
  baseURL: `${API}/api`
});
