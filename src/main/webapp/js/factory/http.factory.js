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
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
/**
 * Classe criada para fabricar conexões HTTP.
 * Esta classe pode criar conexões que pode ser interceptadas como conexões que não podem.
 *
 * @author kamikaze <kamizaze@icefenix.com>
 * @version 1.0.0.1
 * @copyright EULA © 2017, IceFenix.com.
 * @access public
 * @package factory
 */
var HttpFactory = /** @class */ (function () {
    /**
     * Construtor padrão da Classe
     *
     * @param {HttpClient} http
     */
    function HttpFactory(http) {
        //inicia o injetor que pode ser interceptado
        HttpFactory_1._injectorHttp = http;
        //Inicia o injetor que não pode ser interceptado
        HttpFactory_1._injectorHiddenHttp = core_1.ReflectiveInjector.resolveAndCreate([
            http_1.Http,
            http_1.BrowserXhr,
            { provide: http_1.RequestOptions, useClass: http_1.BaseRequestOptions },
            { provide: http_1.ResponseOptions, useClass: http_1.BaseResponseOptions },
            { provide: http_1.ConnectionBackend, useClass: http_1.XHRBackend },
            { provide: http_1.XSRFStrategy, useFactory: function () { return new http_1.CookieXSRFStrategy(); } }
        ]).get(http_1.Http);
    }
    HttpFactory_1 = HttpFactory;
    /**
     * Cria uma conexão Http que pode ser interceptada
     *
     * @returns {HttpClient}
     */
    HttpFactory.createHttp = function () {
        return HttpFactory_1._injectorHttp;
    };
    /**
     * Cria uma conexão Http que NÃO pode ser interceptada
     *
     * @returns {Http}
     */
    HttpFactory.createHiddenHttp = function () {
        return HttpFactory_1._injectorHiddenHttp;
    };
    HttpFactory = HttpFactory_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_2.HttpClient])
    ], HttpFactory);
    return HttpFactory;
    var HttpFactory_1;
}());
exports.HttpFactory = HttpFactory;
//# sourceMappingURL=http.factory.js.map