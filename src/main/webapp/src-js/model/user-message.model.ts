import {HttpFactory} from "../factory/http.factory";
import {Observable} from "rxjs/Observable";
import {UserModel} from "./user.model";
import {MessagePipe} from "../pipe/message.pipe";

export class UserMessageModel {
    public id: number;
    public message: string;
    public to : UserModel;
    public from : UserModel;
    public isPrivate : boolean;

    /**
     * Construtor padrão da classe
     *
     * @param {number} id
     * @param {string} message
     * @param {boolean} isPrivate
     * @param {UserModel} to
     * @param {UserModel} from
     */
    constructor(id?:number, message?: string, isPrivate?: boolean, to?:UserModel, from?: UserModel) {
        this.id = id;
        this.message = UserMessageModel.getCleanMessage(message);
        this.to = to;
        this.from = from;
        this.isPrivate = isPrivate;
    }

    /**
     * Busca Mensagens
     * @param {number} user
     * @param {number} start
     * @param {number} limit
     * @returns {Observable<any>}
     */
    public static getMessages(user: number, start: number, limit: number): Observable<any>{
        return HttpFactory.createHttp().get(
            `user/message?${user}/${start}/${limit}`
        );
    }

    /**
     * Insere uma nova mensagem
     *
     * @returns {Observable<any>}
     */
    public save(): Observable<any>{
        return HttpFactory.createHttp().post(
            `user/message`,
            {
                "id": this.id,
                "from": this.from.id,
                "to": this.to.id,
                "message": UserMessageModel.getCleanMessage(this.message),
                "private": this.isPrivate
            }
        ).map(
            result => {
                this.id = result['id'];
                this.message = result['message']
            }
        );
    }

    /**
     * Apaga uma mensagem
     *
     * @returns {Observable<any>}
     */
    public delete(): Observable<any>{
        return HttpFactory.createHttp().delete(
            `user/message?${this.id}`
        );
    }

    /**
     * Converte a classe para um JSON
     *
     * @returns {string}
     */
    private toJson(): any{
        return {
            "id": this.id,
            "from": this.from.toJson(),
            "to": this.to.toJson(),
            "message": this.message,
            "private": this.isPrivate
        };
    }

    /**
     * Cria instâncias de UserMessageModel com base em um JSON
     * @param json
     * @returns any
     */
    public static fromJson(json: any): any {
        if(json instanceof Array){
            return json.map(json => new UserMessageModel(
                json.id,
                json.message,
                json.private,
                new UserModel(json.to.id, json.to.firstName, json.to.lastName, json.to.image),
                new UserModel(json.from.id, json.from.firstName, json.from.lastName, json.from.image)
            ));
        }else{
            return new UserMessageModel(
                json.id,
                json.message,
                json.private,
                new UserModel(json.to.id, json.to.firstName, json.to.lastName, json.to.image),
                new UserModel(json.from.id, json.from.firstName, json.from.lastName, json.from.image)
            );
        }
    }

    /**
     * Faz tratativa da mensagem
     *
     * @param {string} message
     * @returns {string}
     */
    private static getCleanMessage(message: string): string{
        //Codifica a mensagem
        message = MessagePipe.encodeMessage(message);

        //remove todas as tags HTML
        return message.replace(/<.*?>/g, '');
    }
}