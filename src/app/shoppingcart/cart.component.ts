import {Component, OnInit} from '@angular/core'
import {DecimalPipe} from '@angular/common'
import {CartService} from './shoppingcart.service'
import {ShoppingCart, Item} from '../items/item.model'
import {Http, Response, Headers, RequestOptions} from '@angular/http'

@Component({
  templateUrl:'cart.component.html',
  styleUrls: ['cart.css']
})
export class CartComponent implements OnInit{
  cart : ShoppingCart[] = [];

  constructor(private cartService: CartService){
}
ngOnInit(){
  this.cart = this.cartService.cart;

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

}
