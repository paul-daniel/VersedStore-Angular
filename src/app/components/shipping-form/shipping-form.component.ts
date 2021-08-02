import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CheckoutStoreService } from 'src/app/services/checkout/checkout-store.service';
import { CheckoutStepService } from 'src/app/services/checkout/checkout-step.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

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
  //@ts-ignore
  shippForm: FormGroup;

  constructor(
    private checkStep: CheckoutStepService,
    private checkStore: CheckoutStoreService,
    private formBuilder: FormBuilder
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

  ngOnInit(): void {
    this.shippForm = this.formBuilder.group({
      type: this.formBuilder.control(this.typeOfAccount),
      name: this.formBuilder.control(this.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
      surname: this.formBuilder.control(this.surname, [
        Validators.required,
        Validators.minLength(3),
      ]),
      address: this.formBuilder.control(this.address, [
        Validators.required,
        Validators.minLength(5),
      ]),
      postZip: this.formBuilder.control(this.postOrZip, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        Validators.min(10000),
        Validators.max(99999),
      ]),
      number: this.formBuilder.control(this.number, [
        Validators.required,
        Validators.minLength(10),
      ]),
      town: this.formBuilder.control(this.town, [
        Validators.required,
        Validators.minLength(3),
      ]),
      country: this.formBuilder.control(this.country, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  submitShippingForm(): void {
    this.checkStore.addUserDetail(this.shippForm.value);
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
    console.log(this.shippForm);
  }
}
