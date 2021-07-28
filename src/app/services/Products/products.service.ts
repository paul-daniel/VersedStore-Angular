import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getAllProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'versed gardenia',
        shortDesc: 'Floral and exotic scents',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo cum necessitatibus ea odio velit consectetur exercitationem perspiciatis aliquam ratione, autem inventore architecto voluptatum unde odit perferendis placeat! Delectus, magnam!',
        contain: 'Contain 3.5% olive oil/100ml',
        composition: 'Non-Toxic | Vegan | sebum-free',
        price: 12.95,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/056/999/2/w/444/0120056999_6_1_1.jpg?ts=1610619852871',
        alt: 'versed gardenia image',
        quantity: 1,
      },
      {
        id: 2,
        name: 'versed orchid',
        shortDesc: 'floral and exotic scents. Strong Woman.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo cum necessitatibus ea odio velit consectetur exercitationem perspiciatis aliquam ratione, autem inventore architecto voluptatum unde odit perferendis placeat! Delectus, magnam!',
        contain: 'Contain 3.5% olive oil/100ml',
        composition: 'Non-Toxic | Vegan | sebum-free',
        price: 13.95,
        url: 'https://static.zara.net/photos///2021/V/2/1/p/0120/055/999/2/w/444/0120055999_6_1_1.jpg?ts=1610619774733',
        alt: 'versed orchid image',
        quantity: 1,
      },
      {
        id: 3,
        name: 'femme 200ML',
        shortDesc: 'wood and floral scent. Strong Woman.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo cum necessitatibus ea odio velit consectetur exercitationem perspiciatis aliquam ratione, autem inventore architecto voluptatum unde odit perferendis placeat! Delectus, magnam!',
        contain: 'Contain 3.5% olive oil/100ml',
        composition: 'Non-Toxic | Vegan | sebum-free',
        price: 15.95,
        url: 'https://static.zara.net/photos///2021/I/2/1/p/0140/004/999/2/w/444/0140004999_6_1_1.jpg?ts=1626769393410',
        alt: 'versed Femme image',
        quantity: 1,
      },
      {
        id: 4,
        name: 'pink flambé 200ML',
        shortDesc: 'citronelle and vanilla scent.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo cum necessitatibus ea odio velit consectetur exercitationem perspiciatis aliquam ratione, autem inventore architecto voluptatum unde odit perferendis placeat! Delectus, magnam!',
        contain: 'Contain 3.5% olive oil/100ml',
        composition: 'Non-Toxic | Vegan | sebum-free',
        price: 15.95,
        url: 'https://static.zara.net/photos///2021/I/2/1/p/0140/015/999/2/w/444/0140015999_6_1_1.jpg?ts=1626769255506',
        alt: 'versed pink flambé',
        quantity: 1,
      },
      {
        id: 5,
        name: 'femme 100ML + twilight 100ML',
        shortDesc: 'wood scent and forest scent.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo cum necessitatibus ea odio velit consectetur exercitationem perspiciatis aliquam ratione, autem inventore architecto voluptatum unde odit perferendis placeat! Delectus, magnam!',
        contain: 'Contain 3.5% olive oil/100ml',
        composition: 'Non-Toxic | Vegan | sebum-free',
        price: 15.95,
        url: 'https://static.zara.net/photos///2021/I/2/1/p/0140/016/999/2/w/444/0140016999_6_1_1.jpg?ts=1626773033105',
        alt: 'versed femme and twilight',
        quantity: 1,
      },
      {
        id: 6,
        name: 'turbose + pink flambe edt 100ML',
        shortDesc: 'wood scent and forest scent.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo cum necessitatibus ea odio velit consectetur exercitationem perspiciatis aliquam ratione, autem inventore architecto voluptatum unde odit perferendis placeat! Delectus, magnam!',
        contain: 'Contain 3.5% olive oil/100ml',
        composition: 'Non-Toxic | Vegan | sebum-free',
        price: 19.95,
        url: 'https://static.zara.net/photos///2021/I/2/1/p/0130/052/999/2/w/444/0130052999_6_1_1.jpg?ts=1626343358110',
        alt: 'versed femme and twilight',
        quantity: 1,
      },
    ];
  }
}
