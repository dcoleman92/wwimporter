import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule, ActivatedRouteSnapshot, Router, Params} from '@angular/router'
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'
import {DecimalPipe} from '@angular/common'
import {routing} from './route'

import { NavbarComponent} from './nav/navbar.component'
import {FooterComponent} from './footer/footer.component'
import { HomePageAppComponent} from './homepage.component'
import { ItemListComponent} from './items/item-list.component'
import { CategoryComponent} from './items/category-list.component'
import {ItemThumbnailComponent} from './items/item-thumbnail.component'
import {CarouselComponent} from './carousel/carousel.component'
import {printSlide} from './carousel/safehtml.pipe'
import {CartComponent} from './shoppingcart/cart.component'
import { AboutUsComponent } from './footer/aboutus.component';
import {ContactComponent} from './footer/contactus.component'
import {CarouselModule} from 'angular4-carousel'

import { ItemService} from './items/item.service'
import {ItemResolver} from './items/item-resolver.service'
import {CategoryService} from './items/category.service'
import {CategoryResolver} from './items/category-resolver.service'
import {SafeHtmlPipe} from './carousel/safehtml.pipe'
import {CartService} from './shoppingcart/shoppingcart.service'
import {ThankComponent} from './footer/thankyou.component'
import {CheckoutComponent} from './shoppingcart/checkout.component'
import {AngularFontAwesomeModule} from 'angular-font-awesome'


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageAppComponent,
    NavbarComponent,
    FooterComponent,
    ItemListComponent,
    CategoryComponent,
    ItemThumbnailComponent,
    CarouselComponent,
    printSlide,
    SafeHtmlPipe,
    CartComponent,
    AboutUsComponent,
    ContactComponent,
    ThankComponent,
    CheckoutComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    RouterModule,
    CarouselModule,
    AngularFontAwesomeModule
  ],
  providers: [
    ItemService,
    ItemResolver,
    CategoryResolver,
    CategoryService,
    CartService,
    CartComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

