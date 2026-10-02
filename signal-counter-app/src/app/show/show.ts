import { Component, inject } from '@angular/core';
import { CounterSignalService } from '../counter-signal-service';

@Component({
  imports: [],
  selector: 'app-show',
  styleUrl: './show.css',
  templateUrl: './show.html',
})
export class Show {
  counterSignalService = inject(CounterSignalService)
  count = this.counterSignalService.count

}
