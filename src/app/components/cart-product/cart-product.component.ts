import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartProduct } from 'src/app/models/CartProduct';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Input() cartProduct: CartProduct;
  @Output() removeProduct: EventEmitter<number> = new EventEmitter();
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

  removeOneQty(): void {
    if (this.cartProduct.quantity - 1 === 0) {
      this.remove(this.cartProduct.id);
    } else {
      this.cartProduct.quantity -= 1;
    }
  }

  addOneQty(): void {
    this.cartProduct.quantity += 1;
  }

  remove(id: number): void {
    this.removeProduct.emit(id);
  }
}
