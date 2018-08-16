import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateteamcaptainComponent } from './createteamcaptain.component';

describe('CreateteamcaptainComponent', () => {
  let component: CreateteamcaptainComponent;
  let fixture: ComponentFixture<CreateteamcaptainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateteamcaptainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateteamcaptainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
