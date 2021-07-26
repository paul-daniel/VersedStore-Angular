import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartLightComponent } from './components/cart-light/cart-light.component';
import { ProductCartLightComponent } from './components/product-cart-light/product-cart-light.component';
import { CartComponent } from './components/cart/cart.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    CartLightComponent,
    ProductCartLightComponent,
    CartComponent,
    CartProductComponent,
    NavbarComponent,
    HomeComponent,
    CartPageComponent,
    FooterComponent,
    ProductDetailPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
