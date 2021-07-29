import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartProductsService } from 'src/app/services/Products/cart-products.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  constructor(private cartProductService: CartProductsService) {}

  ngOnInit(): void {
    this.cartProducts = this.cartProductService.getProductInCart();
  }

  calcTotal(): string {
    const fullPrice = this.cartProducts.reduce((total, { price, quantity }) => {
      return total + price * quantity;
    }, 0);
    return fullPrice.toFixed(2);
  }

  removeProduct(id: number): void {
    this.cartProducts = this.cartProducts.filter(
      (product) => product.id !== id
    );
    this.cartProductService.removeProductFromCart(id);
  }
}
