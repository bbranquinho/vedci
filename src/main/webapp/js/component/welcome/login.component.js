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
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        //Lista de destaques
        this.highlight = [
            { "id": 0, "name": "Nome 1", "url": "idlab1", "img": "https://pbs.twimg.com/profile_images/3572978953/8c522d3ea384cd42e46a4a2498300c35.jpeg" },
            { "id": 1, "name": "Nome 1", "url": "idlab2", "img": "http://files2.ostagram.ru/uploads/style/image/430667/thumb_img_ad14b060bc.jpg" },
            { "id": 2, "name": "Nome 3", "url": "idlab3", "img": "http://files2.ostagram.ru/uploads/style/image/346024/thumb_img_1712174707.jpg" },
            { "id": 3, "name": "Nome 4", "url": "idlab4", "img": "https://www.theprintspace.co.uk/wp-content/uploads/2017/08/guide-header-img.png" },
            { "id": 4, "name": "Nome 5", "url": "idlab5", "img": "http://www.goshootindoors.com/wp-content/uploads/img-07.jpg" }
        ];
    }
    LoginComponent.prototype.getHighlight = function () {
        return this.highlight;
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: '../../../html/view/welcome/login.html'
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map