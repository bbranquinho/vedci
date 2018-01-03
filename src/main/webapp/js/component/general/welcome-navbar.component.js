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
var notification_service_1 = require("../../service/notification.service");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var WelcomeNavbarComponent = /** @class */ (function () {
    /**
     * Construtor padrão
     *
     * @param {Router} router
     * @param {ActivatedRoute} activatedRoute
     * @param {TranslateService} translate
     */
    function WelcomeNavbarComponent(router, activatedRoute, translate) {
        this.activatedRoute = activatedRoute;
        this._router = router;
        this._activatedRoute = activatedRoute;
        this._translate = translate;
    }
    /**
     * Chamado no início da função
     */
    WelcomeNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this._returnUrl = params['url'] || '/user';
        });
    };
    /**
     * Faz o login do usuário
     */
    WelcomeNavbarComponent.prototype.login = function () {
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
    WelcomeNavbarComponent = __decorate([
        core_1.Component({
            selector: 'welcome-header',
            templateUrl: '../../../html/view/general/welcome-header.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, core_2.TranslateService])
    ], WelcomeNavbarComponent);
    return WelcomeNavbarComponent;
}());
exports.WelcomeNavbarComponent = WelcomeNavbarComponent;
//# sourceMappingURL=welcome-navbar.component.js.map