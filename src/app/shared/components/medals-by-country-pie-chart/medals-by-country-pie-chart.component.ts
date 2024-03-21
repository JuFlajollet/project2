import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, of, tap } from 'rxjs';
import { ChartPieData } from 'src/app/core/models/ChartPieData';
import { OlympicCountry } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-medals-by-country-pie-chart',
  templateUrl: './medals-by-country-pie-chart.component.html',
  styleUrls: ['./medals-by-country-pie-chart.component.scss']
})
export class MedalsByCountryPieChartComponent implements OnInit {

  olympicData: ChartPieData[] = [];

  pieData$!: Observable<ChartPieData[]>;

  // options for pie chart
  view: [number, number] = [700, 400];
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  colorScheme: string = "cool";

  constructor(
    private router: Router,
    private olympicService: OlympicService
  ) { }

  ngOnInit(): void {
    this.olympicService.getOlympics().pipe(
      map((olympicCountrys: OlympicCountry[]) =>
        olympicCountrys.forEach((olympicCountry) => 
          this.olympicData.push({name: olympicCountry.country, value: this.olympicService.sumMedals(olympicCountry.participations)})
        )
      ),
      tap(() => this.pieData$ = of([...this.olympicData])),
    ).subscribe();
  }

  onSelect(data: ChartPieData): void {
    this.router.navigateByUrl(`${data.name}`);
  }
}
