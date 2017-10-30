import {Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders }      from '@angular/core';
import {ItemListComponent} from './items/item-list.component'
import {HomePageAppComponent} from './homepage.component'
import {CartComponent} from './shoppingcart/cart.component'
import {ItemThumbnailComponent} from'./items/item-thumbnail.component'

const appRoutes:Routes = [
  {path:'items', component:ItemListComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomePageAppComponent},
  {path:'cart', component:CartComponent},
  {path:'item', component:ItemThumbnailComponent}
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
