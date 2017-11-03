"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_factory_1 = require("../factory/http.factory");
var user_model_1 = require("./user.model");
var message_pipe_1 = require("../pipe/message.pipe");
var UserMessageModel = /** @class */ (function () {
    /**
     * Construtor padrão da classe
     *
     * @param {number} id
     * @param {string} message
     * @param {boolean} isPrivate
     * @param {UserModel} to
     * @param {UserModel} from
     */
    function UserMessageModel(id, message, isPrivate, to, from) {
        this.id = id;
        this.message = UserMessageModel.getCleanMessage(message);
        this.to = to;
        this.from = from;
        this.isPrivate = isPrivate;
    }
    /**
     * Busca Mensagens
     * @param {number} user
     * @param {number} start
     * @param {number} limit
     * @returns {Observable<any>}
     */
    UserMessageModel.getMessages = function (user, start, limit) {
        return http_factory_1.HttpFactory.createHttp().get("user/message?" + user + "/" + start + "/" + limit);
    };
    /**
     * Insere uma nova mensagem
     *
     * @returns {Observable<any>}
     */
    UserMessageModel.prototype.save = function () {
        var _this = this;
        return http_factory_1.HttpFactory.createHttp().post("user/message", {
            "id": this.id,
            "from": this.from.id,
            "to": this.to.id,
            "message": UserMessageModel.getCleanMessage(this.message),
            "private": this.isPrivate
        }).map(function (result) {
            _this.id = result['id'];
            _this.message = result['message'];
        });
    };
    /**
     * Apaga uma mensagem
     *
     * @returns {Observable<any>}
     */
    UserMessageModel.prototype.delete = function () {
        return http_factory_1.HttpFactory.createHttp().delete("user/message?" + this.id);
    };
    /**
     * Converte a classe para um JSON
     *
     * @returns {string}
     */
    UserMessageModel.prototype.toJson = function () {
        return {
            "id": this.id,
            "from": this.from.toJson(),
            "to": this.to.toJson(),
            "message": this.message,
            "private": this.isPrivate
        };
    };
    /**
     * Cria instâncias de UserMessageModel com base em um JSON
     * @param json
     * @returns any
     */
    UserMessageModel.fromJson = function (json) {
        if (json instanceof Array) {
            return json.map(function (json) { return new UserMessageModel(json.id, json.message, json.private, new user_model_1.UserModel(json.to.id, json.to.firstName, json.to.lastName, json.to.image), new user_model_1.UserModel(json.from.id, json.from.firstName, json.from.lastName, json.from.image)); });
        }
        else {
            return new UserMessageModel(json.id, json.message, json.private, new user_model_1.UserModel(json.to.id, json.to.firstName, json.to.lastName, json.to.image), new user_model_1.UserModel(json.from.id, json.from.firstName, json.from.lastName, json.from.image));
        }
    };
    /**
     * Faz tratativa da mensagem
     *
     * @param {string} message
     * @returns {string}
     */
    UserMessageModel.getCleanMessage = function (message) {
        //Codifica a mensagem
        message = message_pipe_1.MessagePipe.encodeMessage(message);
        //remove todas as tags HTML
        return message.replace(/<.*?>/g, '');
    };
    return UserMessageModel;
}());
exports.UserMessageModel = UserMessageModel;
//# sourceMappingURL=user-message.model.js.map