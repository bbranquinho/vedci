"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_factory_1 = require("../factory/http.factory");
require("rxjs/add/operator/map");
var UserModel = /** @class */ (function () {
    function UserModel(id, firstName, lastName, image, email, birthday) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.email = email;
        this.birthday = birthday;
    }
    /**
     * Retorna o nome completo do Usuário
     * @returns {string}
     */
    UserModel.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName.replace(/\s{2,}/g, ' ');
    };
    /**
     * Busca os dados de um usuário específico
     * @param {number} id
     * @returns {Observable<any>}
     */
    UserModel.getUser = function (id) {
        return http_factory_1.HttpFactory.createHttp().get('user/profile');
    };
    /**
     * Solicia o token para reset da senha
     *
     * @returns {Observable<any>}
     */
    UserModel.prototype.requestTokenPassword = function () {
        return http_factory_1.HttpFactory.createHttp().post('user/reset', {
            "email": this.email
        });
    };
    /**
     * Seta o token
     *
     * @param {string} token
     */
    UserModel.prototype.setTokenPassword = function (token) {
        this._tokenPassword = token;
    };
    /**
     * Realiza o reset da senha
     *
     * @param {string} password
     * @returns {Observable<any>}
     */
    UserModel.prototype.changePassword = function (password) {
        var _this = this;
        return http_factory_1.HttpFactory.createHttp().put('user/reset', {
            "password": password,
            "token": this._tokenPassword
        }).map(function (response) {
            _this.id = response['id'];
            _this.firstName = response['firstName'];
            _this.lastName = response['lastName'];
            _this.image = response['image'];
        });
    };
    /**
     * Retonra os campos em JSON
     *
     * @returns {any}
     */
    UserModel.prototype.toJson = function () {
        return {
            "id": this.id,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "image": this.image,
            "email": this.email,
            "birthday": this.birthday
        };
    };
    /**
     * Faz o login no sistema
     *
     * @param {string} email
     * @param {string} password
     * @returns {Observable<any>}
     */
    UserModel.login = function (email, password) {
        return http_factory_1.HttpFactory.createHttp().post('user/login', {
            "email": email,
            "password": password
        });
    };
    /**
     * Cria instâncias de UserModel com base em um JSON
     * @param json
     * @returns any
     */
    UserModel.fromJson = function (json) {
        if (json instanceof Array) {
            return json.map(function (json) { return new UserModel(json.id, json.firstName, json.lastName, json.image, json.email, json.birthday); });
        }
        else {
            return new UserModel(json.id, json.firstName, json.lastName, json.image, json.email, json.birthday);
        }
    };
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map