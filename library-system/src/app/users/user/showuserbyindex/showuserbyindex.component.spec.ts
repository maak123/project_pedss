import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowuserbyindexComponent } from './showuserbyindex.component';

describe('ShowuserbyindexComponent', () => {
  let component: ShowuserbyindexComponent;
  let fixture: ComponentFixture<ShowuserbyindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowuserbyindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowuserbyindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
