import {Injectable} from '@angular/core'
import {Resolve, ActivatedRouteSnapshot} from '@angular/router'
import {ItemService} from './item.service'

@Injectable()
export class ItemResolver implements Resolve<any> {
  constructor(private itemService:ItemService) {

  }
  resolve(route: ActivatedRouteSnapshot) {
    return this.itemService.getItem()
  }
}
