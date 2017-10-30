import {Injectable} from '@angular/core'
import {ShoppingCart, Item} from '../items/item.model'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Rx'

@Injectable()

export class CartService{
  private readonly projectsKey: string = 'SC';
  _shoppingCart: ShoppingCart[] = [];

  constructor() {
    const shoppingCart: any = localStorage.getItem(this.projectsKey);
    if (shoppingCart) {
        this._shoppingCart = JSON.parse(shoppingCart);
    }
}

  addtoCart(p: Item){
    let exist: boolean = false;

    for(let i = 0 ; i < this._shoppingCart.length;i++){
      if (this._shoppingCart[i].item == p){
        this._shoppingCart[i].quantity += 1;
        exist = true;
      }
    }
    if (exist == false){
      let s = new ShoppingCart();
      s.item = p;
      s.quantity = 1;
      this._shoppingCart.push(s)
    }

    localStorage.setItem(this.projectsKey, JSON.stringify(this._shoppingCart));
  }

  removeFromCart(p: Item){
    let position: number = -1;

    for(let i = 0 ; i < this._shoppingCart.length;i++){
      if (this._shoppingCart[i].item == p){
        position = i;

      }
    }
    if(position != -1){
      this._shoppingCart.splice(position, 1);
    }
    localStorage.setItem(this.projectsKey, JSON.stringify(this._shoppingCart));
  }

  removeSingleFromCart(p: Item){
    let position: number = -1;

    for(let i = 0 ; i < this._shoppingCart.length;i++){
      if (this._shoppingCart[i].item == p){
        position = i;
      }
    }
    if(position != -1){
      this._shoppingCart[position].quantity -= 1;
      if (this._shoppingCart[position].quantity == 0){
        this._shoppingCart.splice(position, 1);
      }
    }
    localStorage.setItem(this.projectsKey, JSON.stringify(this._shoppingCart));
  }

  clearCart(p: Item){
    this._shoppingCart = [];
    localStorage.setItem(this.projectsKey, JSON.stringify(this._shoppingCart));
  }


  public get cart(): ShoppingCart[] {
    return this._shoppingCart;
  }
}
