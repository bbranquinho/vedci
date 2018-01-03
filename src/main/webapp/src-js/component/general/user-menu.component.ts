import {Component} from '@angular/core'

@Component({
    selector: 'user-menu',
    templateUrl: 'html/view/general/user-menu.html'
})

export class UserMenuComponent{

    getImgeProfile(): string {
        return "img/tmp/user-250/1.jpg";
    }
}