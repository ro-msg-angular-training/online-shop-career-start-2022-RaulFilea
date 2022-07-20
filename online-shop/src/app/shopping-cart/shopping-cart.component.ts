import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {CartService} from "../services/cart-service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) {}

  items = this.cartService.getItems();

  ngOnInit(): void {
  }

  checkout(): void {
    this.cartService.checkout();
  }
}
