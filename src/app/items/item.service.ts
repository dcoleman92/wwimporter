import {Injectable} from '@angular/core'
import {Item, Category} from './item.model'
import {Subject, Observable} from 'rxjs/RX'
import {Http, Response, Headers, RequestOptions} from '@angular/http'


@Injectable()
export class ItemService {
  private _url='assets/itemsdata.json'
  constructor(private http:Http) {}

  getItems(): Promise<Response> {
    return this.http.get(this._url).toPromise().then(res => res).catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


  getItem():Observable<Item>{
    return this.http.get("./itemsdata.json").map((response: Response) => {return<Item>response.json()
    }).catch(this.handleError)
  }

}
