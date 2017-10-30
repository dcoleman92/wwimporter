import {Component, Input} from '@angular/core'
import {Item, Category, SubCategory} from './item.model'
import {ItemService} from './item.service'
import {ItemListComponent} from './item-list.component'
import {CartService} from '../shoppingcart/shoppingcart.service'

@Component({
  selector:'item-thumbnail',
  templateUrl: '/item-thumbnail.component.html'

})
export class ItemThumbnailComponent{
  @Input() item:Item

  constructor(private cartService: CartService){

  }


  addtoCart(p: Item){
    this.cartService.addtoCart(p);
  }
}
