import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCheckoutComponent } from './navbar-checkout.component';

describe('NavbarCheckoutComponent', () => {
  let component: NavbarCheckoutComponent;
  let fixture: ComponentFixture<NavbarCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
