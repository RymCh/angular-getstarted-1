import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//The metadata, providedIn: 'root',
// means that the CartService is visible throughout the application.

@Injectable({
  providedIn:'root'
})
export class CartService {
  items=[]
  constructor(
    private http:HttpClient,
  ) { }
  addToCart(product){
    this.items.push(product);
    //console.log(this.items);
  }
  getItems(){
    return this.items;
  }
  
  clearCart(){
    this.items=[];
    return this.items;
  } 

  getShippingPrices(){
    return(this.http.get('/assets/shipping.json'));
  }



}