import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsubeventbyidComponent } from './showsubeventbyid.component';

describe('ShowsubeventbyidComponent', () => {
  let component: ShowsubeventbyidComponent;
  let fixture: ComponentFixture<ShowsubeventbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsubeventbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsubeventbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
