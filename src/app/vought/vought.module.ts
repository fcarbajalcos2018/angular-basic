import { NgModule } from "@angular/core";
import { SupeComponent } from "./supe/supe.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        SupeComponent,
        ListComponent
    ],
    exports: [
        SupeComponent,
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class VoughtModule {

}