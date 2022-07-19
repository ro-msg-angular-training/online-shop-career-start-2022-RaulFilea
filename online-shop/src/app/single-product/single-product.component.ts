import { Component, OnInit } from '@angular/core';
import {products} from "../products";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  productsList = products;
  constructor() { }

  ngOnInit(): void {
  }

}
