import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MultiProductComponent} from "./multi-product/multi-product.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {EditComponent} from "./edit/edit.component";
import {AddNewComponent} from "./add-new/add-new.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./guards/login.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent, title: 'Login'},
  //{path: '', canActivate: [LoginGuard], children: [
      {path: 'products', component: MultiProductComponent, title: "All Products"},
      {path: 'products/:id', component: ProductDetailComponent, title: "More Details"},
      {path: 'cart', component: ShoppingCartComponent, title: 'Shopping Cart'},
      {path: 'edit/:id', component: EditComponent, title: 'Edit details'},
      {path: 'add-new', component: AddNewComponent, title: 'Add New Product'},
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent, title: "ERR404"},
    //]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
