import {TranslateLoader} from "@ngx-translate/core";
import {Observable} from "rxjs/Observable";
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
export class TranslateLoaderFactory implements TranslateLoader{
    private _prefix: Array<string>;
    private _suffix: string;
    private _requestNumber: number;
    private _countRequest: number;

    /**
     * Construtor padrão da Classe
     *
     * @param {Array<string>} prefix
     * @param {string} suffix
     */
    constructor( prefix: Array<string> = ["i18n"], suffix: string = ".json")
    {
        this._prefix = prefix;
        this._suffix = suffix;
        this._requestNumber = prefix.length;
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
            if(value.endsWith('/')){
                value = value.substr(0,value.length - 1);
            }
            HttpFactory.createHiddenHttp().get(`${value}/${lang}${this._suffix}`)
                .map(response => response.json())
                .subscribe((res) => {
                    //let responseObj = res.json();
                    let responseObj = res;
                    Object.keys(responseObj).forEach(key => {
                        combinedObject[key] = responseObj[key];
                    });

                    //Atualiza as traduções só quando estiver os arquivos
                    this._countRequest++;
                    if(this._countRequest == this._requestNumber){
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
        let oldObsevers = null;
        let newObserver;
        this._countRequest = 0;
        this._prefix.forEach((value) =>{
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