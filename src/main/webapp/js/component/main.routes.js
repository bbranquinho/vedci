"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRoutes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', loadChildren: 'js/component/welcome.module#WelcomeModule' },
    { path: 'user', loadChildren: 'js/component/user.module#UserModule' }
];
//# sourceMappingURL=main.routes.js.map