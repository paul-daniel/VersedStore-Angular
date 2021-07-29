import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CheckoutStepService } from 'src/app/services/checkout/checkout-step.service';
import { CartProductsService } from 'src/app/services/Products/cart-products.service';
@Component({
  selector: 'app-footer-checkout',
  templateUrl: './footer-checkout.component.html',
  styleUrls: ['./footer-checkout.component.scss'],
})
export class FooterCheckoutComponent implements OnInit {
  @Output() next: EventEmitter<void> = new EventEmitter();
  step: number = 0;
  total: number = 0;
  constructor(
    private checkoutService: CheckoutStepService,
    private cartService: CartProductsService
  ) {}

  ngOnInit(): void {
    this.step = this.checkoutService.getCurrentStepIdx();
    this.total = this.cartService.calcTotal();
  }

  nextStep(): void {
    this.checkoutService.nextStep();
    this.step = this.checkoutService.getCurrentStepIdx();
    this.next.emit();
  }
}
