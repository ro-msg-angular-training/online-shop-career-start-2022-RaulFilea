import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../models/products";
import {ProductService} from "../services/product-service";
import {Store} from "@ngrx/store";
import {addProduct} from "../store/actions/product.actions";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  addProductForm: FormGroup | undefined;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private editFormBuilder: FormBuilder,
    private productService: ProductService,
    private store: Store,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.addProductForm = this.editFormBuilder.group({
      prodName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      prodCat: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      prodPrice: ['', [Validators.required, Validators.min(3), Validators.max(10000), Validators.pattern("^[1-9][0-9]*$")]],
      prodImg: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
      prodDesc: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(5000)]],
    });
  }

  updateProduct() {
    if (this.addProductForm?.valid) {
      this.product = {
        id: Math.floor(Math.random() * (1000 - 50 + 1)) + 51,
        name: this.addProductForm?.value.prodName,
        category: this.addProductForm?.value.prodCat,
        image: this.addProductForm?.value.prodImg,
        price: this.addProductForm?.value.prodPrice,
        description: this.addProductForm?.value.prodDesc,
      }
      this.store.dispatch(addProduct({product: this.product}));
      this.router.navigateByUrl('');
    } else {
      alert("Invalid data. Retry?")
    }
  }

  goBack(): void {
    this.location.back();
  }

}
