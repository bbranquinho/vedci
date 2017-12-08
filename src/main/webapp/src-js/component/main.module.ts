import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';

import {MainRoutes} from "./main.routes";
import {MainTemplate} from "./template/main.template";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(MainRoutes, {useHash: false})
    ],
    declarations: [
        MainTemplate
    ],
    bootstrap: [ MainTemplate ]
})


export class MainModule {
}