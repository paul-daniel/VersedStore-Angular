import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor() {}

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'zara perfume',
        shortDesc: 'floral and exotic scents. Strong Woman.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo cum necessitatibus ea odio velit consectetur exercitationem perspiciatis aliquam ratione, autem inventore architecto voluptatum unde odit perferendis placeat! Delectus, magnam!',
        contain: 'Contain 3.5% olive oil/100ml',
        composition: 'Non-Toxic | Vegan | sebum-free',
        price: 29.99,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/056/999/2/w/444/0120056999_6_1_1.jpg?ts=1610619852871',
        alt: 'zara',
        quantity: 1,
      },
      {
        id: 2,
        name: 'zara perfume',
        shortDesc: 'floral and exotic scents. Strong Woman.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo cum necessitatibus ea odio velit consectetur exercitationem perspiciatis aliquam ratione, autem inventore architecto voluptatum unde odit perferendis placeat! Delectus, magnam!',
        contain: 'Contain 3.5% olive oil/100ml',
        composition: 'Non-Toxic | Vegan | sebum-free',
        price: 29.99,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/056/999/2/w/444/0120056999_6_1_1.jpg?ts=1610619852871',
        alt: 'zara',
        quantity: 1,
      },
      {
        id: 3,
        name: 'zara perfume',
        shortDesc: 'floral and exotic scents. Strong Woman.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo cum necessitatibus ea odio velit consectetur exercitationem perspiciatis aliquam ratione, autem inventore architecto voluptatum unde odit perferendis placeat! Delectus, magnam!',
        contain: 'Contain 3.5% olive oil/100ml',
        composition: 'Non-Toxic | Vegan | sebum-free',
        price: 29.99,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/056/999/2/w/444/0120056999_6_1_1.jpg?ts=1610619852871',
        alt: 'zara',
        quantity: 1,
      },
      {
        id: 3,
        name: 'zara perfume',
        shortDesc: 'floral and exotic scents. Strong Woman.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo cum necessitatibus ea odio velit consectetur exercitationem perspiciatis aliquam ratione, autem inventore architecto voluptatum unde odit perferendis placeat! Delectus, magnam!',
        contain: 'Contain 3.5% olive oil/100ml',
        composition: 'Non-Toxic | Vegan | sebum-free',
        price: 29.99,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/056/999/2/w/444/0120056999_6_1_1.jpg?ts=1610619852871',
        alt: 'zara',
        quantity: 1,
      },
      {
        id: 3,
        name: 'zara perfume',
        shortDesc: 'floral and exotic scents. Strong Woman.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo cum necessitatibus ea odio velit consectetur exercitationem perspiciatis aliquam ratione, autem inventore architecto voluptatum unde odit perferendis placeat! Delectus, magnam!',
        contain: 'Contain 3.5% olive oil/100ml',
        composition: 'Non-Toxic | Vegan | sebum-free',
        price: 29.99,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/056/999/2/w/444/0120056999_6_1_1.jpg?ts=1610619852871',
        alt: 'zara',
        quantity: 1,
      },
    ];
  }
}
