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
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var ForgotPasswordComponent = /** @class */ (function () {
    /**
     * Construtor padrão
     *
     * @param {Router} router
     * @param {ActivatedRoute} activatedRoute
     */
    function ForgotPasswordComponent(router, activatedRoute, translate) {
        this.forgotPasswordPage = true;
        this._router = router;
        this._activatedRoute = activatedRoute;
        this._user = new user_model_1.UserModel();
        this._translate = translate;
    }
    /**
     * Inicia o carregamento da classe
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Obtem o token caso esteja na url
        this._activatedRoute.params.subscribe(function (params) {
            _this.token = params['token'] || '';
            //Muda para tela de troca de senha caso tenha um Token
            if (_this.token != '') {
                _this.forgotPasswordPage = false;
            }
        });
    };
    /**
     * Solicita o token
     */
    ForgotPasswordComponent.prototype.requestToken = function () {
        var _this = this;
        //Atualiza o e-mail
        this._user.email = this.email;
        //Solicita o token
        this._user.requestTokenPassword().subscribe(function (response) {
            _this.forgotPasswordPage = false;
        });
    };
    ForgotPasswordComponent.prototype.changePassword = function () {
        this._user.changePassword('').subscribe(function (result) {
        });
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            templateUrl: '../../../html/view/welcome/forgot-password.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, core_2.TranslateService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgot-password.component.js.map