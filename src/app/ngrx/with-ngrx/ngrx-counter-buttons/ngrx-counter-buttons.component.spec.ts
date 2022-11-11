import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCounterButtonsComponent } from './ngrx-counter-buttons.component';

describe('NgrxCounterButtonsComponent', () => {
  let component: NgrxCounterButtonsComponent;
  let fixture: ComponentFixture<NgrxCounterButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxCounterButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxCounterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
