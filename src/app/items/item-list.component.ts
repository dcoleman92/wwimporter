import {Component, OnInit, Input} from '@angular/core'
import {ItemService} from './item.service'
import {CartService} from '../shoppingcart/shoppingcart.service'
import {ItemThumbnailComponent} from './item-thumbnail.component'
import {ActivatedRoute, Router, Params} from '@angular/router'
import {Subject, Observable } from 'rxjs/RX'
import {Item, Category, SubCategory, ShoppingCart} from './item.model'
import {Http, Response, Headers, RequestOptions} from '@angular/http'

@Component({
  selector:'item-list',
  templateUrl:'item-list.component.html',
  styleUrls: ['../app.component.css']
})
export class ItemListComponent implements OnInit
{
  shoppingCart: ShoppingCart[] = []
  category: Category[] = [];
  selectedSubCat : SubCategory;
  selectedCat: Category;
  selectedItem: Item;
  selectFilter: string = "";
  message: string = "";
  goItem:boolean;
  isSingle: boolean = false;


  constructor(private iService: ItemService, private route:ActivatedRoute, private cartService: CartService){
    this.selectedSubCat = new SubCategory();
    this.selectedCat = new Category();
  }

  ngOnInit() {
    this.category = this.route.snapshot.data['items']
    //let its = this.iService.getItems();
    this.iService.getItems().then(r => this.callback(r)).catch(r => this.errorCallback(r));

  }


  callback(r: Response): void {
    if (r.ok === true) {
      this.category = [];

      let alms = r.json();
        for (let a in alms) {
          this.category.push(Category.fromJSON(alms[a]));
      }
    }
    else {
      this.message = r.statusText
    }
  }

  setCat(s: Category): void{
    this.selectedCat = s;
    this.selectedSubCat = new SubCategory();
  }
  setSub(s: SubCategory): void{
    this.selectedSubCat = s;
    this.selectedItem = new Item();
  }

  getCatName(s: Category): string{
    return s.category;
  }
  filterBy(): void{

      for(let i = 0; i < this.selectedCat.subcategories.length;i++){
        if (this.selectFilter == "2"){
          this.selectedCat.subcategories[i].items = this.selectedCat.subcategories[i].items.sort(function (a: Item, b: Item) {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
            return 0;
          });
        }
        else if (this.selectFilter == "3"){
          this.selectedCat.subcategories[i].items = this.selectedCat.subcategories[i].items.sort(function (a: Item, b: Item) {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return 1;
            return 0;
          });
        }
        else if(this.selectFilter == "4"){


        }
        else if(this.selectFilter == "5"){
          this.selectedCat.subcategories[i].items = this.selectedCat.subcategories[i].items.sort(function (a:Item, b:Item){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
          })

        }
        else if(this.selectFilter == "6"){
          this.selectedCat.subcategories[i].items = this.selectedCat.subcategories[i].items.sort(function (a:Item, b:Item){
            if(a.rating < b.rating) return -1;
            if(a.rating > b.rating) return 1;
          })

        }

      }
    }


  showSubmenu(id: string):void{
    if ($("#submenu" + id).is(":visible") == true){
      $("#submenu" + id).hide();
    }
    else{
      $("#submenu" + id).show();
    }
  }
  addtoCart(p: Item){
    this.cartService.addtoCart(p);

  }
  goToItem(p: Item){
    this.selectedItem = p;
    this.isSingle= true;
  }
  cancelGoToItem(){
    this.isSingle = false;
    this.selectedItem = new Item
  }

  errorCallback(r: Response): void {

  }

}
