"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_factory_1 = require("../factory/http.factory");
require("rxjs/add/operator/map");
var UserGenderModel = /** @class */ (function () {
    function UserGenderModel(id, firstName, lastName, image, email, birthday, gender) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.email = email;
        this.birthday = birthday;
        this.gender = gender;
    }
    /**
     * Retorna o nome completo do Usuário
     * @returns {string}
     */
    UserGenderModel.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName.replace(/\s{2,}/g, ' ');
    };
    /**
     * Busca os dados de um usuário específico
     * @param {number} id
     * @returns {Observable<any>}
     */
    UserGenderModel.getUser = function (id) {
        return http_factory_1.HttpFactory.createHttp().get("user/profile?" + id).map(function (result) {
            return UserModel.fromJson(result);
        });
    };
    /**
     * Solicia o token para reset da senha
     *
     * @returns {Observable<any>}
     */
    UserGenderModel.requestTokenPassword = function (email) {
        return http_factory_1.HttpFactory.createHttp().post('user/reset', {
            "email": email
        });
    };
    /**
     * confirma a conta
     *
     * @returns {Observable<any>}
     */
    UserGenderModel.confirmAccount = function (token) {
        return http_factory_1.HttpFactory.createHttp().post('user/confirm', {
            "token": token
        });
    };
    /**
     * Realiza o reset da senha
     *
     * @param {string} password
     * @param {string} token
     * @returns {Observable<any>}
     */
    UserGenderModel.resetPassword = function (password, token) {
        return http_factory_1.HttpFactory.createHttp().put('user/reset', {
            "password": password,
            "token": token
        });
    };
    UserGenderModel.register = function (firstName, lastName, image, email, birthday, gender) {
    };
    /**
     * Retonra os campos em JSON
     *
     * @returns {any}
     */
    UserGenderModel.prototype.toJson = function () {
        return {
            "id": this.id,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "image": this.image,
            "email": this.email,
            "birthday": this.birthday,
            "gender": this.gender
        };
    };
    /**
     * Faz o login no sistema
     *
     * @param {string} email
     * @param {string} password
     * @returns {Observable<any>}
     */
    UserGenderModel.login = function (email, password) {
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
    UserGenderModel.fromJson = function (json) {
        if (json instanceof Array) {
            return json.map(function (json) { return new UserModel(json.id, json.firstName, json.lastName, json.image, json.email, json.birthday, json.gender); });
        }
        else {
            return new UserModel(json.id, json.firstName, json.lastName, json.image, json.email, json.birthday, json.gender);
        }
    };
    return UserGenderModel;
}());
exports.UserGenderModel = UserGenderModel;
//# sourceMappingURL=user-gender.model.js.map