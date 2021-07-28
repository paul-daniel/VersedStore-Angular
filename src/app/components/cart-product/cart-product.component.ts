import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/Product';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Input() cartProduct: Product;
  @Output() removeProduct: EventEmitter<number> = new EventEmitter();
  faCoffee = faCoffee;
  constructor(private toastr: ToastrService) {
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
    this.toastr.info(
      `${this.cartProduct.name} removed from cart 😢`,
      'Remove Product'
    );
  }
}
