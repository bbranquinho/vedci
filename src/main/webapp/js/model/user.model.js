"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_factory_1 = require("../factory/http.factory");
require("rxjs/add/operator/map");
var UserModel = /** @class */ (function () {
    function UserModel(id, firstName, lastName, image, email, birthday, gender) {
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
    UserModel.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName.replace(/\s{2,}/g, ' ');
    };
    /**
     * Busca os dados de um usuário específico
     * @param {number} id
     * @returns {Observable<any>}
     */
    UserModel.getUser = function (id) {
        return http_factory_1.HttpFactory.createHttp().get("user/profile?" + id).map(function (result) {
            return UserModel.fromJson(result);
        });
    };
    /**
     * Solicia o token para reset da senha
     *
     * @returns {Observable<any>}
     */
    UserModel.requestTokenPassword = function (email) {
        return http_factory_1.HttpFactory.createHttp().post('user/reset', {
            "email": email
        });
    };
    /**
     * confirma a conta
     *
     * @returns {Observable<any>}
     */
    UserModel.confirmAccount = function (token) {
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
    UserModel.resetPassword = function (password, token) {
        return http_factory_1.HttpFactory.createHttp().put('user/reset', {
            "password": password,
            "token": token
        });
    };
    /**
     * Registra um novo usúario
     *
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} email
     * @param {string} birthday
     * @param {number} gender
     * @param {string} password
     * @returns {Observable<any>}
     */
    UserModel.register = function (firstName, lastName, email, birthday, gender, password) {
        return http_factory_1.HttpFactory.createHttp().post('user/register', {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "birthday": birthday,
            "gender": gender,
            "password": password
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
            return json.map(function (json) { return new UserModel(json.id, json.firstName, json.lastName, json.image, json.email, json.birthday, json.gender); });
        }
        else {
            return new UserModel(json.id, json.firstName, json.lastName, json.image, json.email, json.birthday, json.gender);
        }
    };
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map