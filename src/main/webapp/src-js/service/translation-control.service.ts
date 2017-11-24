import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class TranslationControlService {
    private static _translateService: TranslateService[];
    private static _files: string[][];
    private static _defaultLag: string = 'pt-br';


    public static register(translate: TranslateService, file: string[]){
        TranslationControlService._translateService.push(translate);
        TranslationControlService._files.push(file);
        translate.setDefaultLang(TranslationControlService._defaultLag);
    }

    public static use(lang: string){
        TranslationControlService._translateService.map(
            translate =>{
                translate.use(lang);
            }
        )
    }

    public static getAllTranslateService(){
        return TranslationControlService._translateService;
    }

    public static getAllTranslateFiles(){
        return TranslationControlService._files;
    }
}