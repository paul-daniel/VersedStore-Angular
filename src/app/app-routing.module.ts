import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'product/:id', component: ProductDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
