import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAboutComponent } from './tab-about.component';

describe('TabAboutComponent', () => {
  let component: TabAboutComponent;
  let fixture: ComponentFixture<TabAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
