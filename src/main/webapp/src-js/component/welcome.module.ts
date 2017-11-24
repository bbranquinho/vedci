import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';

import {WelcomeTemplate} from "./template/welcome.template";
import { WelcomeRoutes } from "./welcome/welcome.routes";

import{ LoginComponent } from "./welcome/login.component";
import {RegisterComponent} from "./welcome/register.component";
import {ForgotPasswordComponent} from "./welcome/forgot-password.component";
import {TranslateLoaderFactory} from "../factory/translate-loader.factory";
import {RegisterConfirmationComponent} from "./welcome/register-confirmation.component";
import {FooterModule} from "./footer.module";
import {FormsModule} from "@angular/forms";
import {LogoutComponent} from "./welcome/logout.component";
import {LanguageModule} from "./language.module";

@NgModule({
    imports: [
        HttpClientModule,
        FooterModule,
        FormsModule,
        LanguageModule,
        RouterModule.forChild(WelcomeRoutes),
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory:() => new TranslateLoaderFactory(
                    [
                        './translate/welcome/',
                        './translate/general/footer/'
                    ], '.json')
            },
            isolate: true
        })
    ],

    declarations: [
        WelcomeTemplate,
        LoginComponent,
        ForgotPasswordComponent,
        RegisterConfirmationComponent,
        RegisterComponent,
        LogoutComponent
    ],
})


export class WelcomeModule {

}