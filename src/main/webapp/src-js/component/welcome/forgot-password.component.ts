import{ Component } from '@angular/core'

@Component({
    templateUrl: '../../../html/view/welcome/forgot-password.html'
})
export class ForgotPasswordComponent{
    public forgotPasswordPage: boolean;

    constructor(){
        this.forgotPasswordPage = true;
    }

    public requestReset(): void{
        this.forgotPasswordPage = false;
    }
}