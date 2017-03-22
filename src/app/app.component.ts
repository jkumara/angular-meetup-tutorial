import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './todo-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  todos = [];

  constructor(private todoService: TodoServiceService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  onAddNewItem(newItem) {
    this.todoService.addTodo(newItem)
  }
}
