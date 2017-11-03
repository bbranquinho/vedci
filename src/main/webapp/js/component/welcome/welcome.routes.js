"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
var forgot_password_component_1 = require("./forgot-password.component");
var register_confirmation_component_1 = require("./register-confirmation.component");
var welcome_template_1 = require("../template/welcome.template");
var logout_component_1 = require("./logout.component");
exports.WelcomeRoutes = [
    //{ path: 'welcome', component: DashboardComponent, canActivate: [ AuthService ],
    //{ path: '', redirectTo: 'login',  pathMatch: 'full' },
    { path: '', component: welcome_template_1.WelcomeTemplate,
        children: [
            { path: '', component: login_component_1.LoginComponent },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'login/:url', component: login_component_1.LoginComponent },
            { path: 'register', component: register_component_1.RegisterComponent },
            { path: 'forgot-password', component: forgot_password_component_1.ForgotPasswordComponent },
            { path: 'forgot-password/:token', component: forgot_password_component_1.ForgotPasswordComponent },
            { path: 'register-confirmation', component: register_confirmation_component_1.RegisterConfirmationComponent },
            { path: 'logout', component: logout_component_1.LogoutComponent }
        ]
    }
];
//# sourceMappingURL=welcome.routes.js.map