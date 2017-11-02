import { Routes } from "@angular/router";


export const MainRoutes: Routes = [
    { path: '', redirectTo: 'welcome',  pathMatch: 'full' },
    { path: 'welcome', loadChildren: 'js/component/welcome.module#WelcomeModule'},
    { path: 'user', loadChildren: 'js/component/user.module#UserModule' }
];