import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

export const todoResolver: ResolveFn<boolean> = (route, state) => {

  const http = inject(HttpClient)

  return http.get<any>("http://localhost:3000/todos");
};
