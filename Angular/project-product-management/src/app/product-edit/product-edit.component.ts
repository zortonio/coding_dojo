import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  products;
  product;
  id;

  constructor(private _productService: ProductService, private _route: ActivatedRoute, private _router: Router) {
    this.products = this._productService.retrieveProducts();
    this._route.paramMap.subscribe( params => {
      this.id = params.get('id');
      this.product = this.products[params.get('id')];
      console.log(this.id);
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    this._productService.updateProduct(this.id, this.product);
    this.backToProducts();
  }

  deleteProduct() {
    this._productService.removeProduct(this.id);
    this.backToProducts();
  }

  backToProducts(){
    this._router.navigate(['','products']);
  }
}
