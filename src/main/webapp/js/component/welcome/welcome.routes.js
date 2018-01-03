"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var register_component_1 = require("./register.component");
var forgot_password_component_1 = require("./forgot-password.component");
var register_confirmation_component_1 = require("./register-confirmation.component");
var welcome_template_1 = require("../template/welcome.template");
var instruct_component_1 = require("./instruct.component");
var home_component_1 = require("./home.component");
exports.WelcomeRoutes = [
    //{ path: 'welcome', component: DashboardComponent, canActivate: [ AuthService ],
    //{ path: '', redirectTo: 'login',  pathMatch: 'full' },
    { path: '', component: welcome_template_1.WelcomeTemplate,
        children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'home', component: home_component_1.HomeComponent },
            { path: 'register', component: register_component_1.RegisterComponent },
            { path: 'forgot-password', component: forgot_password_component_1.ForgotPasswordComponent },
            { path: 'register-confirmation', component: register_confirmation_component_1.RegisterConfirmationComponent },
            { path: 'instruct', component: instruct_component_1.InstructComponent },
        ]
    }
];
//# sourceMappingURL=welcome.routes.js.map