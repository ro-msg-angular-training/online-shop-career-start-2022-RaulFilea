import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductOrder} from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  oneProductInOrder: ProductOrder[] = [];

  constructor(private http: HttpClient) {
  }

  addToCart(prodID: number) {
    let oneProductInOrder = this.oneProductInOrder.find(productOrder => productOrder.productId === prodID);
    if (oneProductInOrder === undefined) {
      this.oneProductInOrder.push({ productId: prodID, quantity: 1 });
    } else {
      oneProductInOrder.quantity += 1;
    }
  }

  getItems() {
    return this.oneProductInOrder;
  }

  clearCart() {
    this.oneProductInOrder = [];
    alert("Cart cleared! Returning to Product List")
    return this.oneProductInOrder;
  }


  checkout(): Observable<string> {
    const data = { customer: localStorage.getItem('username'), products: this.oneProductInOrder };
    alert ("Customer " + localStorage.getItem('username') + " finished an order.")
    this.oneProductInOrder = [];
    return this.http.post(environment.backendURL + '/orders', data, { responseType: 'text' });
  }
}
