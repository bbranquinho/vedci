import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import {FooterComponent} from "./general/footer.component";
import {TranslateModule} from "@ngx-translate/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        TranslateModule,
        RouterModule
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