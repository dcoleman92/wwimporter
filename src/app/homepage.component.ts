import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {Item} from './items/item.model'

@Component({
  templateUrl:"homepage.html"
})
export class HomePageAppComponent {

  constructor(private router:Router) {

  }
}
