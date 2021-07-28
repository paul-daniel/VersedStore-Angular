import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartProductsService } from 'src/app/services/Products/cart-products.service';
import { ProductsService } from 'src/app/services/Products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  allProducts: Product[] = [];
  currentProduct: Product;

  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartProductService: CartProductsService
  ) {
    this.currentProduct = this.productsService.getAllProducts()[0];
  }

  ngOnInit(): void {
    this.allProducts = this.productsService.getAllProducts();
    this.activeRoute.params.subscribe((routeParams) => {
      this.loadCurrentProduct(Number(routeParams.id));
    });
  }

  loadCurrentProduct(id: number): void {
    const product: Product | undefined = this.allProducts.find(
      (product) => product.id === id
    );
    console.log(product);
    if (product) this.currentProduct = product;
  }

  addProductToCart(): void {
    this.cartProductService.addProductToCart(this.currentProduct);
  }

  addOneQuantity(): void {
    this.currentProduct.quantity += 1;
  }

  removeOneQuantity(): void {
    if (this.currentProduct.quantity - 1 === 0) return;
    this.currentProduct.quantity -= 1;
  }
}
