import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from "../models/products";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  public getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>(environment.backendURL + "/products");
  };

  public getProductDetails = (id: number): Observable<Product> => {
    return this.http.get<Product>(environment.backendURL + "/products/" + id);
  }

  public deleteProduct = (id: number): Observable<void> => {
    return this.http.delete<void>(environment.backendURL + '/products/' + id);
  }

  updateProduct(product: Product, id: number) {
    return this.http.put(environment.backendURL + '/products/' + id, product);
  }

  addNewProduct(product: Product) {
    return this.http.post(environment.backendURL + '/products', product);
  }
}
