import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo-service';
import { MessageQueueService } from '../../../../core/services/message-queue-service';
import { Actions } from '../../../../core/enums/actions';

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
  
  private busService = inject(MessageQueueService);
  private formBuilder = inject(FormBuilder);
  private todoService: TodoService = inject(TodoService)
  
  todoForm:FormGroup

  constructor(){


    this.todoForm = this.formBuilder.group(this.todoFormModel)
  }
  submitTodo(){
    // this.todoService.save(this.todoForm.value).subscribe()
    this.busService.dispatch({type:Actions.NEW_TODO,payload:this.todoForm.value})
  }


}
