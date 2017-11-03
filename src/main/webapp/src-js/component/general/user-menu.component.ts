import {Component, Input} from '@angular/core'

@Component({
    selector: 'user-menu',
    templateUrl: '../../../html/view/general/user-menu.html'
})

export class UserMenuComponent{
    //Usuário logado
    @Input() userLogged;

}