import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDo } from './todo.model';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: ToDo[] = [
    { task: 'Get a job brah', status: 'pending', id: 1 },
    { task: 'Be a person', status: 'completed', id: 2 },
  ];

  todosChanged = new BehaviorSubject(this.todos.slice());

  constructor() {}

  getTodos() {
    return this.todos.slice();
  }

  addToDo(task: string) {
    const id = uuidv4();
    const newToDo: ToDo = { task, id, status: 'pending' };
    this.todos.unshift(newToDo);
    this.todosChanged.next(this.todos.slice());
  }

  deleteToDo(id: number | string) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    this.todosChanged.next(this.todos.slice());
  }

  changeStatus(id: number | string, status: 'pending' | 'completed') {
    const toBeUpdatedTodo: ToDo | undefined = this.todos.find(
      (todo) => todo.id === id
    );
    if (toBeUpdatedTodo) toBeUpdatedTodo.status = status;
    this.todosChanged.next(this.todos.slice());
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => todo.status !== 'completed');
    this.todosChanged.next(this.todos.slice());
  }
}
