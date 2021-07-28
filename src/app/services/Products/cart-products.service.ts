import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartProductsService {
  cart: Product[] = [];

  constructor() {}

  addProductToCart(cartProduct: Product): void {
    const idx = this.cart.findIndex((product) => product.id === cartProduct.id);
    if (idx === -1) {
      this.cart.unshift(cartProduct);
    } else {
      this.cart[idx].quantity += cartProduct.quantity;
    }
  }

  getProductInCart(): Product[] {
    return this.cart;
  }
}
