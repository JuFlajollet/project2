import { NgModule } from "@angular/core";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MedalsPieChartComponent } from "./components/medals-pie-chart/medals-pie-chart.component";

@NgModule({
    declarations: [
        MedalsPieChartComponent
    ],
    imports: [
        NgxChartsModule
    ],
    exports: [
        MedalsPieChartComponent
    ]
})
export class SharedModule {
    constructor() {}
}