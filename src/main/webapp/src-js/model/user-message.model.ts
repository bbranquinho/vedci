export class UserMessageModel {
    id: string;
    author: string;
    message: string;
    image : string;
    to : string;
    from : string;

    constructor(obj: UserMessageModel) {
        this.id = obj['id'];
        this.author = obj['author'];
        this.message = obj['message'];
        this.image = obj['image'];
        this.to = obj['to'];
        this.from = obj['from'];
    }

    static fromJSONArray(array: Array<UserMessageModel>): UserMessageModel[] {
        return array.map(obj => new UserMessageModel(obj));
    }
}