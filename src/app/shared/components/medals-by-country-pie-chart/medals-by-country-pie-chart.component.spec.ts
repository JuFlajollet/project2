import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsByCountryPieChartComponent } from './medals-by-country-pie-chart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxChartsModule } from '@swimlane/ngx-charts';

describe('MedalsByCountryPieChartComponent', () => {
  let component: MedalsByCountryPieChartComponent;
  let fixture: ComponentFixture<MedalsByCountryPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxChartsModule
      ],
      declarations: [ MedalsByCountryPieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedalsByCountryPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
