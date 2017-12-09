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
require("node_modules/froala-editor/js/froala_editor.pkgd.min.js");
var core_1 = require("@angular/core");
var message_pipe_1 = require("../../pipe/message.pipe");
var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        this.froalaMainOptions = {
            charCounterCount: true,
            enter: $.FroalaEditor.ENTER_BR,
            placeholderText: 'Diga algo para Ismael',
            language: 'pt_br',
            toolbarButtons: ['bold', 'italic', 'underline', '|', 'insertLink', 'emoticons', 'html'],
            toolbarButtonsXS: ['bold', 'italic', 'underline', '|', 'insertLink', 'emoticons'],
            toolbarButtonsSM: ['bold', 'italic', 'underline', '|', 'insertLink', 'emoticons'],
            toolbarButtonsMD: ['bold', 'italic', 'underline', '|', 'insertLink', 'emoticons'],
            emoticonsSet: [
                { code: '1f600', desc: 'Grinning face' },
                { code: '1f601', desc: 'Grinning face with smiling eyes' },
                { code: '1f602', desc: 'Face with tears of joy' },
                { code: '1f603', desc: 'Smiling face with open mouth' },
                { code: '1f604', desc: 'Smiling face with open mouth and smiling eyes' },
                { code: '1f605', desc: 'Smiling face with open mouth and cold sweat' },
                { code: '1f606', desc: 'Smiling face with open mouth and tightly-closed eyes' },
                { code: '1f607', desc: 'Smiling face with halo' },
                { code: '1f608', desc: 'Smiling face with horns' },
                { code: '1f609', desc: 'Winking face' },
                { code: '1f60a', desc: 'Smiling face with smiling eyes' },
                { code: '1f60b', desc: 'Face savoring delicious food' },
                { code: '1f60c', desc: 'Relieved face' },
                { code: '1f60d', desc: 'Smiling face with heart-shaped eyes' },
                { code: '1f60e', desc: 'Smiling face with sunglasses' },
                { code: '1f60f', desc: 'Smirking face' },
                { code: '1f610', desc: 'Neutral face' },
                { code: '1f611', desc: 'Expressionless face' },
                { code: '1f612', desc: 'Unamused face' },
                { code: '1f613', desc: 'Face with cold sweat' },
                { code: '1f614', desc: 'Pensive face' },
                { code: '1f615', desc: 'Confused face' },
                { code: '1f616', desc: 'Confounded face' },
                { code: '1f617', desc: 'Kissing face' },
                { code: '1f618', desc: 'Face throwing a kiss' },
                { code: '1f619', desc: 'Kissing face with smiling eyes' },
                { code: '1f61a', desc: 'Kissing face with closed eyes' },
                { code: '1f61b', desc: 'Face with stuck out tongue' },
                { code: '1f61c', desc: 'Face with stuck out tongue and winking eye' },
                { code: '1f61d', desc: 'Face with stuck out tongue and tightly-closed eyes' },
                { code: '1f61e', desc: 'Disappointed face' },
                { code: '1f61f', desc: 'Worried face' },
                { code: '1f620', desc: 'Angry face' },
                { code: '1f621', desc: 'Pouting face' },
                { code: '1f622', desc: 'Crying face' },
                { code: '1f623', desc: 'Persevering face' },
                { code: '1f624', desc: 'Face with look of triumph' },
                { code: '1f625', desc: 'Disappointed but relieved face' },
                { code: '1f626', desc: 'Frowning face with open mouth' },
                { code: '1f627', desc: 'Anguished face' },
                { code: '1f628', desc: 'Fearful face' },
                { code: '1f629', desc: 'Weary face' },
                { code: '1f62a', desc: 'Sleepy face' },
                { code: '1f62b', desc: 'Tired face' },
                { code: '1f62c', desc: 'Grimacing face' },
                { code: '1f62d', desc: 'Loudly crying face' },
                { code: '1f62e', desc: 'Face with open mouth' },
                { code: '1f62f', desc: 'Hushed face' },
                { code: '1f630', desc: 'Face with open mouth and cold sweat' },
                { code: '1f631', desc: 'Face screaming in fear' },
                { code: '1f632', desc: 'Astonished face' },
                { code: '1f633', desc: 'Flushed face' },
                { code: '1f634', desc: 'Sleeping face' },
                { code: '1f635', desc: 'Dizzy face' },
                { code: '1f636', desc: 'Face without mouth' },
                { code: '1f637', desc: 'Face with medical mask' }
            ]
        };
        this.messages = [
            {
                "id": "9999",
                "author": "Maria Luka",
                "message": "Se soubéssemos o que era aquilo que estávamos fazendo, não seria chamado de pesquisa.",
                "image": "../../../img/tmp/user-80/1.jpg",
                "to": "123332",
                "from": "1023112"
            },
            {
                "id": "992",
                "author": "Erica Matos Silva",
                "message": "Chuck Norris não segue tendências. As tendências seguem Chuck Norris. Aí então, as tendências acabam. Afinal, ninguém segue Chuck Norris impunemente.",
                "image": "../../../img/tmp/user-80/2.jpg",
                "to": "123332",
                "from": "1056112"
            },
            {
                "id": "991",
                "author": "Charlie",
                "message": "Olá tudo bem?",
                "image": "../../../img/tmp/user-80/3.jpg",
                "to": "123332",
                "from": "105652"
            },
            {
                "id": "991",
                "author": "Charlie",
                "message": "[b]Negrito[/b]<br>[i]Italico[/i]<br>[u]Sublinhado[/u]<br>[a http://google.com]Teste[/a] [a http://google.com.br]Teste2[/a][emoji]1f60c[/emoji]",
                "image": "../../../img/tmp/user-80/4.jpg",
                "to": "123332",
                "from": "105652"
            }
        ];
    }
    MessageComponent.prototype.teste = function () {
        this.messages.unshift({
            "id": "991",
            "author": "Mila de Milos",
            "message": message_pipe_1.MessagePipe.encodeMessage(this.froalaMessage),
            "image": "../../../img/tmp/user-250/1.jpg",
            "to": "123332",
            "from": "105652"
        });
        this.froalaMessage = "";
    };
    MessageComponent = __decorate([
        core_1.Component({
            templateUrl: '../../../html/view/user/message.html',
            styleUrls: [
                "node_modules/froala-editor/css/froala_editor.pkgd.min.css",
                "node_modules/froala-editor/css/froala_style.min.css",
                "node_modules/font-awesome/css/font-awesome.css"
            ],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map