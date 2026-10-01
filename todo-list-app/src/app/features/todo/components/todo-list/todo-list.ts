import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Todo, Todos } from '../../models/todo';
import { EMPTY, filter, merge, Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageQueueService } from '../../../../core/services/message-queue-service';
import { Actions } from '../../../../core/enums/actions';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  imports: [AsyncPipe, FormsModule],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {

  todoService: TodoService = inject(TodoService)
  private busService = inject(MessageQueueService);

  todos$: Observable<Todos> = EMPTY

  constructor() {


    // this.todos$ = this.todoService.findAll()
    // this.busService.bus$.subscribe((action)=>{
    //   console.log(action);
      
    //   this.todos$ = this.todoService.findAll()}
    // )


    const init$ = this.busService.bus$.pipe(
      filter(action => action.type===Actions.LOAD_TODOS)
    )

    const delete$ = this.busService.bus$.pipe(
      filter(action => action.type===Actions.DELETE_TODO),
      switchMap((action) => this.todoService.delete(action.payload))
    )

    const add$ = this.busService.bus$.pipe(
      filter(action => action.type===Actions.NEW_TODO),
      switchMap((action) => this.todoService.save(action.payload))
    )

    this.todos$ = merge(init$,delete$,add$).pipe(
            switchMap(() => this.todoService.findAll())
    )


  }

  delete(todo: Todo) {
    // this.todos$ = this.todoService.delete(todo).pipe(
    //   switchMap(() => this.todoService.findAll())
    // )
        this.busService.dispatch({type:Actions.DELETE_TODO,payload:todo})
    
  }




}
