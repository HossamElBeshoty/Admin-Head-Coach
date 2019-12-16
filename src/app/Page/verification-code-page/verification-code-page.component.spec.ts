import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationCodePageComponent } from './verification-code-page.component';

describe('VerificationCodePageComponent', () => {
  let component: VerificationCodePageComponent;
  let fixture: ComponentFixture<VerificationCodePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationCodePageComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationCodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
