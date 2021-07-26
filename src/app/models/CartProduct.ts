export class CartProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  url: string;
  alt: string;

  constructor() {
    this.id = 1;
    this.name = '';
    this.price = 0;
    this.quantity = 0;
    this.url = '';
    this.alt = '';
  }
}
