import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart-service";
import {Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private location: Location,
    private router: Router
  ) {
  }

  items = this.cartService.getItems();

  ngOnInit(): void {
  }

  checkout(): void {
    this.cartService.checkout().subscribe(() => {
      alert("Checkout complete!");
      this.router.navigateByUrl('');
    });
  }

  clearCart() {
    this.cartService.clearCart();
    this.router.navigateByUrl('');
  }
}
