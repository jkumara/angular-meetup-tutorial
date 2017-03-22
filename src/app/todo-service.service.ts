import { Injectable } from '@angular/core';

@Injectable()
export class TodoServiceService {

  todos = [{
    name: 'Host the angular-meetup',
    done: true,
    active: false
  }, {
    name: 'Drink lots of beer',
    done: false,
    active: false
  }];

  constructor() { }

  addTodo(newItem) {
    this.todos.push(newItem)
  }

  getTodos = () => this.todos;

  removeTodoItem(item) {
    const i = this.todos.indexOf(item);
    this.todos.splice(i, 1)
  }
}
