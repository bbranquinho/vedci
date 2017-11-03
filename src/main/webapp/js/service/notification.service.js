"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Classe responsavel por todas das notificações
 *
 * @author kamikaze <kamizaze@icefenix.com>
 * @version 1.0.0.0
 * @copyright EULA © 2017, IceFenix.com.
 * @access public
 * @package services
 */
var NotificationService = /** @class */ (function () {
    function NotificationService() {
    }
    NotificationService.primary = function (message) {
        UIkit.notification({ message: message, status: 'primary', pos: 'top-center' });
    };
    NotificationService.success = function (message) {
        UIkit.notification({ message: message, status: 'success', pos: 'top-center' });
    };
    NotificationService.warning = function (message) {
        UIkit.notification({ message: message, status: 'warning', pos: 'top-center' });
    };
    NotificationService.danger = function (message) {
        UIkit.notification({ message: message, status: 'danger', pos: 'top-center' });
    };
    NotificationService = __decorate([
        core_1.Injectable()
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map