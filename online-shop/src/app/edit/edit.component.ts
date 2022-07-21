import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Product} from "../products";
import {ProductService} from "../services/product-service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  editProductForm: FormGroup | undefined;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private editFormBuilder: FormBuilder,
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.productService.getProductDetails(id).subscribe((item: Product) =>
    {
      this.product = item;
      this.editProductForm = this.editFormBuilder.group({
        prodName: [this.product?.name, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        prodCat: [this.product?.category, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        prodPrice: [this.product?.price, [Validators.required, Validators.min(3), Validators.max(10000), Validators.pattern("^[1-9][0-9]*$")]],
        prodImg: [this.product?.image, [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
        prodDesc: [this.product?.description, [Validators.required, Validators.minLength(20), Validators.maxLength(5000)]],
      });
      this.editProductForm.valueChanges.subscribe(console.log);
    });
  }

  updateProduct() {
    if (this.product) {
      if (this.editProductForm?.valid) {
        this.product = {
          id: this.product.id,
          name: this.editProductForm?.value.prodName,
          category: this.editProductForm?.value.prodCat,
          image: this.editProductForm?.value.prodImg,
          price: this.editProductForm?.value.prodPrice,
          description: this.editProductForm?.value.prodDesc,
        }
        this.productService.updateProduct(this.product, this.product.id).subscribe(() =>
        {
          alert("Successfully updated product!");
          this.goBack();
        });
      } else {
        alert("Invalid data. Retry?")
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}
