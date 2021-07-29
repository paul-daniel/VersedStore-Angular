import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import data from 'src/assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _jsonUrl = 'assets/data.json';
  constructor(private http: HttpClient) {}

  // Without observables
  // getAllProducts(): Product[] {
  //   return data;
  // }

  //With Observables
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._jsonUrl);
  }
}
