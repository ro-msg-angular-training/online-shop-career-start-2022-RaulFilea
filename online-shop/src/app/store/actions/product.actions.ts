import {HttpErrorResponse} from "@angular/common/http";
import {createAction, props} from "@ngrx/store";
import {Product} from "../../models/products";

/**
 * All Products List
 */
export const loadProducts = createAction(
  '[Products] Load Products'
)

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);

/**
 * Single Product
 */
export const getProduct = createAction(
  '[Product] Get Product',
  props<{ id: number }>()
)

export const getProductSucces = createAction(
  '[Product] Get Product Success',
  props<{ product: Product }>()
)

export const getProductFailure = createAction(
  '[Product] Get Product Error',
  props<{ response: HttpErrorResponse }>()
)

export const removeProduct = createAction(
  '[Product] Remove Product',
  props<{ id: number }>()
)

export const removeProductSucces = createAction(
  '[Product] Remove Product Success',
  props<{ id: number }>()
)

export const removeProductError = createAction(
  '[Product] Remove Product Error',
  props<{ response: HttpErrorResponse }>()
)

/**
 * Add Product to List
 */
export const addProduct = createAction(
  '[Add Product] Add Product',
  props<{ product: Product }>()
)

export const addProductSuccess = createAction(
  '[Add Product] Add Product Success',
  props<{ product: Product }>()
)

export const addProductError = createAction(
  '[Add Product] Add Product Error',
  props<{ response: HttpErrorResponse }>()
)

/**
 * Update Existing Product
 */
export const updateProduct = createAction(
  '[Update Product] Update Product',
  props<{ product: Product, id: number }>()
)

export const updateProductSuccess = createAction(
  '[Update Product] Update Product Success',
  props<{ product: Product }>()
)

export const updateProductFailure = createAction(
  '[Update Product] Update Product Error',
  props<{ response: HttpErrorResponse }>()
)
