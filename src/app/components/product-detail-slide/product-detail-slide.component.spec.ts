import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSlideComponent } from './product-detail-slide.component';

describe('ProductDetailSlideComponent', () => {
  let component: ProductDetailSlideComponent;
  let fixture: ComponentFixture<ProductDetailSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
