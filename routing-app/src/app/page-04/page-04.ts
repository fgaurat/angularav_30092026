import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-page-04',
  styleUrl: './page-04.css',
  templateUrl: './page-04.html',
})
export class Page04 {

  todos = input.required<{id:number,title:string}[]>()
}
