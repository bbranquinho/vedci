"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var TranslateLoaderFactory = /** @class */ (function () {
    function TranslateLoaderFactory(http, prefix, suffix) {
        if (prefix === void 0) { prefix = ["i18n"]; }
        if (suffix === void 0) { suffix = ".json"; }
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
        this.requestNumber = prefix.length;
    }
    TranslateLoaderFactory.prototype.getObservableForHttp = function (value, combinedObject, lang) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.http.get(value + "/" + lang + _this.suffix)
                .subscribe(function (res) {
                //let responseObj = res.json();
                var responseObj = res;
                Object.keys(responseObj).forEach(function (key) {
                    combinedObject[key] = responseObj[key];
                });
                //Atualiza as traduções só quando estiver os arquivos
                _this.countRequest++;
                if (_this.countRequest == _this.requestNumber) {
                    observer.next(combinedObject);
                }
                //call complete if you want to close this stream (like a promise)
                observer.complete();
            });
        });
    };
    TranslateLoaderFactory.prototype.getTranslation = function (lang) {
        var _this = this;
        var combinedObject = new Object();
        var oldObsevers;
        var newObserver;
        this.countRequest = 0;
        this.prefix.forEach(function (value) {
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