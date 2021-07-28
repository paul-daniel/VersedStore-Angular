import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
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
  @Input() currentProduct: Product;

  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartProductService: CartProductsService,
    private toastr: ToastrService
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
    this.currentProduct.quantity = 1;
    this.toastr.success(
      `${this.currentProduct.name} added to basket 🤩`,
      'Product added'
    );
  }

  addOneQuantity(): void {
    this.currentProduct.quantity += 1;
  }

  removeOneQuantity(): void {
    if (this.currentProduct.quantity - 1 === 0) return;
    this.currentProduct.quantity -= 1;
  }
}
