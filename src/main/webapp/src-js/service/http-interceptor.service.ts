import { Observable } from 'rxjs/Rx';
import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import 'rxjs/add/operator/do';
import {AuthGuardService} from "./auth-guard.service";
import {NotificationService} from "./notification.service";
import {TranslateService} from "@ngx-translate/core";

/**
 * Classe criada para inteceptar as conexões http.
 * Esta classe é responsável por compor corretamente as requisições http para a API, também faz um filtro nos erros
 * Retornados pelo servidor.
 *
 * @author kamikaze <kamizaze@icefenix.com>
 * @version 1.0.0.1
 * @copyright EULA © 2017, IceFenix.com.
 * @access public
 * @package services
 */
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    private _authService : AuthGuardService;
    private _baseUrl: string = 'http://127.0.0.1:8080/api/';
    private _aborted: boolean;
    private _translate: TranslateService;

    /**
     * Construtor padrão da Classe
     *
     * @param {AuthGuardService} authService
     * @param {TranslateService} translate
     */
    constructor(authService: AuthGuardService, translate: TranslateService){
        this._authService = authService;
        this._translate = translate;
    }

    /**
     * Intecepta as requisições http
     * @param {HttpRequest<any>} req
     * @param {HttpHandler} next
     * @returns {Observable<HttpEvent<any>>}
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log(req);

        //Monta o header
        req = this.getHeaders(req);

        return next.handle(req).map(response => {
            if (response instanceof HttpResponse) {

                let abort = false;
                //Verifica se existe alguma mensagem do servidor, caso exista exibe
                if(response.body.intercept){
                    abort = this.showMessage(response.body.intercept);
                }

                //Verifca se existe copor de mensagem e faz a tratativa
                if(response.body.body){
                    if(!abort){
                        response = response.clone({
                            body: response.body.body
                        });
                    }else{
                        response = response.clone({
                            body: {}
                        });
                        return null;
                    }
                }
            }

            return response;
        });
    }

    /**
     * Monta o cabeçalho de requisição
     *
     * @param {HttpRequest<any>} req
     * @returns {HttpRequest<any>}
     */
    private getHeaders(req: HttpRequest<any>): HttpRequest<any> {

        req = req.clone({
            url: this.getUrl(req.url, req.method),
            //method: "get", //Alterar usado somente para teste
            setHeaders: {
                "auth-token": AuthGuardService.token || ''
            }
        });

        return req;
    }

    /**
     * Obtem a url com sua Base
     *
     * @param {string} url
     * @param {string} method
     * @returns {string}
     */
    private getUrl(url:string, method: string): string{
        //Coloca a base na url
        if(url.startsWith('/')){
            url = `${this._baseUrl}/${url}`;
        }else{
            url = `${this._baseUrl}${url}`;
        }

        // Substui ? da url por /
        url = url.replace('?','/');


        //Trata as passagens de parametos -- Alterar usado somente para teste
        /*
        if(url.indexOf('?')>= 0){
            url = url.replace('?',`.${method}.json?`);
        }else{
            url = `${url}.${method}.json`;
        }
        */
        return url;
    }


    /**
     * Mostra as mensagens interceptadas
     *
     * @param message
     */
    private showMessage(message:any): boolean{
        if(message.message){
            if(message.status = 'success'){
               NotificationService.success(this._translate.instant(`notification.success.${message.message}`));
            }
        }

        this._aborted = !!message.abort;

        return this._aborted;
    }

}