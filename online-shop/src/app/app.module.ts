import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MultiProductComponent} from './multi-product/multi-product.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {EditComponent} from './edit/edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AddNewComponent} from './add-new/add-new.component';
import {LoginComponent} from './login/login.component';
import {ActionReducerMap, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {productReducer} from "./store/reducers/product.reducers";
import {ProductEffects} from "./store/effects/product.effects";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {AppState} from "./store/state/app.state";
import {ProductState} from "./store/state/product.state";
import {reducers} from "./store/reducers";

@NgModule({
  declarations: [
    AppComponent,
    MultiProductComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    EditComponent,
    AddNewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductEffects]),
    BrowserAnimationsModule,
    MatListModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
