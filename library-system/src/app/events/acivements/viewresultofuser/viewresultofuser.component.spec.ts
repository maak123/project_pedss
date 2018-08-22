import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewresultofuserComponent } from './viewresultofuser.component';

describe('ViewresultofuserComponent', () => {
  let component: ViewresultofuserComponent;
  let fixture: ComponentFixture<ViewresultofuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewresultofuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewresultofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
