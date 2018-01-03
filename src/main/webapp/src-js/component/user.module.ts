import { NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateLoaderFactory} from "../factory/translate-loader.factory";
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

import {UserRoutes} from "./user/user.routes";

import {ProfileComponent} from "./user/profile.component";
import {UserTemplate} from "./template/user.template";
import {FooterModule} from "./footer.module";
import {MessageComponent} from "./user/message.component";
import {MessagePipe} from "../pipe/message.pipe";
import {SafeHtmlPipe} from "../pipe/safe-html.pipe";
import {UserMenuComponent} from "./general/user-menu.component";
import {FormsModule} from "@angular/forms";
import {LanguageModule} from "./language.module";


@NgModule({
    imports: [
        FroalaEditorModule,
        FroalaViewModule,
        FooterModule,
        FormsModule,
        LanguageModule,
        RouterModule.forChild(UserRoutes),
        TranslateModule.forChild({
            loader: TranslateLoaderFactory.configuration([
                './translate/user/'
            ]),
            isolate: true
        })

    ],
    declarations: [
        UserTemplate,
        ProfileComponent,
        MessageComponent,
        MessagePipe,
        UserMenuComponent,
        SafeHtmlPipe
    ]
})


export class UserModule {
}