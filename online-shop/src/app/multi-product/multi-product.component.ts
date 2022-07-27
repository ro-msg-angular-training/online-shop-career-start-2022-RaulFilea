import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ProductService} from "../services/product-service";
import {Store} from "@ngrx/store";
import {loadProducts} from "../store/actions/product.actions";
import {AppState} from "../store/state/app.state";
import {selectAllProducts} from "../store/selectors/product.selectors";

@Component({
  selector: 'app-multi-product',
  templateUrl: './multi-product.component.html',
  styleUrls: ['./multi-product.component.scss']
})

export class MultiProductComponent implements OnInit, OnDestroy {

  products = this.store.select(selectAllProducts);
  productsSubscription?: Subscription;

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
