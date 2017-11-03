import { NgModule  } from '@angular/core';
import {CommonModule} from "@angular/common";
import { RouterModule } from "@angular/router";
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import {HttpInterceptorService} from "../service/http-interceptor.service";
import {FormsModule} from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FroalaEditorModule,
        FroalaViewModule,
        FooterModule,
        FormsModule,
        RouterModule.forChild(UserRoutes),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (http: HttpClient) => new TranslateLoaderFactory(http,
                    [
                        './translate/user/',
                        './translate/general/footer/',
                        './translate/general/notification/'
                    ], '.json'),
                deps: [HttpClient]
            },
            isolate: true
        })
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
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
    constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('pt-br');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('pt-br');
    }
}