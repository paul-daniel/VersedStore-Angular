export class UserDetail {
  typeOfAccount: 'personnal' | 'business';
  name: string;
  surname: string;
  address: string;
  postOrZip: string;
  number: number;
  town: string;
  country: string;
  constructor() {
    this.typeOfAccount = 'personnal';
    this.name = '';
    this.address = '';
    this.surname = '';
    this.postOrZip = '';
    this.number = 0;
    this.town = '';
    this.country = '';
  }
}
