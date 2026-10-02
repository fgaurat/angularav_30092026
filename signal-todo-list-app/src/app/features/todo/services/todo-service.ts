import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Todo, Todos } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private http = inject(HttpClient);

  // Lecture réactive : la requête part dès que la ressource est lue
  private readonly todosResource = httpResource<Todos>(
    () => environment.urlTodos,
    { defaultValue: [] }
  );

  // Signals exposés en lecture seule aux composants
  readonly todos = this.todosResource.value.asReadonly();
  readonly isLoading = this.todosResource.isLoading;
  readonly error = this.todosResource.error;

  reload(): void {
    this.todosResource.reload();
  }

  async delete(todo: Todo): Promise<void> {
    await firstValueFrom(
      this.http.delete<void>(`${environment.urlTodos}/${todo.id}`)
    );
    // Mise à jour locale, sans refaire de GET
    this.todosResource.value.update(todos => todos.filter(t => t.id !== todo.id));
  }

  async save(todo: Todo): Promise<Todo> {
    const created = await firstValueFrom(
      this.http.post<Todo>(environment.urlTodos, todo)
    );
    this.todosResource.value.update(todos => [...todos, created]);
    return created;
  }
}