import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  id: number;
  allProducts: Product[] = [];
  currentProduct: Product;

  constructor(private route: ActivatedRoute) {
    this.id = 1;
    this.currentProduct = {
      id: 0,
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

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.allProducts = [
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
    const idx = this.allProducts.findIndex((product) => product.id === this.id);
    if (idx !== -1) {
      this.currentProduct = this.allProducts[idx];
    }
  }

  addOneQuantity(): void {
    this.currentProduct.quantity += 1;
  }

  removeOneQuantity(): void {
    if (this.currentProduct.quantity - 1 === 0) return;
    this.currentProduct.quantity -= 1;
  }
}
