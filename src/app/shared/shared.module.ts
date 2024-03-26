import { NgModule } from "@angular/core";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MedalsByCountryPieChartComponent } from "./components/medals-by-country-pie-chart/medals-by-country-pie-chart.component";
import { MedalsByDatesLineChartComponent } from "./components/medals-by-dates-line-chart/medals-by-dates-line-chart.component";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";

@NgModule({
    declarations: [
        MedalsByCountryPieChartComponent,
        MedalsByDatesLineChartComponent,
        LoadingSpinnerComponent
    ],
    imports: [
        NgxChartsModule
    ],
    exports: [
        MedalsByCountryPieChartComponent,
        MedalsByDatesLineChartComponent,
        LoadingSpinnerComponent
    ]
})
export class SharedModule {
    constructor() {}
}