import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCounterOutputComponent } from './ngrx-counter-output.component';

describe('NgrxCounterOutputComponent', () => {
  let component: NgrxCounterOutputComponent;
  let fixture: ComponentFixture<NgrxCounterOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxCounterOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxCounterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
