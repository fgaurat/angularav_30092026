import { Component, inject } from '@angular/core';
import { CounterSignalService } from '../counter-signal-service';

@Component({
  imports: [],
  selector: 'app-inc',
  styleUrl: './inc.css',
  templateUrl: './inc.html',
})
export class Inc {
    counterSignalService = inject(CounterSignalService)

    doInc(){
      this.counterSignalService.inc()
    }


}
