import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/CartProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: CartProduct[] = [];
  constructor() {}

  ngOnInit(): void {
    this.cartProducts = [
      {
        id: 1,
        name: 'zara perfume',
        price: 29.99,
        quantity: 3,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/056/999/2/w/444/0120056999_6_1_1.jpg?ts=1610619852871',
        alt: 'zara',
      },
      {
        id: 2,
        name: 'zara perfume',
        price: 29.99,
        quantity: 3,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/056/999/2/w/444/0120056999_6_1_1.jpg?ts=1610619852871',
        alt: 'zara',
      },
      {
        id: 3,
        name: 'zara perfume',
        price: 29.99,
        quantity: 3,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/056/999/2/w/444/0120056999_6_1_1.jpg?ts=1610619852871',
        alt: 'zara',
      },
      {
        id: 4,
        name: 'zara perfume',
        price: 29.99,
        quantity: 3,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/056/999/2/w/444/0120056999_6_1_1.jpg?ts=1610619852871',
        alt: 'zara',
      },
      {
        id: 4,
        name: 'zara perfume',
        price: 29.99,
        quantity: 3,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/056/999/2/w/444/0120056999_6_1_1.jpg?ts=1610619852871',
        alt: 'zara',
      },
      {
        id: 4,
        name: 'zara perfume',
        price: 29.99,
        quantity: 3,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/056/999/2/w/444/0120056999_6_1_1.jpg?ts=1610619852871',
        alt: 'zara',
      },
    ];
  }
}
