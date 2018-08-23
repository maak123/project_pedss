import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewachivementsofuserComponent } from './viewachivementsofuser.component';

describe('ViewachivementsofuserComponent', () => {
  let component: ViewachivementsofuserComponent;
  let fixture: ComponentFixture<ViewachivementsofuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewachivementsofuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewachivementsofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
