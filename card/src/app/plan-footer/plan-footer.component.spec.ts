import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFooterComponent } from './plan-footer.component';

describe('PlanFooterComponent', () => {
  let component: PlanFooterComponent;
  let fixture: ComponentFixture<PlanFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
