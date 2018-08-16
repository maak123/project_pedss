import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermembersComponent } from './registermembers.component';

describe('RegistermembersComponent', () => {
  let component: RegistermembersComponent;
  let fixture: ComponentFixture<RegistermembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistermembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
