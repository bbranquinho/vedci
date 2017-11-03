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
var UserTemplate = /** @class */ (function () {
    function UserTemplate() {
        var _this = this;
        //Ontem o usuário lagado
        user_model_1.UserModel.getUser(1).subscribe(function (json) {
            _this.user = user_model_1.UserModel.fromJson(json);
        });
    }
    UserTemplate = __decorate([
        core_1.Component({
            selector: 'template-app',
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: '../../../html/template/user.html',
            styleUrls: [
                '../../../css/template/general.min.css',
                '../../../css/template/welcome.min.css',
                '../../../css/template/user.min.css'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], UserTemplate);
    return UserTemplate;
}());
exports.UserTemplate = UserTemplate;
//# sourceMappingURL=user.template.js.map