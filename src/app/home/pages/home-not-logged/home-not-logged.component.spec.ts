import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNotLoggedComponent } from './home-not-logged.component';

describe('HomeNotLoggedComponent', () => {
  let component: HomeNotLoggedComponent;
  let fixture: ComponentFixture<HomeNotLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNotLoggedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNotLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
