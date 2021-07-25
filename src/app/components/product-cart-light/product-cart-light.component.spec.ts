import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartLightComponent } from './product-cart-light.component';

describe('ProductCartLightComponent', () => {
  let component: ProductCartLightComponent;
  let fixture: ComponentFixture<ProductCartLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCartLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
