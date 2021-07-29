import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingFinalComponent } from './checking-final.component';

describe('CheckingFinalComponent', () => {
  let component: CheckingFinalComponent;
  let fixture: ComponentFixture<CheckingFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
