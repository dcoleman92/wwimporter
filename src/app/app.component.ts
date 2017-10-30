import {Component} from '@angular/core'
import {Http} from '@angular/http'

@Component({
  selector:'homepage-app',
  template:`
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {

  }
}
