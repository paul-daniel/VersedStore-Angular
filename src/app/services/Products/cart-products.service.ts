import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartProductsService {
  cart: Product[] = [];

  constructor() {}

  addProductToCart(cartProduct: Product): void {
    this.cart.unshift(cartProduct);
  }

  getProductInCart(): Product[] {
    return this.cart;
  }
}
