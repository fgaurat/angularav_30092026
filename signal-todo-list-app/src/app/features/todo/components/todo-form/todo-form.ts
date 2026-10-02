import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-todo-form',
  styleUrl: './todo-form.css',
  templateUrl: './todo-form.html',
})
export class TodoForm {

    todoFormModel = {
    title:["faire de l'Angular",Validators.required],
    completed:[false]
  }
  
  private formBuilder = inject(FormBuilder);
  private todoService = inject(TodoService)
  
  todoForm:FormGroup

  constructor(){
    this.todoForm = this.formBuilder.group(this.todoFormModel)
  }
  submitTodo(){
    this.todoService.save(this.todoForm.value)

  }

}
