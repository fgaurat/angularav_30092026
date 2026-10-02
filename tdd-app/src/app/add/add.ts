import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-add',
  styleUrl: './add.css',
  templateUrl: './add.html',
})
export class Add {

  valA:number = 0
  valB:number = 0
  result:number = 0

  add(){
    this.result = Number(this.valA)+Number(this.valB)
  }


}
