import { NgModule } from "@angular/core";
import { BaseChartDirective } from 'ng2-charts';
import { MedalsPieChartComponent } from "./components/medals-pie-chart/medals-pie-chart.component";

@NgModule({
    declarations: [
        MedalsPieChartComponent
    ],
    imports: [
        BaseChartDirective
    ],
    exports: [
        MedalsPieChartComponent
    ]
})
export class SharedModule {
    constructor() {}
}