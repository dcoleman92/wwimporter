import {Component,ElementRef, Renderer, Input, Output, Optional, EventEmitter, ViewEncapsulation} from '@angular/core'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Item, Category,SubCategory, MetaItem} from '../items/item.model'
import {ItemService} from '../items/item.service'

@Component({
  selector:'carousel',
  template:`<div class="slider">
  <div class="sliderArrows">
    <a (click)="backWard()">&lt;</a>
    <a (click)="forWard()">&gt;</a>
  </div>
  <ul class="slideShow">
    <li *ngFor="let li of items" [ngStyle]="{'display':li?.hidden?'none':'unset'}" [ngClass]="li?.imagelink">
        <printSlide [meta]="li"></printSlide>
    </li>
  </ul>
</div>`,
styleUrls:["carousel-style.css"]
})
export class CarouselComponent{

  @Input('playInterval') interval:any = 2000;
  slides:any;
  items:MetaItem[] = [];
  category: Category[];
  subcategory:SubCategory[];

  @Input('autoPlay') set _autoPlay(b:boolean){
      this.autoPlay = b
      if(b){
          this.auto(this.interval);
      }
  }
  currentElement:number = 0;
  autoPlay = false;
  number:number=0;

  intervalTime:number = 5000;//in ms(mili seconds)
  private delayHideSetTimeOutControl:any;

  constructor(private iService: ItemService){
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


  backWard(){
      if(this.autoPlay){
          clearInterval(this.interval);
      }
      this.currentElement=this.currentElement-1;
      if(this.currentElement<0){
          this.currentElement=this.number-1;
      }
      this.removeClasses();
      var prev=this.currentElement==this.number-1?0:this.currentElement+1;
     // this.items[prev].classList.add("animateForward");
      this.items[prev].imagelink = ["animateForward"];
      this.show(this.items[prev]);
      this.show(this.items[this.currentElement]);

      clearTimeout(this.delayHideSetTimeOutControl);

      this.delayHideSetTimeOutControl=this.delayHide(this.items[prev],300);
      //this.lis[this.currentElement].classList.add("active");
      this.items[this.currentElement].imagelink = ["active","backward"];
      //this.lis[this.currentElement].classList.add("backward");
      if(this.autoPlay)this.auto(this.intervalTime);
  }

  removeClasses(){
      for(var i=0;i<this.number;i++){
          this.items[i].imagelink = []
      }
  }
  forWard(){
      console.log("forward called")
      if(this.autoPlay)clearInterval(this.interval);
      this._forWard();
      if(this.autoPlay)this.auto(this.intervalTime);
  }
  private _forWard(){
      this.currentElement=1+this.currentElement;
      //this.lis=this.slideShow.childNodes;
      if(this.currentElement>=this.number){
          this.currentElement=0;
      }
      this.removeClasses();
      var prev=this.currentElement==0?this.number-1:this.currentElement-1;
      //this.lis[prev].classList.add("animateBack");
      console.log(this.items[prev]);
      this.items[prev]["imagelink"] = ["animateBack"];

      this.show(this.items[prev]);
      this.show(this.items[this.currentElement]);

      clearTimeout(this.delayHideSetTimeOutControl);
      this.delayHideSetTimeOutControl=this.delayHide(this.items[prev],300);
      //this.lis[this.currentElement].classList.add("active");
      //this.lis[this.currentElement].classList.add("forward");
      this.items[this.currentElement].imagelink = ["active","forward"];
  }
  auto(ms){
      this.autoPlay=true;
      this.intervalTime=ms;
      this.interval=setInterval(this._forWard.bind(this),ms);
  }
  delayHide(el,ms){
      return setTimeout(()=> el.hidden = true,ms);
  }
  show(el){
      el.hidden = false;
  }
}

