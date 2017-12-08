import {Component, OnInit} from '@angular/core'
import {UserModel} from "../../model/user.model";
import {AuthGuardService} from "../../service/auth-guard.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {WelcomeHighlightModel} from "../../model/welcome-highlight.model";
import {TranslateService} from "@ngx-translate/core";
import {NotificationService} from "../../service/notification.service";
@Component({
    templateUrl: '../../../html/view/welcome/login.html'
})
export class LoginComponent implements OnInit{
    private _router: Router;
    private _activatedRoute: ActivatedRoute;
    private _returnUrl: string;
    private _translate: TranslateService;

    public email: string;
    public password: string;
    public highlights: WelcomeHighlightModel[];

    /**
     * Construtor padrão
     *
     * @param {Router} router
     * @param {ActivatedRoute} activatedRoute
     * @param {TranslateService} translate
     */
    constructor(router: Router, private activatedRoute: ActivatedRoute, translate: TranslateService){
        this._router = router;
        this._activatedRoute = activatedRoute;
        this._translate = translate;
    }

    /**
     * Chamado no início da função
     */
    public ngOnInit(): void{
        this._activatedRoute.params.subscribe((params: Params) => {
            this._returnUrl = params['url'] || '/user';
        });


        //Carrega a lista de destaque
        WelcomeHighlightModel.getHighlights().subscribe(highlights =>{
            this.highlights = highlights;
        });
    }

    /**
     * Faz o login do usuário
     */
    public login(): void{
        UserModel.login(this.email, this.password).subscribe(result => {
            if(result.status == "success"){
                AuthGuardService.addToLocalStorage(
                    UserModel.fromJson(result.user),
                    result.token
                );
                this._router.navigateByUrl(this._returnUrl);
            }else{
                NotificationService.danger(this._translate.instant("login-failed"));
            }
        });
    }
}