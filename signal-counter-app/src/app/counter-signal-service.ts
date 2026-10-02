import { Service, Signal, signal, WritableSignal } from '@angular/core';

@Service()
export class CounterSignalService {


    private _count: WritableSignal<number> = signal(0)
    count: Signal<number> = this._count.asReadonly()

    inc() {
        this._count.update(i => i + 1)
    }


}
