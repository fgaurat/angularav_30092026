

import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { TodoService } from './todo.service';
import { Todo } from '../models/todo.model';
import { environment } from '../../environments/environment';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch todos', () => {
    const mockTodos: Todo[] = [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
    ];

    service.getTodos().subscribe((todos) => {
      expect(todos.length).toBe(2);
      expect(todos).toEqual(mockTodos);
    });

    const req = httpMock.expectOne(environment.apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockTodos);
  });

  it('should add a todo', () => {
    const newTodo: Todo = { title: 'New Todo', completed: false };
    const createdTodo: Todo = { id: 3, ...newTodo };

    service.addTodo(newTodo).subscribe((todo) => {
      expect(todo).toEqual(createdTodo);
    });

    const req = httpMock.expectOne(environment.apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newTodo);
    req.flush(createdTodo);
  });

  it('should update a todo', () => {
    const updatedTodo: Todo = { id: 1, title: 'Updated', completed: true };

    service.updateTodo(updatedTodo).subscribe((todo) => {
      expect(todo).toEqual(updatedTodo);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedTodo);
  });

  it('should delete a todo', () => {
    service.deleteTodo(1).subscribe();

    const req = httpMock.expectOne(`${environment.apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
