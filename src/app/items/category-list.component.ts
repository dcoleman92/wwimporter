import {Component,OnInit} from '@angular/core'
import {CategoryService} from './category.service'
import {Item, Category} from './item.model'
import {ActivatedRoute} from '@angular/router'

@Component({
  template: `
      <h1>List of Products</h1>
      <hr/>
    <div class="row">
      <div *ngFor="let category of categories" class="col-md-5" >
        <item-thumbnail [item] = "item"></item-thumbnail>
      </div>
    </div>
    `
})
export class CategoryComponent implements OnInit {
categories: Category[]

  constructor(private categoryService:CategoryService, private route:ActivatedRoute) {

  }
  ngOnInit() {
    this.categories = [];
    this.categories = this.route.snapshot.data['category'];

  }

}
