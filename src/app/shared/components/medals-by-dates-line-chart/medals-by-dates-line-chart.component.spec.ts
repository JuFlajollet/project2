import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsByDatesLineChartComponent } from './medals-by-dates-line-chart.component';

describe('MedalsByDatesLineChartComponent', () => {
  let component: MedalsByDatesLineChartComponent;
  let fixture: ComponentFixture<MedalsByDatesLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedalsByDatesLineChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedalsByDatesLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
