import { TestBed } from '@angular/core/testing';
import { CounterSignalService } from './counter-signal-service';

describe('CounterSignalService', () => {
  let service: CounterSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
