import {Component,ElementRef, Renderer, Input, Output, Optional, EventEmitter, ViewEncapsulation} from '@angular/core'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Item, Category,SubCategory, MetaItem} from '../items/item.model'
import {ItemService} from '../items/item.service'
import {ICarouselConfig, AnimationConfig, CarouselService} from 'angular4-carousel'


@Component({
  selector:'carousel-component',
  template:`<div class="centered" style="width: 500px; height: 500px">
  <carousel [sources]="imageSources" [config]="config"></carousel>
</div>`,
styles:[`.centered {margin-left:auto; margin-right:auto; background-color:white; border-style:solid;}`]
})
export class CarouselComponent{

  
  slides:any;
  items:MetaItem[] = [];
  category: Category[];
  subcategory:SubCategory[];

  currentElement:number = 0;
  autoPlay = false;
  number:number=0;
  public imageSources: string[] = [
      '/assets/featured/potatoloaf.png',
      '/assets/featured/fetacheese.png',
      '/assets/featured/eggs.png',
      '/assets/featured/babystroller.png',
      '/assets/featured/babybib.png'
  ];

  public config: ICarouselConfig = {
      verifyBeforeLoad: true,
      log: false,
      animation: true,
      animationType: AnimationConfig.SLIDE,
      autoplay:true,
      autoplayDelay:5000,
      stopAutoplayMinWidth: 768
  }

  

  constructor(private iService: ItemService, private carouselService: CarouselService){
    this.iService.getItems().then(r => this.callback(r));
  
}

  callback(r: Response): void {
    if (r.ok === true) {
      this.category = [];

      let alms = r.json();
        for (let a in alms) {
          this.category.push(Category.fromJSON(alms[a]));
      }

      for(let i = 0; i < this.category.length; i++){
        for(let j = 0; j < this.category[i].subcategories.length; j++){
          for(let k = 0; k < this.category[i].subcategories[j].items.length; k++){
            let meta: MetaItem;
            meta = new MetaItem();
            meta.imgSrc = this.category[i].subcategories[j].items[k].imagelink;
            meta.sType = "img";
            meta.imagelink = [];
            this.items.push(meta);
          }
        }
      }
      this.number = this.items.length;
    }
  }


  

}

