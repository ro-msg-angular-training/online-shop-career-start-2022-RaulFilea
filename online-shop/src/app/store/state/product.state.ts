import {Product} from "../../models/products";

export interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
};

export const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  error: '',
  status: 'pending',
};

