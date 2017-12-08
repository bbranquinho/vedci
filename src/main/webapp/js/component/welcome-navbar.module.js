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
var language_module_1 = require("./language.module");
var welcome_navbar_component_1 = require("./general/welcome-navbar.component");
var WelcomeNavbarModule = /** @class */ (function () {
    function WelcomeNavbarModule() {
    }
    WelcomeNavbarModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                language_module_1.LanguageModule
            ],
            declarations: [
                welcome_navbar_component_1.WelcomeNavbarComponent
            ],
            exports: [
                welcome_navbar_component_1.WelcomeNavbarComponent
            ]
        })
    ], WelcomeNavbarModule);
    return WelcomeNavbarModule;
}());
exports.WelcomeNavbarModule = WelcomeNavbarModule;
//# sourceMappingURL=welcome-navbar.module.js.map