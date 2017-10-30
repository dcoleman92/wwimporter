import {Injectable} from '@angular/core'
import {Category} from './item.model'
import {Subject, Observable} from 'rxjs/RX'
import {Http, Response, Headers, RequestOptions} from '@angular/http'

@Injectable()
export class CategoryService {
  constructor(private http:Http) {}

  getCategories():Observable<Category[]>{
    return this.http.get("./api/itemsdata.json").map((response: Response) => {return<Category[]>response.json()
    }).catch(this.handleError)

  }


 private handleError(error: Response) {
    return Observable.throw(error.statusText)
  }
  }
