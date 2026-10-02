import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  ref = inject(ChangeDetectorRef)

  @Input()
  cpt!: { value: number }

  detectChange() {
    this.ref.detectChanges()
  }
}
