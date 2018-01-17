import {Component,ElementRef, Renderer, Input, Output, Optional, EventEmitter, ViewEncapsulation} from '@angular/core'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Item, Category,SubCategory, MetaItem} from '../items/item.model'
import {ItemService} from '../items/item.service'
import {ICarouselConfig, AnimationConfig, CarouselService} from 'angular4-carousel'
import {AngularFontAwesomeComponent} from 'angular-font-awesome'


@Component({
  selector:'carousel-component',
  template:`
  Toggle Slideshow:<input [(ngModel)]="checkboxValue" id="checkbox" type="checkbox" (change)="carouselState()">
  <div class="centered" style="width: 500px; height: 600px">
 <carousel [sources]="imageSources" [config]="config"></carousel>
 
</div>`,
styles:[`.centered {margin-left:auto; margin-right:auto; background-color:white; border-style:solid;}`],

})
export class CarouselComponent{

  checkboxValue: boolean = true;
  slides:any;
  items:MetaItem[] = [];
  category: Category[];
  subcategory:SubCategory[];

  currentElement:number = 0;
  
  number:number=0;
  public imageSources: string[] = [
      '/assets/featured/potatoloaf.png',
      '/assets/featured/fetacheese.png',
      '/assets/featured/eggs.png',
      '/assets/featured/babystroller.png',
      '/assets/featured/babybib.png'
  ];
  public carouselState(): void{
    if(this.checkboxValue){
      this.config.autoplay = true
    }
    else{
      this.config.autoplay = false
    }
  }

  public config: ICarouselConfig = {
      verifyBeforeLoad: true,
      log: true,
      animation: true,
      animationType: AnimationConfig.SLIDE,
      autoplay: this.checkboxValue,
      autoplayDelay:3000,
      stopAutoplayMinWidth: 768
  }

  

  constructor(private iService: ItemService, private carouselService: CarouselService){
    //this.iService.getItems().then(r => this.callback(r));
  
}


  

}

