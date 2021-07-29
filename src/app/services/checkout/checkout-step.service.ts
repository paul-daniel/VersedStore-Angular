import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckoutStepService {
  checkoutStep: string[] = ['shipping', 'card', 'done'];
  currentStep: number = 0;
  constructor() {}
  getCheckoutStep(): string[] {
    return this.checkoutStep;
  }

  getCurrentStepIdx(): number {
    return this.currentStep;
  }

  getCurrentStep(): string {
    return this.checkoutStep[this.currentStep];
  }

  nextStep(): void {
    this.currentStep++;
  }
}
