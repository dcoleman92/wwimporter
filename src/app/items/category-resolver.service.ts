import {Injectable} from '@angular/core'
import {Resolve, ActivatedRouteSnapshot} from '@angular/router'
import {CategoryService} from './category.service'

@Injectable()
export class CategoryResolver implements Resolve<any> {
  constructor(private categoryService: CategoryService) {}

  resolve(route:ActivatedRouteSnapshot){
    return this.categoryService.getCategories()
  }
}
