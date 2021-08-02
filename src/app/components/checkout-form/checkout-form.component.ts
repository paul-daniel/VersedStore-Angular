import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CheckoutStepService } from 'src/app/services/checkout/checkout-step.service';
import { CheckoutStoreService } from 'src/app/services/checkout/checkout-store.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
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
    private checkStore: CheckoutStoreService,
    private formBuilder: FormBuilder
  ) {
    this.cardNumber = 0;
    this.month =
      new Date().getMonth() + 1 === 12 ? 1 : new Date().getMonth() + 1;
    this.year = new Date().getFullYear();
    this.cardHolder = '';
    this.cvv = 0;
  }

  ngOnInit(): void {
    const date = new Date();
    this.checkForm = this.formBuilder.group({
      creditCard: this.formBuilder.control(this.cardNumber, [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
        Validators.min(4000000000000000),
      ]),
      month: this.formBuilder.control(this.month, [
        Validators.required,
        Validators.pattern(''),
        Validators.max(12),
        Validators.min(1),
      ]),
      year: this.formBuilder.control(this.year, [
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4),
        Validators.min(new Date().getFullYear() + 1),
      ]),
      cardHolder: this.formBuilder.control(
        this.cardHolder,
        Validators.required
      ),
      cvv: this.formBuilder.control(this.cvv, [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3),
      ]),
    });
  }

  handlePlaceOrder(): void {
    this.checkStore.addCardDetail(this.checkForm.value);
    this.checkStep.nextStep();
    this.step.emit();
  }
}
