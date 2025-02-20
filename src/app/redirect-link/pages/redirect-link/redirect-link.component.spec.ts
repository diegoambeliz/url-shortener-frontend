import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectLinkComponent } from './redirect-link.component';

describe('RedirectLinkComponent', () => {
  let component: RedirectLinkComponent;
  let fixture: ComponentFixture<RedirectLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedirectLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
