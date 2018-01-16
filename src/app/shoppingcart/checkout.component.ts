import {Component} from '@angular/core'
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {CartComponent} from './cart.component'
import {Observable} from 'rxjs/Rx'
import {CartService} from './shoppingcart.service'
import {Checkout} from './checkout.model'

@Component({
    template:`<h1>Your order has been confirmed!</h1>
    <div>
    <h3>
    Name: {{_checkout.name}}
    </h3>
    <h3>
    Address: {{_checkout.address}}
    </h3>
    <h3>
    City: {{_checkout.city}}
    </h3>
    <h3>
    Phone Number: {{_checkout.phonenumber}}
    </h3>
    </div>
    `,
    styles:[`h1{text-align: center; text-decoration: underline;} 
    div {background:white; border-style: solid; padding: 10px; border-radius: 10px;}`]
})
export class CheckoutComponent{
_checkout: Checkout;

constructor(private cartComponent : CartComponent){
 this.getCheckout();
}
getCheckout()
{    
    let _check : any = localStorage.getItem('C')
    if(_check){
        this._checkout = JSON.parse(_check)
      }
}   

}