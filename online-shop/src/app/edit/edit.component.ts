import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Product} from "../models/products";
import {ProductService} from "../services/product-service";
import {addProduct, getProduct, updateProduct} from "../store/actions/product.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../store/state/app.state";
import {selectOneProduct} from "../store/selectors/product.selectors";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  editProductForm: FormGroup | undefined;
  product: Product | null | undefined;
  selectedProduct = this.store.select(selectOneProduct);

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private editFormBuilder: FormBuilder,
    private productService: ProductService,
    private store: Store<AppState>,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(getProduct({id}));
    this.selectedProduct.subscribe((item) =>
    {
      this.product = item;
      this.editProductForm = this.editFormBuilder.group({
        prodName: [this.product?.name, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        prodCat: [this.product?.category, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        prodPrice: [this.product?.price, [Validators.required, Validators.min(3), Validators.max(10000), Validators.pattern("^[1-9][0-9]*$")]],
        prodImg: [this.product?.image, [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
        prodDesc: [this.product?.description, [Validators.required, Validators.minLength(20), Validators.maxLength(5000)]],
      });
    });
  }

  updateProduct() {
    if(this.product) {
      if (this.editProductForm?.valid) {
        this.product = {
          id: this.product.id,
          name: this.editProductForm?.value.prodName,
          category: this.editProductForm?.value.prodCat,
          image: this.editProductForm?.value.prodImg,
          price: this.editProductForm?.value.prodPrice,
          description: this.editProductForm?.value.prodDesc,
        }
        this.store.dispatch(updateProduct({product: this.product, id: this.product.id}));
        alert("Success!")
        this.router.navigateByUrl('');
      } else {
        alert("Invalid data. Retry?")
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}
