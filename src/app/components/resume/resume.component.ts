import { Component, OnInit } from '@angular/core';
import { CartProductsService } from 'src/app/services/Products/cart-products.service';
import { CheckoutStepService } from 'src/app/services/checkout/checkout-step.service';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  constructor(
    private cartService: CartProductsService,
    private checkStepService: CheckoutStepService
  ) {}

  ngOnInit(): void {}

  reset(): void {
    this.cartService.reset();
    this.checkStepService.reset();
  }
}
