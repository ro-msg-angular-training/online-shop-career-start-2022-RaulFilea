import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  addProduct,
  addProductError,
  addProductSuccess,
  getProduct, getProductFailure,
  getProductSucces,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
  removeProduct,
  removeProductError,
  removeProductSucces,
  updateProduct,
  updateProductFailure,
  updateProductSuccess
} from "../actions/product.actions";
import {from, of} from "rxjs";
import {catchError, concatMap, map, switchMap} from 'rxjs/operators';
import {ProductService} from "../../services/product-service";
import {Product} from "../../models/products";


@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private productService: ProductService,
  ) {
  }

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        from(this.productService.getProducts()).pipe(
          map((products) => loadProductsSuccess({products: products})),
          catchError((error) => of(loadProductsFailure({error})))
        )
      )
    )
  );

  saveProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProduct),
      switchMap((action) => this.productService.addNewProduct(action.product)
        .pipe(
          map((product: any) => addProductSuccess({product})),
          catchError((response) => of(addProductError({response})))
        )
      ),
    ),
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeProduct),
      switchMap((action) => this.productService.deleteProduct(action.id)
        .pipe(map(() => action.id),
          map(id => removeProductSucces({id})),
          catchError((response) => of(removeProductError({response})))
        )),
    ),
  );

  getProduct$ = createEffect(() =>
    this.actions$.pipe(
      // ofType(getProduct),
      // switchMap((action) => this.productService.getProductDetails(action.id)
      //   .pipe(map(() => action.product),
      //     map((product: Product) => getProductSucces({product})),
      //     catchError((response) => of(getProductFailure({response})))
      //   )),
      // ),
      ofType(getProduct),
      concatMap(action =>
          this.productService.getProductDetails(action.id)
      ),
      map((product) => getProductSucces({product: product})))
  );


  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProduct),
      switchMap((action) => this.productService.updateProduct(action.product, action.id)
        .pipe(map(() => action.product),
          map((product: Product) => updateProductSuccess({product})),
          catchError((response) => of(updateProductFailure({response})))
        )
      ),
    ),
  )
}

