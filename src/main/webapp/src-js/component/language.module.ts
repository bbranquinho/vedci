import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
    imports:[
        TranslateModule.forRoot()
    ],

    exports: [
        CommonModule,
        TranslateModule
    ],

})
export class LanguageModule {
    constructor(translate: TranslateService){
        translate.setDefaultLang('pt-br');
        translate.use('pt-br');
    }
}