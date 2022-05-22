import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToDo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy {
  newTask: string;
  todos: ToDo[];
  subscription: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.subscription = this.todoService.todosChanged.subscribe(
      (todos: ToDo[]) => (this.todos = todos)
    );

    this.todos = this.todoService.getTodos();
  }

  createToDoHandler() {
    console.log(this.newTask);
    if (this.newTask !== '') {
      this.todoService.addToDo(this.newTask);
    }
    this.newTask = '';
  }

  onChangedHandler(data: {
    id: number | string;
    status: 'completed' | 'pending';
  }) {
    this.todoService.changeStatus(data.id, data.status);
  }

  onDeleteHandler(id: string | number) {
    console.log(id);
    this.todoService.deleteToDo(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
