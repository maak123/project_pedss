import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubeventComponent } from './subevent.component';

describe('SubeventComponent', () => {
  let component: SubeventComponent;
  let fixture: ComponentFixture<SubeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
