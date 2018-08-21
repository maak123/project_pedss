import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteamcardbyidComponent } from './viewteamcardbyid.component';

describe('ViewteamcardbyidComponent', () => {
  let component: ViewteamcardbyidComponent;
  let fixture: ComponentFixture<ViewteamcardbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewteamcardbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewteamcardbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
