import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Product} from "../products";
import {ProductService} from "../services/product-service";

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
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.productService.getProductDetails(id).subscribe((item: Product) =>
    {
      this.product = item;
      this.addProductForm = this.editFormBuilder.group({
        prodName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        prodCat: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        prodPrice: ['', [Validators.required, Validators.min(3), Validators.max(10000), Validators.pattern("^[1-9][0-9]*$")]],
        prodImg: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
        prodDesc: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(5000)]],
      });
      this.addProductForm.valueChanges.subscribe(console.log);
    });
  }

  updateProduct() {
    if (this.product) {
      if (this.addProductForm?.valid) {
        this.product = {
          id: this.product.id,
          name: this.addProductForm?.value.prodName,
          category: this.addProductForm?.value.prodCat,
          image: this.addProductForm?.value.prodImg,
          price: this.addProductForm?.value.prodPrice,
          description: this.addProductForm?.value.prodDesc,
        }
        this.productService.addNewProduct(this.product).subscribe(() =>
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
