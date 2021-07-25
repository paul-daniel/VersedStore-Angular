import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLightComponent } from './cart-light.component';

describe('CartLightComponent', () => {
  let component: CartLightComponent;
  let fixture: ComponentFixture<CartLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
