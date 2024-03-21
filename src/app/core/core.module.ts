import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header/header.component";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule {
    constructor() {}
}