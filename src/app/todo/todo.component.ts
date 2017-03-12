import { Component, OnInit } from '@angular/core';
import { TodoService } from './../todo.service';
import { Todo } from './../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(
        todos => this.todos = todos);

    console.log(this.todos);
  }

}
