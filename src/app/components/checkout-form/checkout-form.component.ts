import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CheckoutStepService } from 'src/app/services/checkout/checkout-step.service';
import { CheckoutStoreService } from 'src/app/services/checkout/checkout-store.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  //@ts-ignore
  checkForm: FormGroup;

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

  ngOnInit(): void {
    const date = new Date();
    this.checkForm = new FormGroup({
      creditCard: new FormControl(null, [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
        Validators.min(4000000000000000),
      ]),
      month: new FormControl(null, [
        Validators.required,
        Validators.pattern(''),
        Validators.max(12),
        Validators.min(
          date.getFullYear() === this.year
            ? date.getMonth() + 1 === 12
              ? 1
              : date.getMonth() + 2
            : 1
        ),
      ]),
      year: new FormControl(null, [
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4),
        Validators.min(new Date().getFullYear()),
      ]),
      cardHolder: new FormControl(null, Validators.required),
      cvv: new FormControl(null, [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3),
      ]),
    });
  }

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
