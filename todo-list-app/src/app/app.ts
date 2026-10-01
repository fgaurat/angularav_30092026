import { Component, signal } from '@angular/core';
import { TodoList } from './features/todo/components/todo-list/todo-list';
import { TodoForm } from './features/todo/components/todo-form/todo-form';

@Component({
  imports: [TodoList, TodoForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('todo-list-app');
}
