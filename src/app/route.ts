import {Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders }      from '@angular/core';
import {ItemListComponent} from './items/item-list.component'
import {HomePageAppComponent} from './homepage.component'
import {CartComponent} from './shoppingcart/cart.component'
import {ItemThumbnailComponent} from'./items/item-thumbnail.component'
import {AboutUsComponent} from './footer/aboutus.component'
import {ContactComponent} from './footer/contactus.component'
import { ThankComponent } from './footer/thankyou.component';
import {CheckoutComponent} from './shoppingcart/checkout.component'

const appRoutes:Routes = [
  {path:'items', component:ItemListComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomePageAppComponent},
  {path:'cart', component:CartComponent},
  {path:'item', component:ItemThumbnailComponent},
  {path: 'aboutus', component:AboutUsComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'thanks', component:ThankComponent},
  {path: 'checkout', component:CheckoutComponent}
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
