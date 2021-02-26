import { Component } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  beneficiarios = this.cartService.getBeneficiarios();

  itemsForm = this.formBuilder.group({    
    valor: '',
  });
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('Aporte Realizado com Sucesso!');
  }

    onSubmit(): void {
    this.products = this.cartService.clearCart();
    this.cartService.getBeneficiarios();
    this.itemsForm.reset();
  }

  aportar(product) {
    this.cartService.clearCart();
    this.cartService.addToCart(product);
    product.valor = this.itemsForm.get("valor");
    
    window.alert('Aporte de R$ ' + product.valor.value +' Realizado com Sucesso! para ' + product.nome );
    
    this.cartService.aportarValor(product).subscribe((res) => {
      window.alert('Aporte realizado com Sucesso!');
    });
  }
  
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/