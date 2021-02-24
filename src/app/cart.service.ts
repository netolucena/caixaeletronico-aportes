import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  beneficiarios = [];
  constructor(  
    private http: HttpClient
    ) {}
  
  addToCart(product) {
    this.items = [];
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getBeneficiarios() {
    this.http.get('localhost:8080/beneficiarios').pipe(map(beneficiario => {})).subscribe(result => {      
    });
  }
  
}