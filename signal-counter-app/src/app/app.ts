import { Component, computed, effect, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Show } from './show/show';
import { Inc } from './inc/inc';
import { HttpClient, httpResource } from '@angular/common/http';
import { Hello } from './hello/hello';

@Component({
  imports: [Show, Inc, Hello],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('signal-counter-app');
  private count: WritableSignal<number> = signal(0)
  // private users: WritableSignal<{name:string,email:string,id:number}[]> = signal([])
  
  readonly users = httpResource<{name: string, email: string, id: number}[]>(
    () => 'https://jsonplaceholder.typicode.com/users'
  );  
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  httpClient:HttpClient = inject(HttpClient) 
  
  constructor() {
    
    effect(() => {
      if (this.count() > 7) {
        console.log(">7!")
      }
    })

  }

  setTo3() {
    this.count.set(3)
  }

  increment() {
    this.count.update(previousValue => previousValue + 1)
  }


  
  loadUsers_old(){
    const url = "https://jsonplaceholder.typicode.com/users"

    this.httpClient.get<{name:string,email:string,id:number}[]>(url).subscribe((data) => this.users.set(data))
  }
  
  loadUsers(){
    this.users.reload()

  }
}
