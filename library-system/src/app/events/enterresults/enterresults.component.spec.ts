import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterresultsComponent } from './enterresults.component';

describe('EnterresultsComponent', () => {
  let component: EnterresultsComponent;
  let fixture: ComponentFixture<EnterresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
