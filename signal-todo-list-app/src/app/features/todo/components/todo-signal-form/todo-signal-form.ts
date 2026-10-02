import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Todo } from '../../models/todo';
import { form, FormField, required } from '@angular/forms/signals';
import { ValueChangeEvent } from '@angular/forms';

@Component({
  imports: [FormField],
  selector: 'app-todo-signal-form',
  styleUrl: './todo-signal-form.css',
  templateUrl: './todo-signal-form.html',
})
export class TodoSignalForm {

  private todoService = inject(TodoService)

  todoFormModel = signal<Todo>({
    title: "",
    completed: false
  })

  readonly todoForm = form(this.todoFormModel,(schemaPath)=>{
      required(schemaPath.title,{message:"Et le titre alors ?"});
  })

  submit(event: Event) {
    event.preventDefault()
    console.log("submit");
    this.todoService.save(this.todoForm().value())

  }

}
