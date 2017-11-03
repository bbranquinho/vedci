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
var user_model_1 = require("../model/user.model");
/**
 * Classe criada para garantir a autenticidade dos dados do usuário.
 *
 * @author kamikaze <kamizaze@icefenix.com>
 * @version 1.0.0.1
 * @copyright EULA © 2017, IceFenix.com.
 * @access public
 * @package services
 */
var AuthGuardService = /** @class */ (function () {
    /**
     * Construtor padrão da Classe
     *
     * @param {Router} router
     */
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService_1 = AuthGuardService;
    /**
     * Verifica se o usuário possui uma chave de autenticação
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {boolean}
     */
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (!AuthGuardService_1.loaded) {
            AuthGuardService_1.user = AuthGuardService_1.getFromLocalStorage();
        }
        if (AuthGuardService_1.user != null) {
            //verifica se está logado e retorna true
            return true;
        }
        else {
            this.router.navigate(['/welcome/login'], { queryParams: { url: state.url } });
            return false;
        }
    };
    /**
     * Carrega usuário salvo no Local Storage
     *
     * @returns {UserModel}
     */
    AuthGuardService.getFromLocalStorage = function () {
        var user = localStorage.getItem('currentUser');
        AuthGuardService_1.loaded = true;
        if (user) {
            return user_model_1.UserModel.fromJson(JSON.parse(user));
        }
        else {
            return null;
        }
    };
    /**
     * Salva usuário no Local Storage
     *
     * @param {UserModel} user
     * @param {string} token
     */
    AuthGuardService.addToLocalStorage = function (user, token) {
        AuthGuardService_1.user = user;
        AuthGuardService_1.token = token;
        AuthGuardService_1.loaded = true;
        localStorage.setItem('currentUser', JSON.stringify(user.toJson()));
        localStorage.setItem('userToken', token);
    };
    /**
     * Remove o usuário do Local Storage
     */
    AuthGuardService.removeFromLocalStorage = function () {
        AuthGuardService_1.user = null;
        AuthGuardService_1.token = null;
        AuthGuardService_1.loaded = true;
        localStorage.removeItem("currentUser");
        localStorage.removeItem("userToken");
    };
    AuthGuardService.user = null;
    AuthGuardService.loaded = false;
    AuthGuardService.token = null;
    AuthGuardService = AuthGuardService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthGuardService);
    return AuthGuardService;
    var AuthGuardService_1;
}());
exports.AuthGuardService = AuthGuardService;
//# sourceMappingURL=auth-guard.service.js.map