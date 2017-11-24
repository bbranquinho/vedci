"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var main_routes_1 = require("./main.routes");
var main_template_1 = require("./template/main.template");
var auth_guard_service_1 = require("../service/auth-guard.service");
var http_interceptor_service_1 = require("../service/http-interceptor.service");
var http_factory_1 = require("../factory/http.factory");
var core_2 = require("@ngx-translate/core");
var translate_loader_factory_1 = require("../factory/translate-loader.factory");
var language_module_1 = require("./language.module");
var MainModule = /** @class */ (function () {
    function MainModule(http) {
        this.http = http;
        //Inicia o HttpFactory
        new http_factory_1.HttpFactory(http);
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                language_module_1.LanguageModule,
                router_1.RouterModule.forRoot(main_routes_1.MainRoutes, { useHash: false }),
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: function () { return new translate_loader_factory_1.TranslateLoaderFactory([
                            './translate/general/notification/'
                        ], '.json'); }
                    },
                    isolate: true
                })
            ],
            declarations: [
                main_template_1.MainTemplate
            ],
            providers: [
                auth_guard_service_1.AuthGuardService,
                { provide: http_1.HTTP_INTERCEPTORS, useClass: http_interceptor_service_1.HttpInterceptorService, multi: true }
            ],
            bootstrap: [
                main_template_1.MainTemplate
            ]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map