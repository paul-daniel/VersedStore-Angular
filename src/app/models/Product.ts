export class Product {
  id: number;
  name: string;
  shortDesc: string;
  description: string;
  contain: string;
  composition: string;
  price: number;
  url: string;
  alt: string;

  constructor() {
    this.id = 1;
    this.name = '';
    this.shortDesc = '';
    this.description = '';
    this.contain = '';
    this.composition = '';
    this.price = 0;
    this.url = '';
    this.alt = '';
  }
}
