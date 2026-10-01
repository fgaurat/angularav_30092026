import { Service } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Action } from '../models/action';
import { Actions } from '../enums/actions';

@Service()
export class MessageQueueService {

    private bus:BehaviorSubject<Action> = new BehaviorSubject<Action>({type:Actions.LOAD_TODOS})

    public bus$:Observable<Action> = this.bus.asObservable()

    dispatch(action:Action){
        console.log(action);
        
        this.bus.next(action)
    }

}
