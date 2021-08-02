import { Injectable } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { CardDetail } from 'src/app/models/CardDetail';
@Injectable({
  providedIn: 'root',
})
export class CheckoutStoreService {
  userDetail: UserDetail;
  cardDetail: CardDetail;
  constructor() {
    this.userDetail = {
      typeOfAccount: 'personnal',
      name: '',
      address: '',
      surname: '',
      postZip: '',
      number: 0,
      town: '',
      country: '',
    };

    this.cardDetail = {
      creditCard: 0,
      month: 0,
      year: 0,
      cardHolder: '',
      cvv: 0,
    };
  }

  addUserDetail(user: UserDetail): void {
    this.userDetail = user;
  }

  addCardDetail(card: CardDetail): void {
    this.cardDetail = card;
  }
}
