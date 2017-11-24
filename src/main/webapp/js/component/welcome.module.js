"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var welcome_template_1 = require("./template/welcome.template");
var welcome_routes_1 = require("./welcome/welcome.routes");
var login_component_1 = require("./welcome/login.component");
var register_component_1 = require("./welcome/register.component");
var forgot_password_component_1 = require("./welcome/forgot-password.component");
var translate_loader_factory_1 = require("../factory/translate-loader.factory");
var register_confirmation_component_1 = require("./welcome/register-confirmation.component");
var footer_module_1 = require("./footer.module");
var forms_1 = require("@angular/forms");
var logout_component_1 = require("./welcome/logout.component");
var language_module_1 = require("./language.module");
var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpClientModule,
                footer_module_1.FooterModule,
                forms_1.FormsModule,
                language_module_1.LanguageModule,
                router_1.RouterModule.forChild(welcome_routes_1.WelcomeRoutes),
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: function () { return new translate_loader_factory_1.TranslateLoaderFactory([
                            './translate/welcome/',
                            './translate/general/footer/'
                        ], '.json'); }
                    },
                    isolate: true
                })
            ],
            declarations: [
                welcome_template_1.WelcomeTemplate,
                login_component_1.LoginComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                register_confirmation_component_1.RegisterConfirmationComponent,
                register_component_1.RegisterComponent,
                logout_component_1.LogoutComponent
            ],
        })
    ], WelcomeModule);
    return WelcomeModule;
}());
exports.WelcomeModule = WelcomeModule;
//# sourceMappingURL=welcome.module.js.map