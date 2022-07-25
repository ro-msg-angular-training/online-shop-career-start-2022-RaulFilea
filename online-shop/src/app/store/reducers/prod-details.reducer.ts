import {Product} from "../../models/products";
import {createReducer, on} from "@ngrx/store";
import {removeProd} from "../actions/prod-details.actions";

export interface ProdState {
  products: Product[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProdState = {
  products: [],
  error: '',
  status: 'pending',
};

export const prodDetailReducer = createReducer(
  initialState,

  on(removeProd, (state, {id}) => ({
  ...state,
  products: state.products.filter((product) => product.id !== id),
})),
)
