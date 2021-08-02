import { Component, OnInit } from '@angular/core';
import { CheckoutStepService } from 'src/app/services/checkout/checkout-step.service';
import { CartProductsService } from 'src/app/services/Products/cart-products.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Product } from 'src/app/models/Product';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s 1s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.5s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CheckoutComponent implements OnInit {
  step: string = '';
  cart: Product[] = [];
  constructor(
    private checkoutStep: CheckoutStepService,
    private cartService: CartProductsService
  ) {}

  ngOnInit(): void {
    this.step = this.checkoutStep.getCurrentStep();
    this.cart = this.cartService.getProductInCart();
  }

  changeStep(): void {
    this.step = this.checkoutStep.getCurrentStep();
  }

  reset(): void {
    this.checkoutStep.reset();
    this.cartService.reset();
  }
}
