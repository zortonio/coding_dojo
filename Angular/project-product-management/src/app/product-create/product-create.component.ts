import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product = {
    title: '',
    price: 0,
    url: '#'
  }

  constructor(private _productService: ProductService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Creating product')
    this._productService.addProduct(this.product);
    this.goToProducts();
  }

  goToProducts(){
    this._router.navigate(['','products']);
  }

}
