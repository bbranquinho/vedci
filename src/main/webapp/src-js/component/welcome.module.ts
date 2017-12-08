import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {WelcomeTemplate} from "./template/welcome.template";
import { WelcomeRoutes } from "./welcome/welcome.routes";


import{ LoginComponent } from "./welcome/login.component";
import {RegisterComponent} from "./welcome/register.component";
import {ForgotPasswordComponent} from "./welcome/forgot-password.component";
import {TranslateLoaderFactory} from "../factory/translate-loader.factory";
import {RegisterConfirmationComponent} from "./welcome/register-confirmation.component";
import {CommonModule} from "@angular/common";
import {FooterModule} from "./footer.module";
import {WelcomeNavbarModule} from "./welcome-navbar.module";
import {InstructComponent} from "./welcome/instruct.component";
import {SearchComponent} from "./welcome/search.component";


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FooterModule,
        WelcomeNavbarModule,
        RouterModule.forChild(WelcomeRoutes),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (http: HttpClient) => new TranslateLoaderFactory(http,
                    [
                        './translate/welcome/',
                        './translate/general/footer/'
                    ], '.json'),
                deps: [HttpClient]
            },
            isolate: true
        })
    ],
    declarations: [
        WelcomeTemplate,
        LoginComponent,
        ForgotPasswordComponent,
        InstructComponent,
        RegisterConfirmationComponent,
        RegisterComponent,
        SearchComponent,
    ],
})




export class WelcomeModule {
    constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('pt-br');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('pt-br');
    }
}