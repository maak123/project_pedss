import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfacsportcaptainComponent } from './registerfacsportcaptain.component';

describe('RegisterfacsportcaptainComponent', () => {
  let component: RegisterfacsportcaptainComponent;
  let fixture: ComponentFixture<RegisterfacsportcaptainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterfacsportcaptainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterfacsportcaptainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
