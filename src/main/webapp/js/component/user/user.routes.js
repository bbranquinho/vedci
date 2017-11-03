"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_component_1 = require("./profile.component");
var user_template_1 = require("../template/user.template");
var message_component_1 = require("./message.component");
var auth_guard_service_1 = require("../../service/auth-guard.service");
exports.UserRoutes = [
    //{ path: 'welcome', component: DashboardComponent, canActivate: [ AuthService ],
    //{ path: 'profile', component: ProfileComponent, outlet: "main-router"}
    { path: '', component: user_template_1.UserTemplate,
        children: [
            { path: '', component: profile_component_1.ProfileComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
            { path: 'message', component: message_component_1.MessageComponent, canActivate: [auth_guard_service_1.AuthGuardService] }
        ]
    }
];
//# sourceMappingURL=user.routes.js.map