import {Component, ViewEncapsulation} from '@angular/core'
import {UserModel} from "../../model/user.model";

@Component({
    selector: 'template-app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../../html/template/user.html',
    styleUrls: [
        '../../../css/template/general.min.css',
        '../../../css/template/welcome.min.css',
        '../../../css/template/user.min.css'
    ]
})
export class UserTemplate {
    public user: UserModel;

    constructor(){
        //Ontem o usuário lagado
        UserModel.getUser(1).subscribe(
            json => {
                this.user = <UserModel>UserModel.fromJson(json);
            }
        );
    }
}