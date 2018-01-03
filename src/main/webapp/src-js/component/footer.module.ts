import {NgModule} from '@angular/core';

import {FooterComponent} from "./general/footer.component";
import {RouterModule} from "@angular/router";
import {LanguageModule} from "./language.module";
import {TranslateModule} from "@ngx-translate/core";
import {TranslateLoaderFactory} from "../factory/translate-loader.factory";

@NgModule({
    imports: [
        RouterModule,
        LanguageModule,
        TranslateModule.forChild({
            loader: TranslateLoaderFactory.configuration([
                './translate/general/footer/'
            ]),
            isolate: true
        })
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