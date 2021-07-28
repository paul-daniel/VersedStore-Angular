import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartProduct } from 'src/app/models/CartProduct';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Input() cartProduct: Product;
  @Output() removeProduct: EventEmitter<number> = new EventEmitter();
  constructor() {
    this.cartProduct = {
      id: 1,
      name: '',
      shortDesc: '',
      description: '',
      contain: '',
      composition: '',
      price: 0,
      url: '',
      alt: '',
      quantity: 1,
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
