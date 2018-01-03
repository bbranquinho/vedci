import { Routes } from "@angular/router";
import { RegisterComponent } from "./register.component";
import {ForgotPasswordComponent} from "./forgot-password.component";
import {RegisterConfirmationComponent} from "./register-confirmation.component";
import {WelcomeTemplate} from "../template/welcome.template";
import {InstructComponent} from "./instruct.component";
import {HomeComponent} from "./home.component";


export const WelcomeRoutes: Routes = [

    //{ path: 'welcome', component: DashboardComponent, canActivate: [ AuthService ],
    //{ path: '', redirectTo: 'login',  pathMatch: 'full' },

    { path: '', component: WelcomeTemplate,
        children:[
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'register-confirmation', component: RegisterConfirmationComponent },
            { path: 'instruct', component: InstructComponent},
        ]
    }

];