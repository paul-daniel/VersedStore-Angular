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
      return;
    }
    console.log(this.cart[idx].quantity, cartProduct.quantity);
    this.cart[idx].quantity += cartProduct.quantity;
    console.log(this.cart[idx].quantity, cartProduct.quantity);
    console.log(this.cart);
  }

  removeProductFromCart(id: number): void {
    const idx = this.cart.findIndex((product) => product.id === id);
    if (idx === -1) {
      return;
    }
    this.cart.splice(idx, 1);
  }

  getProductInCart(): Product[] {
    return this.cart;
  }

  calcTotal(): number {
    return this.cart.reduce((total, { price, quantity }) => {
      return total + price * quantity;
    }, 0);
  }

  reset(): void {
    this.cart = [];
  }
}
