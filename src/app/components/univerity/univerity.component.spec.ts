import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverityComponent } from './univerity.component';

describe('UniverityComponent', () => {
  let component: UniverityComponent;
  let fixture: ComponentFixture<UniverityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniverityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
