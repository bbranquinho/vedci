import {Component, OnInit} from '@angular/core'
import {UserModel} from "../../model/user.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NotificationService} from "../../service/notification.service";
import {TranslateService} from "@ngx-translate/core";
import {AuthGuardService} from "../../service/auth-guard.service";

@Component({
    templateUrl: 'html/view/welcome/forgot-password.html'
})
export class ForgotPasswordComponent implements OnInit{
    private _router: Router;
    private _activatedRoute: ActivatedRoute;
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
     * @param {TranslateService} translate
     */
    constructor(router: Router, activatedRoute: ActivatedRoute, translate: TranslateService){
        this._router = router;
        this._activatedRoute = activatedRoute;
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
        //Solicita o token
        UserModel.requestTokenPassword(this.email).subscribe(result => {
            if(result.status){
                NotificationService.success(this._translate.instant("password-reset-success"));
                this.forgotPasswordPage = false;
                this.token = result.userResetToken;
            }else{
                NotificationService.danger(this._translate.instant("password-reset-error"));
            }
        })
    }

    /**
     * Altera a senha
     */
    public changePassword(): void{
        if(this.password != this.passwordConfirm){
            NotificationService.danger(this._translate.instant("password-do-not-match"));
            return;
        }

        //Atualiza a senha
        UserModel.resetPassword(this.password, this.token).subscribe(result =>{
            if(result.status){
                NotificationService.success(this._translate.instant("password-reset-success"));
                this._router.navigateByUrl('/welcome/login');
            }else{
                NotificationService.danger(this._translate.instant("password-reset-error"));
            }
        });
    }
}