import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumServiceComponent } from './sum-service-component';

import { describe, it, expect, beforeEach, vi } from 'vitest'; // Importations Vitest
import { SumService } from '../sum-service';

describe('SumServiceComponent', () => {
  let component: SumServiceComponent;
  let fixture: ComponentFixture<SumServiceComponent>;
  let sumService: SumService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumServiceComponent],
      providers: [SumService],
    }).compileComponents();

    fixture = TestBed.createComponent(SumServiceComponent);
    component = fixture.componentInstance;

    sumService = TestBed.inject(SumService);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call SumService add method', () => {
    // Utilisation de vi.spyOn() avec Vitest
    // const spy = vi.spyOn(sumService, 'add').and.callThrough();
    const spy = vi.spyOn(sumService, 'add');    // Exemple : si votre composant a une méthode qui appelle le service
    // component.calculer(2, 3);

    expect(spy).toHaveBeenCalledWith(2, 3);
  });

  it('should work with a mocked return value in Vitest', () => {
    // Simuler un retour spécifique avec Vitest
    vi.spyOn(sumService, 'add').mockReturnValue(42);

    // Testez votre composant ici...
  });
});