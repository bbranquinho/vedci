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
var user_model_1 = require("../../model/user.model");
var auth_guard_service_1 = require("../../service/auth-guard.service");
var router_1 = require("@angular/router");
var welcome_highlight_model_1 = require("../../model/welcome-highlight.model");
var core_2 = require("@ngx-translate/core");
var notification_service_1 = require("../../service/notification.service");
var LoginComponent = /** @class */ (function () {
    /**
     * Construtor padrão
     *
     * @param {Router} router
     * @param {ActivatedRoute} activatedRoute
     * @param {TranslateService} translate
     */
    function LoginComponent(router, activatedRoute, translate) {
        this.activatedRoute = activatedRoute;
        this._router = router;
        this._activatedRoute = activatedRoute;
        this._translate = translate;
    }
    /**
     * Chamado no início da função
     */
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this._returnUrl = params['url'] || '/user';
        });
        //Carrega a lista de destaque
        welcome_highlight_model_1.WelcomeHighlightModel.getHighlights().subscribe(function (highlights) {
            _this.highlights = highlights;
        });
    };
    /**
     * Faz o login do usuário
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        user_model_1.UserModel.login(this.email, this.password).subscribe(function (result) {
            if (result.status == "success") {
                auth_guard_service_1.AuthGuardService.addToLocalStorage(user_model_1.UserModel.fromJson(result.user), result.token);
                _this._router.navigateByUrl(_this._returnUrl);
            }
            else {
                notification_service_1.NotificationService.danger(_this._translate.instant("login-failed"));
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: '../../../html/view/welcome/login.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, core_2.TranslateService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map