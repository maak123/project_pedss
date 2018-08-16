import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubeventlistComponent } from './subeventlist.component';

describe('SubeventlistComponent', () => {
  let component: SubeventlistComponent;
  let fixture: ComponentFixture<SubeventlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubeventlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubeventlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
