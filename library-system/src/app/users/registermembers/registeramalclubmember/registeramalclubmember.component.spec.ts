import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteramalclubmemberComponent } from './registeramalclubmember.component';

describe('RegisteramalclubmemberComponent', () => {
  let component: RegisteramalclubmemberComponent;
  let fixture: ComponentFixture<RegisteramalclubmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteramalclubmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteramalclubmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
