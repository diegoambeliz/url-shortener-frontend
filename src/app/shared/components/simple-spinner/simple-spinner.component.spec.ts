import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSpinnerComponent } from './simple-spinner.component';

describe('SimpleSpinnerComponent', () => {
  let component: SimpleSpinnerComponent;
  let fixture: ComponentFixture<SimpleSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
