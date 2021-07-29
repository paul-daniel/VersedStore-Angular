import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
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
import { SliderComponent } from './components/slider/slider.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ResumeComponent } from './components/resume/resume.component';
import { RadioGroupsComponent } from './components/radio-groups/radio-groups.component';
import { CheckingFinalComponent } from './components/checking-final/checking-final.component';
import { NavbarCheckoutComponent } from './components/navbar-checkout/navbar-checkout.component';
import { FooterCheckoutComponent } from './components/footer-checkout/footer-checkout.component';

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
    SliderComponent,
    CheckoutFormComponent,
    CheckoutComponent,
    ShippingFormComponent,
    ResumeComponent,
    RadioGroupsComponent,
    CheckingFinalComponent,
    NavbarCheckoutComponent,
    FooterCheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
