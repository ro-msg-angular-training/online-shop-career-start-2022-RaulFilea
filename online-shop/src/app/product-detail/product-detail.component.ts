import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Product} from "../models/products";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {ProductService} from "../services/product-service";
import {CartService} from "../services/cart-service";
import {AuthenticationService} from "../services/authentication.service";
import {environment} from "../../environments/environment";
import {admin} from "../utils";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product!: Product;
  productsSubscription?: Subscription;
  products!: Product[];
  hasAdminRole = this.authenticationService.hasRoleType(admin);

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private productService: ProductService,
    private cartService: CartService,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsSubscription = this.productService.getProductDetails(id).subscribe(
      (response) => this.product = response
    );
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product.id);
    window.alert('Your product has been added to the cart!');
  }

  deleteProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.deleteProduct(id).subscribe(() => {
      this.productService.getProducts().subscribe((products) => {
        this.products = products;
        alert("Product with ID " + id + " has been successfully deleted!");
        this.goBack();
      })
    });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
