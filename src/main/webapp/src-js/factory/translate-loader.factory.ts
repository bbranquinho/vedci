import {TranslateLoader} from "@ngx-translate/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {HttpFactory} from "./http.factory";

/**
 * Classe criada para fabricar LOADERs para traduções.
 * Esta classe pode receber como entrada vários arquivos JSON com traduções, ao final da carga dos arquivos
 * é feito um MERGE nos dados obtidos.
 *
 * @author kamikaze <kamizaze@icefenix.com>
 * @version 1.0.0.1
 * @copyright EULA © 2017, IceFenix.com.
 * @access public
 * @package factory
 */
export class TranslateLoaderFactory implements TranslateLoader {
    http : HttpClient;
    prefix: Array<string>;
    suffix: string;
    requestNumber: number;
    countRequest: number;

    /**
     * Construtor padrão da Classe
     *
     * @param {HttpClient} http
     * @param {Array<string>} prefix
     * @param {string} suffix
     */
    constructor(http: HttpClient, prefix: Array<string> = ["i18n"], suffix: string = ".json")
    {
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
        this.requestNumber = prefix.length;
    }

    /**
     * Faz download e MERGE dos arquivos JSON
     *
     * @param value
     * @param combinedObject
     * @param {string} lang
     * @returns {any}
     */
    private getObservableForHttp(value, combinedObject, lang: string) {
        return Observable.create(observer => {
            HttpFactory.createHiddenHttp().get(`${value}/${lang}${this.suffix}`)
                .map(response => response.json())
                .subscribe((res) => {
                    //let responseObj = res.json();
                    let responseObj = res;
                    Object.keys(responseObj).forEach(key => {
                        combinedObject[key] = responseObj[key];
                    });

                    //Atualiza as traduções só quando estiver os arquivos
                    this.countRequest++;
                    if(this.countRequest == this.requestNumber){
                        observer.next(combinedObject);
                    }

                    //call complete if you want to close this stream (like a promise)
                    observer.complete();
                });
        });
    }

    /**
     * Inicia o download dos arquivos
     *
     * @param {string} lang
     * @returns {Observable<any>}
     */
    public getTranslation(lang: string): Observable<any> {
        let combinedObject = {};
        let oldObsevers;
        let newObserver;
        this.countRequest = 0;
        this.prefix.forEach((value) =>{
            newObserver = this.getObservableForHttp(value, combinedObject, lang);
            if (oldObsevers == null) {
                oldObsevers = newObserver;
            }
            else {
                oldObsevers = oldObsevers.merge(newObserver);
            }
        });
        return oldObsevers;
    }
}