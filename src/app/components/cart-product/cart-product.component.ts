import { Component, OnInit, Input } from '@angular/core';
import { CartProduct } from 'src/app/models/CartProduct';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Input() cartProduct: CartProduct;

  constructor() {
    this.cartProduct = {
      id: 1,
      name: '',
      price: 0,
      quantity: 0,
      url: '',
      alt: '',
    };
  }

  ngOnInit(): void {}
}
