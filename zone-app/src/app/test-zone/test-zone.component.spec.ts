import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZoneComponent } from './test-zone.component';

describe('TestZoneComponent', () => {
  let component: TestZoneComponent;
  let fixture: ComponentFixture<TestZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
