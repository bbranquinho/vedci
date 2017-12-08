import{ Component } from '@angular/core'
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {UserModel} from "../../model/user.model";
import {DatePipe} from "@angular/common";
import {NotificationService} from "../../service/notification.service";
import {stat} from "fs";

@Component({
    templateUrl: '../../../html/view/welcome/register.html'
})
export class RegisterComponent{
    private _router: Router;
    private _translate: TranslateService;


    public firstName: string;
    public lastName: string;
    public gender: number = 1;
    public email: string;
    public emailConfirm: string;
    public password: string;
    public passwordConfirm: string;
    public birthday: Date;


    /**
     * Construtor padrão
     *
     * @param {Router} router
     * @param {TranslateService} translate
     */
    constructor(router: Router, private  translate: TranslateService){
        this._router = router;
        this._translate = translate;
    }

    public register(): void{
        let datePipe = new DatePipe("pt-br");
        let birthday = datePipe.transform(this.birthday, "yyyy-MM-dd");

        if(this.password != this.passwordConfirm){
            NotificationService.danger(this._translate.instant("password-do-not-match"));
            return;
        }

        if(this.email != this.emailConfirm){
            NotificationService.danger(this._translate.instant("email-do-not-match"));
            return;
        }

        UserModel.register(this.firstName, this.lastName, this.email, birthday, this.gender, this.password).subscribe(result =>{
            if(result.status == 'success'){
                NotificationService.success(this._translate.instant("register-success"));

                if(result.validateUserToken !== ''){
                    this._router.navigate(['welcome/register-confirmation', {token: result.validateUserToken}])
                }else{
                    this._router.navigateByUrl('welcome/register-confirmation');
                }

            }else if(result.status == 'email_duplicate'){
                NotificationService.danger(this._translate.instant("register-error-duplicate"));
            }else if(result.status == 'error-form'){
                NotificationService.danger(this._translate.instant("register-error-form"));
            }
        })
    }
}