import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from "../products";
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
    return this.http.get<Product>(environment.backendURL + "/products/" + id)
  }

  public deleteProduct = (id: number): void => {
    this.http.delete(environment.backendURL + '/products' + id)
      .subscribe(
        (val) => {
          console.log('DELETED Product with id ' + id);
        },
        (error) => {
          console.log('There was an error: ' + error);
        }
      );
  }
}
