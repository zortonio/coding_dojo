import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  products = [{ title: "Praktica Camera", price: 1200, url: 'https://static.pexels.com/photos/226243/pexels-photo-226243.jpeg' }, { title: 'DSLR Camera', price: 1400, url: 'https://static.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg'}];

  constructor(private _http: Http) { }

  retrieveProducts(){
    return this.products;
  }

  addProduct(product){
    this.products.push(product);
  }

  updateProduct(id, product){
    this.products[id] = product;
  }

  removeProduct(id){
    this.products.splice(id,1);
  }

}
