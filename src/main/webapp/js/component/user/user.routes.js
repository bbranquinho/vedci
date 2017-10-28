"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_component_1 = require("./profile.component");
var user_template_1 = require("../template/user.template");
var message_component_1 = require("./message.component");
exports.UserRoutes = [
    //{ path: 'welcome', component: DashboardComponent, canActivate: [ AuthService ],
    //{ path: 'profile', component: ProfileComponent, outlet: "main-router"}
    { path: '', component: user_template_1.UserTemplate,
        children: [
            { path: '', component: profile_component_1.ProfileComponent },
            { path: 'message', component: message_component_1.MessageComponent }
        ]
    }
];
//# sourceMappingURL=user.routes.js.map