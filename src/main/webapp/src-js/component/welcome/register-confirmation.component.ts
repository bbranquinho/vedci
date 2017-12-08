import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {UserModel} from "../../model/user.model";
import {NotificationService} from "../../service/notification.service";

@Component({
    templateUrl: '../../../html/view/welcome/register-confirmation.html'
})
export class RegisterConfirmationComponent implements OnInit{
    private _router: Router;
    private _activatedRoute: ActivatedRoute;
    private _translate: TranslateService;

    public token: string;

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
        });
    }


    public confirmAccount(): void {
        UserModel.confirmAccount(this.token).subscribe(result =>{
            if(result.status == true){
                NotificationService.success(this._translate.instant("account-confirm-success"));
                this._router.navigateByUrl("/welcome")
            }else{
                NotificationService.danger(this._translate.instant("account-confirm-error"));
            }
        })
    }
}