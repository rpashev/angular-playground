import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo;
  @Output() remove = new EventEmitter();
  @Output() change = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    const status: 'pending' | 'completed' = event.target.checked
      ? 'completed'
      : 'pending';

    this.change.emit({ id: this.todo.id, status });
  }
  onDelete() {
    this.remove.emit(this.todo.id);
  }
}
