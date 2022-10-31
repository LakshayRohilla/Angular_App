import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section5serverElementComponent } from './section5server-element.component';

describe('Section5serverElementComponent', () => {
  let component: Section5serverElementComponent;
  let fixture: ComponentFixture<Section5serverElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section5serverElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section5serverElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
