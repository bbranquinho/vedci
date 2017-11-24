"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_factory_1 = require("../factory/http.factory");
require("rxjs/add/operator/map");
var WelcomeHighlightModel = /** @class */ (function () {
    function WelcomeHighlightModel(id, name, url, image) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.image = image;
    }
    /**
     * Faz a requisição da lista de destaques
     *
     * @returns {Observable<any>}
     */
    WelcomeHighlightModel.getHighlights = function () {
        return http_factory_1.HttpFactory.createHttp().get('welcome/highlight').map(function (result) {
            return WelcomeHighlightModel.fromJson(result);
        });
    };
    /**
     * Retonra os campos em JSON
     *
     * @returns {any}
     */
    WelcomeHighlightModel.prototype.toJson = function () {
        return {
            "id": this.id,
            "name": this.name,
            "url": this.url,
            "image": this.image
        };
    };
    /**
     * Cria instâncias de UserModel com base em um JSON
     * @param json
     * @returns any
     */
    WelcomeHighlightModel.fromJson = function (json) {
        if (json instanceof Array) {
            return json.map(function (json) { return new WelcomeHighlightModel(json.id, json.name, json.url, json.image); });
        }
        else {
            return new WelcomeHighlightModel(json.id, json.name, json.url, json.image);
        }
    };
    return WelcomeHighlightModel;
}());
exports.WelcomeHighlightModel = WelcomeHighlightModel;
//# sourceMappingURL=welcome-highlight.model.js.map