import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Product} from "../models/products";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ProductService} from "../services/product-service";
import {CartService} from "../services/cart-service";
import {AuthenticationService} from "../services/authentication.service";
import {admin} from "../utils";
import {Store} from "@ngrx/store";
import {getProduct, removeProduct} from "../store/actions/product.actions";
import {AppState} from "../store/state/app.state";
import {selectOneProduct} from "../store/selectors/product.selectors";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product = this.store.select(selectOneProduct);
  productsSubscription?: Subscription;
  hasAdminRole = this.authenticationService.hasRoleType(admin);
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private productService: ProductService,
    private cartService: CartService,
    public authenticationService: AuthenticationService,
    private store: Store<AppState>,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id != null) {
      this.store.dispatch(getProduct({id: this.id}));
    }
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product.id);
    window.alert('Your product has been added to the cart!');
  }

  deleteProduct(): void {
    if (this.id != null) {
      this.store.dispatch(removeProduct({id: this.id}))
      alert("Product with ID " + this.id + " has been successfully deleted!");
      this.router.navigateByUrl('');
    }
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
