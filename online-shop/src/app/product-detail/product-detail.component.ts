import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Product} from "../products";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ProductService} from "../services/product-service";
import {CartService} from "../services/cart-service";

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
    private productService: ProductService,
    private cartService: CartService
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

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  deleteProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.deleteProduct(id);
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
