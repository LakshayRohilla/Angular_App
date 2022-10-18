import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SECTION5cockpitComponent } from './section5cockpit.component';

describe('SECTION5cockpitComponent', () => {
  let component: SECTION5cockpitComponent;
  let fixture: ComponentFixture<SECTION5cockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SECTION5cockpitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SECTION5cockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
