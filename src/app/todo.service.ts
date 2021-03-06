import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { BaseService } from './base.service';
import { Todo } from './todo';

@Injectable()
export class TodoService extends BaseService {

  public todosEmitter: EventEmitter<boolean> = new EventEmitter();

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

  postTodo(params: any): Observable<any> {
    return this.http.post(this.todosURL, params)
      .catch(this.handleError);
  }

  requestRefresh(): void {
    this.todosEmitter.emit(true);
  }

}
