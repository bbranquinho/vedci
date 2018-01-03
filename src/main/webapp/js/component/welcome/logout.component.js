"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_guard_service_1 = require("../../service/auth-guard.service");
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    /**
     * Chamado no início da função
     */
    LogoutComponent.prototype.ngOnInit = function () {
        //Desloga
        auth_guard_service_1.AuthGuardService.removeFromLocalStorage();
    };
    LogoutComponent = __decorate([
        core_1.Component({
            templateUrl: 'html/view/welcome/logout.html'
        })
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map