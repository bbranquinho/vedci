import {NgModule} from "@angular/core";

import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {TranslateLoaderFactory} from "../factory/translate-loader.factory";
import {LanguageModule} from "./language.module";
import {FormsModule} from "@angular/forms";
import {WelcomeHeaderComponent} from "./general/welcome-header.component";


@NgModule({
    imports: [
        RouterModule,
        LanguageModule,
        FormsModule,
        TranslateModule.forChild({
            loader: TranslateLoaderFactory.configuration([
                './translate/general/header/'
            ]),
            isolate: true
        })
    ],
    declarations: [
        WelcomeHeaderComponent
    ],
    exports: [
        WelcomeHeaderComponent
    ]
})

export class HeaderModule{

}
