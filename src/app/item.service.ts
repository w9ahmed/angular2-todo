import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Item } from './item';

@Injectable()
export class ItemService extends BaseService {

  constructor(private http: Http) { super(); }

  getItems(todoId: number): Observable<Item[]> {
    return this.http.get(this.getItemsURL(todoId))
      .map(this.extractData)
      .catch(this.handleError);
  }

  private getItemsURL(todoId: number): string {
    return this.baseURL + `/todos/${todoId}/items`;
  }

}
