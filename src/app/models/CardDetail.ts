export class CardDetail {
  cardNumber: number;
  month: number;
  year: number;
  cardHolder: string;
  cvv: number;

  constructor() {
    this.cardNumber = 0;
    this.month = 0;
    this.year = 0;
    this.cardHolder = '';
    this.cvv = 0;
  }
}
