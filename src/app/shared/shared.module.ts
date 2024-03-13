import { NgModule } from "@angular/core";
import { NgChartsModule } from "ng2-charts";
import { MedalsPieChartComponent } from "./components/medals-pie-chart/medals-pie-chart.component";

@NgModule({
    declarations: [
        MedalsPieChartComponent
    ],
    imports: [
        NgChartsModule
    ],
    exports: [
        MedalsPieChartComponent
    ]
})
export class SharedModule {
    constructor() {}
}