import { Component, OnInit } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { OlympicCountry } from 'src/app/core/models/Olympic';
import { OlympicPieData } from 'src/app/core/models/OlympicPieData';
import { Participation } from 'src/app/core/models/Participation';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-medals-pie-chart',
  templateUrl: './medals-pie-chart.component.html',
  styleUrls: ['./medals-pie-chart.component.scss']
})
export class MedalsPieChartComponent implements OnInit {

  pieData$!: Observable<OlympicPieData[]>;
  examplePieData: OlympicPieData[] = [];
  view: [number, number] = [700, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  colorScheme: string = "cool";

  constructor(private olympicService: OlympicService) { }

  ngOnInit(): void {
    this.olympicService.getOlympics().pipe(
      map((olympicCountrys: OlympicCountry[]) =>
        olympicCountrys.forEach((olympicCountry) => 
          this.examplePieData.push({name: olympicCountry.country, value: this.sumMedals(olympicCountry.participations)})
        )
      ),
      tap(() => this.pieData$ = of([...this.examplePieData])),
    ).subscribe();
  }

  sumMedals(participations: Participation[]): number {
    let totalMedals = 0;

    participations.forEach(
      (participation: Participation) => totalMedals += participation.medalsCount
    );

    return totalMedals;
  }
}
