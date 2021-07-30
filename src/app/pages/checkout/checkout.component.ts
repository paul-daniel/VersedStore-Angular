import { Component, OnInit } from '@angular/core';
import { CheckoutStepService } from 'src/app/services/checkout/checkout-step.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
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
  constructor(private checkoutStep: CheckoutStepService) {}

  ngOnInit(): void {
    this.step = this.checkoutStep.getCurrentStep();
  }

  next(): void {
    this.step = this.checkoutStep.getCurrentStep();
  }
}
