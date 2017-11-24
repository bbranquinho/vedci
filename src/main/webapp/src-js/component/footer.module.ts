import {NgModule} from '@angular/core';

import {FooterComponent} from "./general/footer.component";
import {RouterModule} from "@angular/router";
import {LanguageModule} from "./language.module";

@NgModule({
    imports: [
        RouterModule,
        LanguageModule
    ],
    declarations: [
        FooterComponent
    ],
    exports: [
        FooterComponent
    ]
})


export class FooterModule {
}