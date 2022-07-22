import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/products";
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
