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
     * @param {Date} date
     */
    function UserMessageModel(id, message, isPrivate, to, from, date) {
        this.id = id;
        this.message = UserMessageModel.getCleanMessage(message);
        this.to = to;
        this.from = from;
        this.isPrivate = isPrivate;
        this.date = date;
    }
    /**
     * Busca Mensagens
     *
     * @param {number} user
     * @param {number} start
     * @param {number} limit
     * @returns {Observable<UserMessageModel[]>}
     */
    UserMessageModel.getMessages = function (user, start, limit) {
        return http_factory_1.HttpFactory.createHttp().get("user/message?" + user + "/" + start + "/" + limit).map(function (result) {
            return UserMessageModel.fromJson(result);
        });
    };
    /**
     * Faz uma uma postagem de uma nova mensagem
     *
     * @param {UserModel} to
     * @param {string} message
     * @param {boolean} isPrivate
     * @returns {Observable<UserMessageModel>}
     */
    UserMessageModel.post = function (to, message, isPrivate) {
        return http_factory_1.HttpFactory.createHttp().post("user/message", {
            "to": to.id,
            "message": UserMessageModel.getCleanMessage(message),
            "private": isPrivate
        }).map(function (result) {
            return UserMessageModel.fromJson(result);
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
     * Retorna a diferença entre a data que foi postada e data atual, em segundos
     *
     * @returns {number}
     */
    UserMessageModel.prototype.getSecondsAgo = function () {
        if (!this._timeAgoSeconds) {
            var now = new Date();
            this._timeAgoSeconds = parseInt(((now.getTime() - this.date.getTime()) / 1000).toString(), 10);
        }
        return this._timeAgoSeconds;
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
            return json.map(function (json) { return new UserMessageModel(json.id, json.message, json.private, new user_model_1.UserModel(json.to.id, json.to.firstName, json.to.lastName, json.to.image), new user_model_1.UserModel(json.from.id, json.from.firstName, json.from.lastName, json.from.image), new Date(json.date)); });
        }
        else {
            return new UserMessageModel(json.id, json.message, json.private, new user_model_1.UserModel(json.to.id, json.to.firstName, json.to.lastName, json.to.image), new user_model_1.UserModel(json.from.id, json.from.firstName, json.from.lastName, json.from.image), new Date(json.date));
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