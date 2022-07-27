import {createSelector} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {ProductState} from "../state/product.state";

export const selectProductsState = (state: AppState) => state.productsState;

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductState) => state.products
);

export const selectOneProduct = createSelector(
  selectProductsState,
  (state: ProductState) => state.selectedProduct
)
