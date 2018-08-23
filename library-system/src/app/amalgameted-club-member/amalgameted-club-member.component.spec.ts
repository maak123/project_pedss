import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmalgametedClubMemberComponent } from './amalgameted-club-member.component';

describe('AmalgametedClubMemberComponent', () => {
  let component: AmalgametedClubMemberComponent;
  let fixture: ComponentFixture<AmalgametedClubMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmalgametedClubMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmalgametedClubMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
