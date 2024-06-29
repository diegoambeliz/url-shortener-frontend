import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificationSuccessComponent } from './email-verification-success.component';

describe('EmailVerificationSuccessComponent', () => {
  let component: EmailVerificationSuccessComponent;
  let fixture: ComponentFixture<EmailVerificationSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailVerificationSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVerificationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
