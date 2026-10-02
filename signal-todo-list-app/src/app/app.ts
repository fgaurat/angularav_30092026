import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoForm } from './features/todo/components/todo-form/todo-form';
import { TodoList } from './features/todo/components/todo-list/todo-list';
import { TodoSignalForm } from './features/todo/components/todo-signal-form/todo-signal-form';

@Component({
  imports: [RouterOutlet, TodoForm, TodoList, TodoSignalForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('signal-todo-list-app');
}
