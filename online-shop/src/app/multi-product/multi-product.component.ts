import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../products";
import {Subscription} from "rxjs";
import {ProductService} from "../services/product-service";

@Component({
  selector: 'app-multi-product',
  templateUrl: './multi-product.component.html',
  styleUrls: ['./multi-product.component.scss']
})

export class MultiProductComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  productsSubscription?: Subscription;

  ngOnInit(): void {
    // const thisObserver = {
    //   next: (resp) => this.products = resp,
    //   error: (err) => alert(err.message),
    //   complete: () => console.info('complete')
    // }
    // this.productsSubscription = this.productService.getProducts().subscribe(thisObserver);
    this.productsSubscription = this.productService.getProducts().subscribe(
      (response) => {this.products = response},
      (error) => {alert(error.message)});
  }

  constructor(private http: HttpClient,
              private productService: ProductService) {
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
