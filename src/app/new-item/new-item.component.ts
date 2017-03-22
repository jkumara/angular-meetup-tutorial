import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  newTodoName = ''

  @Output()
  onNewItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodoItem() {
    this.onNewItem.emit({
      name: this.newTodoName,
      done: false,
      active: false
    });

    this.newTodoName = ''
  }
}
