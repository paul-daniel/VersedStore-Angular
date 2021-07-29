import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-checkout',
  templateUrl: './navbar-checkout.component.html',
  styleUrls: ['./navbar-checkout.component.scss'],
})
export class NavbarCheckoutComponent implements OnInit {
  @Input() step: string = '';
  constructor() {}

  ngOnInit(): void {}
}
