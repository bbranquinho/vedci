"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserMessageModel = /** @class */ (function () {
    function UserMessageModel(obj) {
        this.id = obj['id'];
        this.author = obj['author'];
        this.message = obj['message'];
        this.image = obj['image'];
        this.to = obj['to'];
        this.from = obj['from'];
    }
    UserMessageModel.fromJSONArray = function (array) {
        return array.map(function (obj) { return new UserMessageModel(obj); });
    };
    return UserMessageModel;
}());
exports.UserMessageModel = UserMessageModel;
//# sourceMappingURL=user-message.model.js.map