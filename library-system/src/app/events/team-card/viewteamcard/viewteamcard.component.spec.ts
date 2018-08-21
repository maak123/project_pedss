import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteamcardComponent } from './viewteamcard.component';

describe('ViewteamcardComponent', () => {
  let component: ViewteamcardComponent;
  let fixture: ComponentFixture<ViewteamcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewteamcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewteamcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
