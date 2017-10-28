"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MAP_TAGS_DECODE = [
    [/\[b]/gi, '<strong>'],
    [/\[\/b]/gi, '</strong>'],
    [/\[i]/gi, '<em>'],
    [/\[\/i]/gi, '</em>'],
    [/\[u]/gi, '<u>'],
    [/\[\/u]/gi, '</u>'],
    [/\[a (.+?)](.+?)\[\/a]/gi, '<a target="_blank" href="$1">$2</a>'],
    [/\[emoji](.+?)\[\/emoji]/gi, '<span class="ice-emoticon-img" style="background: url(https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/$1.svg);">&nbsp;</span>']
];
var MAP_TAGS_ENCODE = [
    [/<strong>/gi, '[b]'],
    [/<\/strong>/gi, '[/b]'],
    [/<em>/gi, '[i]'],
    [/<\/em>/gi, '[/i]'],
    [/<u>/gi, '[u]'],
    [/<\/u>/gi, '[/u]'],
    [/<a .+?src="(.+?)".+?>(.+?)<\/a>/gi, '[a $1]$2[/a]'],
    [/<span .+?\/assets\/svg\/(.+?)\.svg.+?<\/span>/gi, '[emoji]$1[/emoji]']
];
var MessagePipe = /** @class */ (function () {
    function MessagePipe() {
    }
    MessagePipe_1 = MessagePipe;
    MessagePipe.prototype.transform = function (text) {
        return MessagePipe_1.decodeMessage(text);
    };
    MessagePipe.decodeMessage = function (message) {
        for (var i = 0; i < MAP_TAGS_DECODE.length; i++) {
            message = message.replace(MAP_TAGS_DECODE[i][0], MAP_TAGS_DECODE[i][1].toString());
        }
        return message;
    };
    MessagePipe.encodeMessage = function (message) {
        for (var i = 0; i < MAP_TAGS_ENCODE.length; i++) {
            message = message.replace(MAP_TAGS_ENCODE[i][0], MAP_TAGS_ENCODE[i][1].toString());
        }
        return message;
    };
    MessagePipe = MessagePipe_1 = __decorate([
        core_1.Pipe({
            name: 'message'
        })
    ], MessagePipe);
    return MessagePipe;
    var MessagePipe_1;
}());
exports.MessagePipe = MessagePipe;
//# sourceMappingURL=message.pipe.js.map