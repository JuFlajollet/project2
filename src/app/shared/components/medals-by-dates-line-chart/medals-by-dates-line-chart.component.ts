import { Component, Input, OnInit } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { ChartLineData } from 'src/app/core/models/ChartLineData';
import { ChartLineDataSerie } from 'src/app/core/models/ChartLineDataSerie';
import { OlympicCountry } from 'src/app/core/models/Olympic';
import { Participation } from 'src/app/core/models/Participation';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-medals-by-dates-line-chart',
  templateUrl: './medals-by-dates-line-chart.component.html',
  styleUrl: './medals-by-dates-line-chart.component.scss'
})
export class MedalsByDatesLineChartComponent implements OnInit {

  @Input()
  country!: string;

  view: [number, number] = [700, 300];

  olympicData: ChartLineData[] = [];
  olympicDataSeries: ChartLineDataSerie[] = [];

  lineData$!: Observable<ChartLineData[]>;

  // options for line chart
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Dates';
  yAxisLabel: string = 'Medals';
  timeline: boolean = true;
  colorScheme: string = "cool";

  constructor (
    private olympicService: OlympicService
  ) {}

  ngOnInit(): void {
    this.olympicService.getOlympicCountryByCountry(this.country).pipe(
      map((olympicCountry: OlympicCountry) =>
        olympicCountry.participations.forEach((participation) => 
          this.olympicDataSeries.push({name: participation.year.toString(), value: participation.medalsCount})
        )
      ),
      tap(() => this.olympicData.push({name: this.country, series: this.olympicDataSeries})),
      tap(() => this.lineData$ = of([...this.olympicData]))
    ).subscribe();
  }
}
