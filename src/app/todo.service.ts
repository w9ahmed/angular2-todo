import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { BaseService } from './base.service';
import { Todo } from './todo';

@Injectable()
export class TodoService extends BaseService {

  private todosURL = this.baseURL + '/todos';
  constructor(private http: Http) { super(); }

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.todosURL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteTodo(todo: Todo): Observable<any> {
    return this.http.delete(this.todosURL + `/${todo.id}`)
      .catch(this.handleError);
  }

}
