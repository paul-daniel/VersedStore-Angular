import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartProductsService } from 'src/app/services/Products/cart-products.service';

@Component({
  selector: 'app-cart-light',
  templateUrl: './cart-light.component.html',
  styleUrls: ['./cart-light.component.scss'],
})
export class CartLightComponent implements OnInit {
  products: Product[] = [];
  constructor(private cartProductService: CartProductsService) {}

  ngOnInit(): void {
    this.products = this.cartProductService.getProductInCart();
  }

  calcTotal(): string {
    const fullPrice = this.products.reduce((total, { price, quantity }) => {
      return total + price * quantity;
    }, 0);
    return fullPrice.toFixed(2);
  }
}
