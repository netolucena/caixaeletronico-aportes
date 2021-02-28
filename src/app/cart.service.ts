import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  beneficiarios = [];
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

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
    this.beneficiarios = [];
    return this.http.get('http://ec2-3-134-107-142.us-east-2.compute.amazonaws.com:8080/beneficiarios');
  }

  aportarValor(beneficiario) {
    let valorAporte_ = beneficiario.valor;
    let id_ = beneficiario.id;
    return this.http.post<any>('http://ec2-3-134-107-142.us-east-2.compute.amazonaws.com:8090/caixa?valorAporte='+ valorAporte_ + '&idBeneficiario=' + id_, { }
    );
  }
  
}