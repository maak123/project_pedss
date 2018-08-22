import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcivementsComponent } from './acivements.component';

describe('AcivementsComponent', () => {
  let component: AcivementsComponent;
  let fixture: ComponentFixture<AcivementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcivementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcivementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
