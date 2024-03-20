import { NgModule } from "@angular/core";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MedalsByCountryPieChartComponent } from "./components/medals-by-country-pie-chart/medals-by-country-pie-chart.component";
import { MedalsByDatesLineChartComponent } from "./components/medals-by-dates-line-chart/medals-by-dates-line-chart.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        MedalsByCountryPieChartComponent,
        MedalsByDatesLineChartComponent
    ],
    imports: [
        NgxChartsModule
    ],
    exports: [
        MedalsByCountryPieChartComponent,
        MedalsByDatesLineChartComponent
    ]
})
export class SharedModule {
    constructor() {}
}