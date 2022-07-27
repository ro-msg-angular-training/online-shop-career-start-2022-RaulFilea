import {createReducer, on} from "@ngrx/store";
import {initialState} from "../state/product.state";
import {
  addProduct,
  getProduct,
  getProductFailure,
  getProductSucces,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
  removeProduct,
  updateProduct
} from "../actions/product.actions";

export const productReducer = createReducer(
  initialState,

  on(loadProducts, (state) => ({...state, status: 'loading'})),

  on(loadProductsSuccess, (state, payload) => ({...state, products: payload.products, error: null, status: 'success'})),

  on(loadProductsFailure, (state, {error}) => ({...state, error: error, status: 'error'})),

  on(getProduct, (state) => ({...state, status: 'loading'})),

  on(getProductSucces, (state, {product}) => ({...state, selectedProduct: product, status: "success", error: null})),

  on(getProductFailure, (state) => ({...state, status: "error", error: null})),

  on(addProduct, (state, {product}) => ({...state, products: [...state.products, product], status: 'loading'})),

  on(removeProduct, (state, {id}) => ({...state, products: state.products.filter((product) => product.id !== id)})),

  on(updateProduct, (state) => ({...state, status: 'loading'}))
)
