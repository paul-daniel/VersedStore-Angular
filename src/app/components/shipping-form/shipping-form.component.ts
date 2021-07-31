import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CheckoutStoreService } from 'src/app/services/checkout/checkout-store.service';
import { CheckoutStepService } from 'src/app/services/checkout/checkout-step.service';
@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
})
export class ShippingFormComponent implements OnInit {
  @Output() step: EventEmitter<string> = new EventEmitter();
  typeOfAccount: 'personnal' | 'business';
  name: string;
  surname: string;
  address: string;
  postOrZip: string;
  number: number;
  town: string;
  country: string;
  constructor(
    private checkStep: CheckoutStepService,
    private checkStore: CheckoutStoreService
  ) {
    this.typeOfAccount = 'personnal';
    this.name = '';
    this.address = '';
    this.surname = '';
    this.postOrZip = '';
    this.number = 0;
    this.town = '';
    this.country = '';
  }

  submitShippingForm(): void {
    this.checkStore.addUserDetail({
      typeOfAccount: this.typeOfAccount,
      name: this.name,
      address: this.address,
      surname: this.surname,
      postOrZip: this.postOrZip,
      number: this.number,
      town: this.town,
      country: this.country,
    });
    this.typeOfAccount = 'personnal';
    this.name = '';
    this.address = '';
    this.surname = '';
    this.postOrZip = '';
    this.number = 0;
    this.town = '';
    this.country = '';

    this.checkStep.nextStep();
    this.step.emit(this.checkStep.getCurrentStep());
  }

  ngOnInit(): void {}
}
