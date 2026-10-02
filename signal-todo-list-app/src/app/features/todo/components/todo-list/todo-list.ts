import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Todo } from '../../models/todo';

@Component({
  imports: [],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {

  todoService = inject(TodoService)
  readonly todos = this.todoService.todos

  async delete(todo:Todo){
    
    await this.todoService.delete(todo)

  }


}
