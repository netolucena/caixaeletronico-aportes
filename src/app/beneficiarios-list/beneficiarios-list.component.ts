import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beneficiarios-list',
  templateUrl: './beneficiarios-list.component.html',
  styleUrls: ['./beneficiarios-list.component.css']
})
export class ProductListComponent {
  beneficiarios = this.cartService.getBeneficiarios();

  itemsForm = this.formBuilder.group({    
    valor: '',
  });
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  onSubmit(): void {
    this.cartService.getBeneficiarios();
    this.itemsForm.reset();
  }
  
  aportar(product) {
    this.cartService.clearCart();
    this.cartService.addToCart(product);
    product.valor = this.itemsForm.get("valor").value;  
     
    this.cartService.aportarValor(product).subscribe((res) => { });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/