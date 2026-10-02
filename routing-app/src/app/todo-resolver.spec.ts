import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { todoResolverResolver } from './todo-resolver-resolver';

describe('todoResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => todoResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
