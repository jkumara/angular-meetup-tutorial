import { Component, OnInit, Input } from '@angular/core';
import { TodoServiceService } from '../todo-service.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {

  @Input()
  todoItem;

  constructor(private todoService: TodoServiceService) {}

  ngOnInit() {
  }

  removeMe() {
    this.todoService.removeTodoItem(this.todoItem)
  }

}
