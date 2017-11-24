"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TranslationControlService = /** @class */ (function () {
    function TranslationControlService() {
    }
    TranslationControlService_1 = TranslationControlService;
    TranslationControlService.register = function (translate, file) {
        TranslationControlService_1._translateService.push(translate);
        TranslationControlService_1._files.push(file);
        translate.setDefaultLang(TranslationControlService_1._defaultLag);
    };
    TranslationControlService.use = function (lang) {
        TranslationControlService_1._translateService.map(function (translate) {
            translate.use(lang);
        });
    };
    TranslationControlService.getAllTranslateService = function () {
        return TranslationControlService_1._translateService;
    };
    TranslationControlService.getAllTranslateFiles = function () {
        return TranslationControlService_1._files;
    };
    TranslationControlService._defaultLag = 'pt-br';
    TranslationControlService = TranslationControlService_1 = __decorate([
        core_1.Injectable()
    ], TranslationControlService);
    return TranslationControlService;
    var TranslationControlService_1;
}());
exports.TranslationControlService = TranslationControlService;
//# sourceMappingURL=translation-control.service.js.map