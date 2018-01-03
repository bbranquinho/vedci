import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';

import {WelcomeTemplate} from "./template/welcome.template";
import { WelcomeRoutes } from "./welcome/welcome.routes";

import {RegisterComponent} from "./welcome/register.component";
import {ForgotPasswordComponent} from "./welcome/forgot-password.component";
import {TranslateLoaderFactory} from "../factory/translate-loader.factory";
import {RegisterConfirmationComponent} from "./welcome/register-confirmation.component";
import {FooterModule} from "./footer.module";
import {HeaderModule} from "./header.module";
import {InstructComponent} from "./welcome/instruct.component";
import {SearchComponent} from "./welcome/search.component";
import {LanguageModule} from "./language.module";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./welcome/home.component";

@NgModule({
    imports: [
        HttpClientModule,
        FooterModule,
        FormsModule,
        LanguageModule,
        HeaderModule,
        RouterModule.forChild(WelcomeRoutes),
        TranslateModule.forChild({
            loader: TranslateLoaderFactory.configuration([
                './translate/welcome/',
                './translate/general/notification/'
            ]),
            isolate: false
        })
    ],
    declarations: [
        WelcomeTemplate,
        HomeComponent,
        ForgotPasswordComponent,
        InstructComponent,
        RegisterConfirmationComponent,
        RegisterComponent,
        SearchComponent,
    ],
})




export class WelcomeModule {


}