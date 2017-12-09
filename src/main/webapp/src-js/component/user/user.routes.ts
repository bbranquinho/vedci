import { Routes } from "@angular/router";
import {ProfileComponent} from "./profile.component";
import {UserTemplate} from "../template/user.template";
import {MessageComponent} from "./message.component";


export const UserRoutes: Routes = [

    //{ path: 'welcome', component: DashboardComponent, canActivate: [ AuthService ],
    //{ path: 'profile', component: ProfileComponent, outlet: "main-router"}

    { path: '', component: UserTemplate,
        children:[
                { path: '', component: ProfileComponent },
                { path: 'message', component: MessageComponent }
            ]
    }

];