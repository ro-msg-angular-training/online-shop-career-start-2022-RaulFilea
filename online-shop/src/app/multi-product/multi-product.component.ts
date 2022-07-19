import { Component, OnInit } from '@angular/core';
import {products} from "../products";

@Component({
  selector: 'app-multi-product',
  templateUrl: './multi-product.component.html',
  styleUrls: ['./multi-product.component.scss']
})
export class MultiProductComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
