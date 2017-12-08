import {NgModule} from "@angular/core";

import {RouterModule} from "@angular/router";
import {WelcomeNavbarComponent} from "./general/welcome-navbar.component";

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        WelcomeNavbarComponent
    ],
    exports: [
        WelcomeNavbarComponent
    ]
})

export class WelcomeNavbarModule{

}
