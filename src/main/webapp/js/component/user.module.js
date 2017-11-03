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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var translate_loader_factory_1 = require("../factory/translate-loader.factory");
var angular2_froala_wysiwyg_1 = require("angular2-froala-wysiwyg");
var user_routes_1 = require("./user/user.routes");
var profile_component_1 = require("./user/profile.component");
var user_template_1 = require("./template/user.template");
var footer_module_1 = require("./footer.module");
var message_component_1 = require("./user/message.component");
var message_pipe_1 = require("../pipe/message.pipe");
var safe_html_pipe_1 = require("../pipe/safe-html.pipe");
var user_menu_component_1 = require("./general/user-menu.component");
var http_interceptor_service_1 = require("../service/http-interceptor.service");
var forms_1 = require("@angular/forms");
var UserModule = /** @class */ (function () {
    function UserModule(translate) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('pt-br');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('pt-br');
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                angular2_froala_wysiwyg_1.FroalaEditorModule,
                angular2_froala_wysiwyg_1.FroalaViewModule,
                footer_module_1.FooterModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(user_routes_1.UserRoutes),
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: function (http) { return new translate_loader_factory_1.TranslateLoaderFactory(http, [
                            './translate/user/',
                            './translate/general/footer/',
                            './translate/general/notification/'
                        ], '.json'); },
                        deps: [http_1.HttpClient]
                    },
                    isolate: true
                })
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: http_interceptor_service_1.HttpInterceptorService, multi: true }
            ],
            declarations: [
                user_template_1.UserTemplate,
                profile_component_1.ProfileComponent,
                message_component_1.MessageComponent,
                message_pipe_1.MessagePipe,
                user_menu_component_1.UserMenuComponent,
                safe_html_pipe_1.SafeHtmlPipe
            ]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map