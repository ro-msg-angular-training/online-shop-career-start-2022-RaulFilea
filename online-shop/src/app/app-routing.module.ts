import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiProductComponent } from "./multi-product/multi-product.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
  {path: 'products', component: MultiProductComponent,  title: "All Products"},
  {path: 'products/:id', component: ProductDetailComponent, title: "More Details"},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, title: "ERR404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
