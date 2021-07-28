import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor() {
    this.product = {
      id: 1,
      name: '',
      shortDesc: '',
      description: '',
      contain: '',
      composition: '',
      price: 0,
      url: '',
      alt: '',
      quantity: 1,
    };
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {}
}
