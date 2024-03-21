import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { DetailComponent } from "./components/detail/detail.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";

@NgModule({
    declarations: [
        HomeComponent,
        DetailComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule
    ],
    exports: [
        HomeComponent,
        DetailComponent,
        NotFoundComponent
    ]
})
export class PagesModule {
    constructor() {}
}