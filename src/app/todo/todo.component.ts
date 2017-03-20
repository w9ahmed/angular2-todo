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

  public newTodoTitle: string;
  public newTodoCreatedBy: string;

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.getTodos();

    this.todoService.todosEmitter.subscribe((event: boolean) => {
      this.getTodos();
    });
  }

  getTodos(): void {
    this.todoService.getTodos()
    .subscribe(todos => this.todos = todos);
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo)
    .subscribe(data => this.getTodos());
  }

  postTodo(): void {
    const newTodo: any = {
      'title': this.newTodoTitle,
      'created_by': this.newTodoCreatedBy
    };

    this.todoService.postTodo(newTodo)
    .subscribe(data => this.getTodos());
  }

  private deleteNewTodo(): void {
    delete this.newTodoTitle;
    delete this.newTodoCreatedBy;
  }

}
