import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from "../products";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {
  }

  items: Product[] = [];
  newPost!: Observable<any>;

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  checkout() {
    let data = this.items;
    this.newPost = this.http.post(environment.backendURL + '/orders', data)
  }
}
