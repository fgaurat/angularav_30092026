import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-page-03',
  styleUrl: './page-03.css',
  templateUrl: './page-03.html',
})
export class Page03 {

  @Input()
  firstName!:string


}
