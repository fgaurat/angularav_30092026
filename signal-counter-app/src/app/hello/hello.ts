import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.css',
  templateUrl: './hello.html',
})
export class Hello {

  name = input.required()
  job = input("dev")


  ngOnChanges(value:any){
    console.log(value);
  }
}
