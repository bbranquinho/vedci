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
var register_component_1 = require("./welcome/register.component");
var forgot_password_component_1 = require("./welcome/forgot-password.component");
var translate_loader_factory_1 = require("../factory/translate-loader.factory");
var register_confirmation_component_1 = require("./welcome/register-confirmation.component");
var footer_module_1 = require("./footer.module");
var header_module_1 = require("./header.module");
var instruct_component_1 = require("./welcome/instruct.component");
var search_component_1 = require("./welcome/search.component");
var language_module_1 = require("./language.module");
var forms_1 = require("@angular/forms");
var home_component_1 = require("./welcome/home.component");
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
                header_module_1.HeaderModule,
                router_1.RouterModule.forChild(welcome_routes_1.WelcomeRoutes),
                core_2.TranslateModule.forChild({
                    loader: translate_loader_factory_1.TranslateLoaderFactory.configuration([
                        './translate/welcome/',
                        './translate/general/notification/'
                    ]),
                    isolate: false
                })
            ],
            declarations: [
                welcome_template_1.WelcomeTemplate,
                home_component_1.HomeComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                instruct_component_1.InstructComponent,
                register_confirmation_component_1.RegisterConfirmationComponent,
                register_component_1.RegisterComponent,
                search_component_1.SearchComponent,
            ],
        })
    ], WelcomeModule);
    return WelcomeModule;
}());
exports.WelcomeModule = WelcomeModule;
//# sourceMappingURL=welcome.module.js.map