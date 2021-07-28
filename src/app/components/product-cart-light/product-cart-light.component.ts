import { Component, OnInit } from '@angular/core';
import { CartProductsService } from 'src/app/services/Products/cart-products.service';

@Component({
  selector: 'app-product-cart-light',
  templateUrl: './product-cart-light.component.html',
  styleUrls: ['./product-cart-light.component.scss'],
})
export class ProductCartLightComponent implements OnInit {
  constructor(private cartProductService: CartProductsService) {}

  ngOnInit(): void {}
}
