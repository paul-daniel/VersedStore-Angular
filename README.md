# Versed Perfume Store

"Versed Parfume Store" is an e-commerce style web app, for [udacity's full stack Javascript Developer Nanodegree](https://classroom.udacity.com/nanodegrees/nd0067/) third project assignement, "MyStore". Users will be able to go through a list of product, add products to cart, modify products quantity, remove product from cart and finally go through a checkout process for shipping.

- This app is deployed using firebase hosting.

- This app was built with [Angular](https://angular.io/docs).

- Most application state is managed by services. Updates are triggered through two way data binding.

- Form Control and Validation is also implemented with angulat built-in FormModule.

## Table of contents

- [Demo](#demo)
- [Quick Start](#quick-start)
- [Documenttaion](#documentation)
- [Copyright and license](#copyright-and-license)
- [Development server](#development-server)
- [Build](#build)

## Demo

[demo-page](https://versed-bef9f.web.app)

## Quick Start

#### Run Angular App

- Clone project locally `git clone https://github.com/tchatchouangDaniel/MyStore-udacity-nd.git` .
- Go to Angular app `cd MyStore`
- Install all project dependencies with npm `npm install` in `MyStore` folder.
- Run server with `ng serve`
- Check console or browser if server runs on [https://localhost:4200/](http://localhost:4200/)

#### Datas and Local backend server

There is a backend server using express and postgres, for this project in [storefront](https://github.com/tchatchouangDaniel/storefront) repository. But I made some modifications on my datas schema so it was easier to work with a json file as a data source on the frontend.

So for now the datas are populated from a `data.json` inside of `assets` folder. But I will change that to the storefront server as soon as possible.

#### To build & Deploy on firebase

```
npm run build && npm run deploy
```

## Documentation

### What's included

Within the download you'll find the following directories and file in `src`:

```
│   favicon.ico
│   index.html
│   main.ts
│   polyfills.ts
│   test.ts
│
├───app
│   │   app-routing.module.ts
│   │   app.component.html
│   │   app.component.scss
│   │   app.component.spec.ts
│   │   app.component.ts
│   │   app.module.ts
│   │   route-animation.ts
│   │
│   ├───components
│   │   ├───cart
│   │   │       cart.component.html
│   │   │       cart.component.scss
│   │   │       cart.component.spec.ts
│   │   │       cart.component.ts
│   │   │
│   │   ├───cart-light
│   │   │       cart-light.component.html
│   │   │       cart-light.component.scss
│   │   │       cart-light.component.spec.ts
│   │   │       cart-light.component.ts
│   │   │
│   │   ├───cart-product
│   │   │       cart-product.component.html
│   │   │       cart-product.component.scss
│   │   │       cart-product.component.spec.ts
│   │   │       cart-product.component.ts
│   │   │
│   │   ├───checking-final
│   │   │       checking-final.component.html
│   │   │       checking-final.component.scss
│   │   │       checking-final.component.spec.ts
│   │   │       checking-final.component.ts
│   │   │
│   │   ├───checkout-form
│   │   │       checkout-form.component.html
│   │   │       checkout-form.component.scss
│   │   │       checkout-form.component.spec.ts
│   │   │       checkout-form.component.ts
│   │   │
│   │   ├───footer
│   │   │       footer.component.html
│   │   │       footer.component.scss
│   │   │       footer.component.spec.ts
│   │   │       footer.component.ts
│   │   │
│   │   ├───footer-checkout
│   │   │       footer-checkout.component.html
│   │   │       footer-checkout.component.scss
│   │   │       footer-checkout.component.spec.ts
│   │   │       footer-checkout.component.ts
│   │   │
│   │   ├───navbar
│   │   │       navbar.component.html
│   │   │       navbar.component.scss
│   │   │       navbar.component.spec.ts
│   │   │       navbar.component.ts
│   │   │
│   │   ├───navbar-checkout
│   │   │       navbar-checkout.component.html
│   │   │       navbar-checkout.component.scss
│   │   │       navbar-checkout.component.spec.ts
│   │   │       navbar-checkout.component.ts
│   │   │
│   │   ├───product-cart-light
│   │   │       product-cart-light.component.html
│   │   │       product-cart-light.component.scss
│   │   │       product-cart-light.component.spec.ts
│   │   │       product-cart-light.component.ts
│   │   │
│   │   ├───product-detail
│   │   │       product-detail.component.html
│   │   │       product-detail.component.scss
│   │   │       product-detail.component.spec.ts
│   │   │       product-detail.component.ts
│   │   │
│   │   ├───product-detail-slide
│   │   │       product-detail-slide.component.html
│   │   │       product-detail-slide.component.scss
│   │   │       product-detail-slide.component.spec.ts
│   │   │       product-detail-slide.component.ts
│   │   │
│   │   ├───product-item
│   │   │       product-item.component.html
│   │   │       product-item.component.scss
│   │   │       product-item.component.spec.ts
│   │   │       product-item.component.ts
│   │   │
│   │   ├───product-list
│   │   │       product-list.component.html
│   │   │       product-list.component.scss
│   │   │       product-list.component.spec.ts
│   │   │       product-list.component.ts
│   │   │
│   │   ├───radio-groups
│   │   │       radio-groups.component.html
│   │   │       radio-groups.component.scss
│   │   │       radio-groups.component.spec.ts
│   │   │       radio-groups.component.ts
│   │   │
│   │   ├───resume
│   │   │       resume.component.html
│   │   │       resume.component.scss
│   │   │       resume.component.spec.ts
│   │   │       resume.component.ts
│   │   │
│   │   ├───shipping-form
│   │   │       shipping-form.component.html
│   │   │       shipping-form.component.scss
│   │   │       shipping-form.component.spec.ts
│   │   │       shipping-form.component.ts
│   │   │
│   │   └───slider
│   │           slider.component.html
│   │           slider.component.scss
│   │           slider.component.spec.ts
│   │           slider.component.ts
│   │
│   ├───models
│   │       CardDetail.ts
│   │       CartProduct.ts
│   │       Product.ts
│   │       RadioOption.ts
│   │       UserDetail.ts
│   │
│   ├───pages
│   │   ├───cart-page
│   │   │       cart-page.component.html
│   │   │       cart-page.component.scss
│   │   │       cart-page.component.spec.ts
│   │   │       cart-page.component.ts
│   │   │
│   │   ├───checkout
│   │   │       checkout.component.html
│   │   │       checkout.component.scss
│   │   │       checkout.component.spec.ts
│   │   │       checkout.component.ts
│   │   │
│   │   ├───home
│   │   │       home.component.html
│   │   │       home.component.scss
│   │   │       home.component.spec.ts
│   │   │       home.component.ts
│   │   │
│   │   └───product-detail-page
│   │           product-detail-page.component.html
│   │           product-detail-page.component.scss
│   │           product-detail-page.component.spec.ts
│   │           product-detail-page.component.ts
│   │
│   └───services
│       ├───checkout
│       │       checkout-step.service.spec.ts
│       │       checkout-step.service.ts
│       │       checkout-store.service.spec.ts
│       │       checkout-store.service.ts
│       │
│       └───Products
│               cart-products.service.spec.ts
│               cart-products.service.ts
│               products.service.spec.ts
│               products.service.ts
│
├───assets
│       .gitkeep
│       data.json
│
├───environments
│       environment.prod.ts
│       environment.ts
│
└───sass
    │   styles.scss
    │
    ├───abstracts
    │       _mixins.scss
    │       _variables.scss
    │
    └───base
            _base.scss
```

### Copyright and License

- The MIT License
  This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
