import { ChangeDetectorRef, Component, inject, NgZone } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-test-zone',
  imports: [],
  templateUrl: './test-zone.component.html',
  styleUrl: './test-zone.component.css'
})
export class TestZoneComponent {
  counter = 0
  inter1:any

  zone = inject(NgZone)
  ref:ChangeDetectorRef = inject(ChangeDetectorRef)

  onTimer1s_1(){
    this.inter1 = setInterval(()=>this.counter++,1000)
  }

  onTimer5s_1(){
    this.zone.runOutsideAngular(()=>{
      this.inter1 = setInterval(()=>{
        this.counter++
        console.log(this.counter);
        if(this.counter % 5 ==0){
          this.zone.run(()=>{
            this.counter+=0
          })
        }
        
      },1000)

    })
  }


  onTimer1s_2(){
    interval(1000).pipe(
      take(10)
    ).subscribe(()=>this.counter++)
  }

  onTimer5s_2(){
    this.ref.detach()
    interval(1000).pipe(
      take(10)
    ).subscribe(
      ()=>{
        this.counter++
        console.log(this.counter);
        if(this.counter % 5 ==0){
          this.ref.detectChanges()
        }        
      }
    )

  }

  ngOnDestroy(){
    clearInterval(this.inter1)
  }
}
