"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var http_factory_1 = require("./http.factory");
/**
 * Classe criada para fabricar LOADERs para traduções.
 * Esta classe pode receber como entrada vários arquivos JSON com traduções, ao final da carga dos arquivos
 * é feito um MERGE nos dados obtidos.
 *
 * @author kamikaze <kamizaze@icefenix.com>
 * @version 1.0.0.1
 * @copyright EULA © 2017, IceFenix.com.
 * @access public
 * @package factory
 */
var TranslateLoaderFactory = /** @class */ (function () {
    /**
     * Construtor padrão da Classe
     *
     * @param {Array<string>} prefix
     * @param {string} suffix
     */
    function TranslateLoaderFactory(prefix, suffix) {
        if (prefix === void 0) { prefix = ["i18n"]; }
        if (suffix === void 0) { suffix = ".json"; }
        this._prefix = prefix;
        this._suffix = suffix;
        this._requestNumber = prefix.length;
    }
    /**
     * Faz download e MERGE dos arquivos JSON
     *
     * @param value
     * @param combinedObject
     * @param {string} lang
     * @returns {any}
     */
    TranslateLoaderFactory.prototype.getObservableForHttp = function (value, combinedObject, lang) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            if (value.endsWith('/')) {
                value = value.substr(0, value.length - 1);
            }
            http_factory_1.HttpFactory.createHiddenHttp().get(value + "/" + lang + _this._suffix)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                //let responseObj = res.json();
                var responseObj = res;
                Object.keys(responseObj).forEach(function (key) {
                    combinedObject[key] = responseObj[key];
                });
                //Atualiza as traduções só quando estiver os arquivos
                _this._countRequest++;
                if (_this._countRequest == _this._requestNumber) {
                    observer.next(combinedObject);
                }
                //call complete if you want to close this stream (like a promise)
                observer.complete();
            });
        });
    };
    /**
     * Inicia o download dos arquivos
     *
     * @param {string} lang
     * @returns {Observable<any>}
     */
    TranslateLoaderFactory.prototype.getTranslation = function (lang) {
        var _this = this;
        var combinedObject = {};
        var oldObsevers = null;
        var newObserver;
        this._countRequest = 0;
        this._prefix.forEach(function (value) {
            newObserver = _this.getObservableForHttp(value, combinedObject, lang);
            if (oldObsevers == null) {
                oldObsevers = newObserver;
            }
            else {
                oldObsevers = oldObsevers.merge(newObserver);
            }
        });
        return oldObsevers;
    };
    return TranslateLoaderFactory;
}());
exports.TranslateLoaderFactory = TranslateLoaderFactory;
//# sourceMappingURL=translate-loader.factory.js.map