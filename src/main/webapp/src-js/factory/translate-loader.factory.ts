import {TranslateLoader} from "@ngx-translate/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

export class TranslateLoaderFactory implements TranslateLoader {
    http : HttpClient;
    prefix: Array<string>;
    suffix: string;
    requestNumber: number;
    countRequest: number;

    constructor(http: HttpClient, prefix: Array<string> = ["i18n"], suffix: string = ".json")
    {
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
        this.requestNumber = prefix.length;
    }

    getObservableForHttp(value, combinedObject, lang: string) {
        return Observable.create(observer => {
            this.http.get(`${value}/${lang}${this.suffix}`)
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


    public getTranslation(lang: string): Observable<any> {
        let combinedObject = new Object();
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