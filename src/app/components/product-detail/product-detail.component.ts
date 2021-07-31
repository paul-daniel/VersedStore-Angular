import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private cartProductService: CartProductsService,
    private toastr: ToastrService
  ) {
    this.currentProduct = {
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

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      this.allProducts = res;
      const id = Number(this.activeRoute.snapshot.params['id']);
      const product: Product | undefined = res.find((product) => {
        return product.id === id;
      });

      if (product) this.currentProduct = product;
    });
    this.activeRoute.params.subscribe((routeParams) => {
      this.loadCurrentProduct(Number(routeParams.id));
    });
  }

  loadCurrentProduct(id: number, arr: Product[] = this.allProducts): void {
    const product: Product | undefined = arr.find(
      (product) => product.id === id
    );

    if (product) this.currentProduct = product;
  }

  addProductToCart(): void {
    this.cartProductService.addProductToCart(this.currentProduct);
    this.toastr.success(
      `${this.currentProduct.name} added to basket 🤩`,
      'Product added'
    );
    this.currentProduct = { ...this.currentProduct, quantity: 1 };
  }

  addOneQuantity(): void {
    this.currentProduct.quantity += 1;
  }

  removeOneQuantity(): void {
    if (this.currentProduct.quantity - 1 === 0) return;
    this.currentProduct.quantity -= 1;
  }
}
