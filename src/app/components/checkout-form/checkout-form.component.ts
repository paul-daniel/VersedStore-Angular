import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardDetail } from 'src/app/models/CardDetail';
import { CheckoutStepService } from 'src/app/services/checkout/checkout-step.service';
import { CheckoutStoreService } from 'src/app/services/checkout/checkout-store.service';
@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent implements OnInit {
  @Output() step: EventEmitter<void> = new EventEmitter();
  cardNumber: number;
  month: number;
  year: number;
  cardHolder: string;
  cvv: number;

  constructor(
    private checkStep: CheckoutStepService,
    private checkStore: CheckoutStoreService
  ) {
    this.cardNumber = 0;
    this.month = 0;
    this.year = 0;
    this.cardHolder = '';
    this.cvv = 0;
  }

  ngOnInit(): void {}

  handlePlaceOrder(): void {
    this.checkStore.addCardDetail({
      cardNumber: this.cardNumber,
      month: this.month,
      year: this.year,
      cardHolder: this.cardHolder,
      cvv: this.cvv,
    });
    this.checkStep.nextStep();
    this.step.emit();
  }
}
