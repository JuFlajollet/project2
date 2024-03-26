import { Component, HostListener, OnInit } from '@angular/core';
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
  view: [number, number] = [800, 400];
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  colorScheme: string = "cool";

  constructor(
    private router: Router,
    private olympicService: OlympicService
  ) { }

  ngOnInit(): void {
    this.updateChartSize();
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
    const countryName = data.name.replace(" ","%20");
    this.router.navigateByUrl(`${countryName}`);
  }

  @HostListener("window:resize", []) updateChartSize() {
    if (window.innerWidth  >= 768) {
      this.view = [800, 400];
    } else {
      this.view = [400, 400];
    }
  }
}
