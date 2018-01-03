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
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var user_model_1 = require("../../model/user.model");
var common_1 = require("@angular/common");
var notification_service_1 = require("../../service/notification.service");
var RegisterComponent = /** @class */ (function () {
    /**
     * Construtor padrão
     *
     * @param {Router} router
     * @param {TranslateService} translate
     */
    function RegisterComponent(router, translate) {
        this.translate = translate;
        this.gender = 1;
        this._router = router;
        this._translate = translate;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var datePipe = new common_1.DatePipe("pt-br");
        var birthday = datePipe.transform(this.birthday, "yyyy-MM-dd");
        if (this.password != this.passwordConfirm) {
            notification_service_1.NotificationService.danger(this._translate.instant("password-do-not-match"));
            return;
        }
        if (this.email != this.emailConfirm) {
            notification_service_1.NotificationService.danger(this._translate.instant("email-do-not-match"));
            return;
        }
        user_model_1.UserModel.register(this.firstName, this.lastName, this.email, birthday, this.gender, this.password).subscribe(function (result) {
            if (result.status == 'success') {
                notification_service_1.NotificationService.success(_this._translate.instant("register-success"));
                if (result.validateUserToken !== '') {
                    _this._router.navigate(['welcome/register-confirmation', { token: result.validateUserToken }]);
                }
                else {
                    _this._router.navigateByUrl('welcome/register-confirmation');
                }
            }
            else if (result.status == 'email_duplicate') {
                notification_service_1.NotificationService.danger(_this._translate.instant("register-error-duplicate"));
            }
            else if (result.status == 'error-form') {
                notification_service_1.NotificationService.danger(_this._translate.instant("register-error-form"));
            }
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            templateUrl: 'html/view/welcome/register.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, core_2.TranslateService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map