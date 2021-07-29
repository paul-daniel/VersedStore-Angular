import { Component, OnInit } from '@angular/core';
import { CheckoutStepService } from 'src/app/services/checkout/checkout-step.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  step: string = '';
  constructor(private checkoutStep: CheckoutStepService) {}

  ngOnInit(): void {
    this.step = this.checkoutStep.getCurrentStep();
  }

  next(): void {
    this.step = this.checkoutStep.getCurrentStep();
  }
}
