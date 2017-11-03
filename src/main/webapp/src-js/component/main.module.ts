import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

import {MainRoutes} from "./main.routes";
import {MainTemplate} from "./template/main.template";
import {AuthGuardService} from "../service/auth-guard.service";
import {HttpInterceptorService} from "../service/http-interceptor.service";
import {HttpFactory} from "../factory/http.factory";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(MainRoutes, {useHash: false})
    ],
    declarations: [
        MainTemplate
    ],
    providers: [
        AuthGuardService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
    ],
    bootstrap: [
        MainTemplate
    ]
})


export class MainModule {
    constructor(private http: HttpClient){
        //Inicia o HttpFactory
        new HttpFactory(http);
    }
}