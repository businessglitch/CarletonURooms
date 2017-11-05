import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderDisplayComponent } from './calender-display.component';

describe('CalenderDisplayComponent', () => {
  let component: CalenderDisplayComponent;
  let fixture: ComponentFixture<CalenderDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
