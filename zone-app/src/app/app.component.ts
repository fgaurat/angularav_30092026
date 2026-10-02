import { Component } from '@angular/core';
import { TestZoneComponent } from './test-zone/test-zone.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [TestZoneComponent,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zone-app';
}
