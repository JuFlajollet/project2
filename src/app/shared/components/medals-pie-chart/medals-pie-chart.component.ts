import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-medals-pie-chart',
  templateUrl: './medals-pie-chart.component.html',
  styleUrls: ['./medals-pie-chart.component.scss']
})
export class MedalsPieChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) 
  chart: BaseChartDirective | undefined;

  // Pie
  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'], //TODO: use dynamic labels + data
    datasets: [
      {
        data: [300, 500, 100],
      },
    ],
  };
  public pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        yAlign: 'bottom',
        usePointStyle: true,
        callbacks: {
            labelPointStyle: function(context) {
                const pointNewStyle = new Image();
                pointNewStyle.className = 'medal-point-style';
                pointNewStyle.src = '../assets/img/medal-solid.svg';
                return {
                    pointStyle: 'triangle', //TODO: change to medal using pointNewStyle
                    rotation: 0
                };
            }
        }
      }
    }
  };
  

  constructor() { }

  ngOnInit(): void {
  }
}
