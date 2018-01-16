import {Component, OnInit} from '@angular/core'
import {DecimalPipe} from '@angular/common'
import {CartService} from './shoppingcart.service'
import {ShoppingCart, Item} from '../items/item.model'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {CheckoutComponent} from './checkout.component'
import {Checkout} from './checkout.model'
import { Observable } from 'rxjs/Observable';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  templateUrl:'cart.component.html',
  styleUrls: ['cart.css']
})
export class CartComponent implements OnInit{
  cart : ShoppingCart[] = [];
  checkout: Checkout;
  private readonly CheckoutKey: string = 'C';

  constructor(private cartService: CartService, private http:Http, private router:Router){ 
  }
ngOnInit(){
  this.cart = this.cartService.cart;
  this.checkout = new Checkout();
}
upQuantity(p: Item){
  this.cartService.addtoCart(p);

}
downQuantity(p:Item){
  this.cartService.removeSingleFromCart(p)
}

currentPrice(c: ShoppingCart): number{
  return  c.item.price * c.quantity;

}
getPrice(){
  let total: number = 0;
  for(let m = 0; m < this.cart.length; m++){
    total += this.cart[m].item.price* this.cart[m].quantity;
  }
  return total
}


removeFromCart(c: Item): void{
  this.cartService.removeFromCart(c);

}
clearCart(c:Item): void {
  this.cartService.clearCart(c);
}
checkOut() : any {
  localStorage.setItem(this.CheckoutKey, JSON.stringify(this.checkout))

  const chkout : any = localStorage.getItem(this.CheckoutKey) 
  if(chkout){
    this.checkout = JSON.parse(chkout)
    this.router.navigate(['/checkout'])
  }
}

  

}
