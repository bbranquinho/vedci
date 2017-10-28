import {Component, ViewEncapsulation} from '@angular/core'

@Component({
    selector: 'template-app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../../html/template/welcome.html',
    styleUrls: [
        '../../../css/template/general.min.css',
        '../../../css/template/welcome.min.css'
    ]
})
export class WelcomeTemplate{
}