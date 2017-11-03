import {Component, OnInit} from '@angular/core'
import {UserModel} from "../../model/user.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NotificationService} from "../../service/notification.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
    templateUrl: '../../../html/view/welcome/forgot-password.html'
})
export class ForgotPasswordComponent implements OnInit{
    private _router: Router;
    private _activatedRoute: ActivatedRoute;
    private _user: UserModel;
    private _translate: TranslateService;

    public email: string;
    public token: string;
    public password: string;
    public passwordConfirm: string;
    public forgotPasswordPage: boolean = true;

    /**
     * Construtor padrão
     *
     * @param {Router} router
     * @param {ActivatedRoute} activatedRoute
     */
    constructor(router: Router, activatedRoute: ActivatedRoute, translate: TranslateService){
        this._router = router;
        this._activatedRoute = activatedRoute;
        this._user = new UserModel();
        this._translate = translate;
    }

    /**
     * Inicia o carregamento da classe
     */
    public ngOnInit(): void {
        //Obtem o token caso esteja na url
        this._activatedRoute.params.subscribe((params: Params) => {
            this.token = params['token'] || '';

            //Muda para tela de troca de senha caso tenha um Token
            if(this.token != ''){
                this.forgotPasswordPage = false;
            }
        });
    }

    /**
     * Solicita o token
     */
    public requestToken(): void{
        //Atualiza o e-mail
        this._user.email = this.email;

        //Solicita o token
        this._user.requestTokenPassword().subscribe(response => {
            this.forgotPasswordPage = false;
        })
    }

    public changePassword(): void{

        this._user.changePassword('').subscribe(result =>{

        });

    }
}