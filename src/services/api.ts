// services/api.ts
import axios from 'axios';
import { Product } from '../types/product';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (searchQuery?: string): Promise<Product[]> => {
  const response = await axios.get(`${API_URL}/search?q=${searchQuery}`);
  return response.data.products;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
