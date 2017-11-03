import {Injectable, ReflectiveInjector} from '@angular/core';
import {
    Http, BrowserXhr, RequestOptions, BaseRequestOptions, ResponseOptions, BaseResponseOptions, ConnectionBackend,
    XHRBackend, XSRFStrategy, CookieXSRFStrategy
} from '@angular/http';
import {HttpClient} from "@angular/common/http";


/**
 * Classe criada para fabricar conexões HTTP.
 * Esta classe pode criar conexões que pode ser interceptadas como conexões que não podem.
 *
 * @author kamikaze <kamizaze@icefenix.com>
 * @version 1.0.0.1
 * @copyright EULA © 2017, IceFenix.com.
 * @access public
 * @package factory
 */
@Injectable()
export class HttpFactory {
    private static _injectorHiddenHttp: Http;
    private static _injectorHttp: HttpClient;

    /**
     * Construtor padrão da Classe
     *
     * @param {HttpClient} http
     */
    constructor(http:HttpClient){
        //inicia o injetor que pode ser interceptado
        HttpFactory._injectorHttp = http;

        //Inicia o injetor que não pode ser interceptado
        HttpFactory._injectorHiddenHttp = ReflectiveInjector.resolveAndCreate([
            Http,
            BrowserXhr,
            { provide: RequestOptions, useClass: BaseRequestOptions },
            { provide: ResponseOptions, useClass: BaseResponseOptions },
            { provide: ConnectionBackend, useClass: XHRBackend },
            { provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy() }
        ]).get(Http);
    }

    /**
     * Cria uma conexão Http que pode ser interceptada
     *
     * @returns {HttpClient}
     */
    public static createHttp(): HttpClient {
        return HttpFactory._injectorHttp;
    }

    /**
     * Cria uma conexão Http que NÃO pode ser interceptada
     *
     * @returns {Http}
     */
    public static createHiddenHttp(): Http {
        return HttpFactory._injectorHiddenHttp;
    }
}