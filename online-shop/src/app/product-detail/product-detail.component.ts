import {Component, OnDestroy, OnInit} from '@angular/core';
import { Location } from "@angular/common";
import { Product } from "../products";
import { ActivatedRoute } from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {ProductService} from "../services/product-service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product!: Product;
  productsSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsSubscription = this.productService.getProductDetails(id).subscribe(
      (response) => this.product = response,
      (error) => {alert(error.message)}
    );
  }

  goBack(): void {
    this.location.back();
  }

  addToCart() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  }

  deleteProduct() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.deleteProduct(id);
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
