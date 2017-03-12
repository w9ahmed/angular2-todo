import { Component, OnInit } from '@angular/core';
import { TodoService } from './../todo.service';
import { Todo } from './../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
    .subscribe(todos => this.todos = todos);
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo)
    .subscribe(data => this.getTodos());
  }

}
