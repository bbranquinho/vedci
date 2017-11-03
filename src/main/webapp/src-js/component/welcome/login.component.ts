import {Component, OnInit} from '@angular/core'
import {UserModel} from "../../model/user.model";
import {AuthGuardService} from "../../service/auth-guard.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {WelcomeHighlightModel} from "../../model/welcome-highlight.model";
@Component({
    templateUrl: '../../../html/view/welcome/login.html'
})
export class LoginComponent implements OnInit{
    private _router: Router;
    private _activatedRoute: ActivatedRoute;
    private _returnUrl: string;

    public email: string;
    public password: string;
    public highlights: WelcomeHighlightModel[];

    /**
     * Construtor padrão
     * @param {Router} router
     * @param {ActivatedRoute} activatedRoute
     */
    constructor(router: Router, private activatedRoute: ActivatedRoute){
        this._router = router;
        this._activatedRoute = activatedRoute;
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
            this.highlights = <WelcomeHighlightModel[]> WelcomeHighlightModel.fromJson(highlights);
        });
    }

    /**
     * Faz o login do usuário
     */
    public login(): void{
        let user = UserModel.login(this.email, this.password).subscribe(result => {
            AuthGuardService.addToLocalStorage(
                UserModel.fromJson(result.user),
                result.token
            );
            this._router.navigateByUrl(this._returnUrl);
        });
    }
}