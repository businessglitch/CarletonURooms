import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFeedbackComponent } from './tab-feedback.component';

describe('TabFeedbackComponent', () => {
  let component: TabFeedbackComponent;
  let fixture: ComponentFixture<TabFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
