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
    public date: Date;

    //Variaveis de controle para resposta
    public auxReply: string;
    public auxReplayActive: boolean;
    public auxIsPrivate: boolean;

    private _timeAgoSeconds: number;

    /**
     * Construtor padrão da classe
     *
     * @param {number} id
     * @param {string} message
     * @param {boolean} isPrivate
     * @param {UserModel} to
     * @param {UserModel} from
     * @param {Date} date
     */
    constructor(id:number, message: string, isPrivate: boolean, to:UserModel, from: UserModel, date: Date) {
        this.id = id;
        this.message = UserMessageModel.getCleanMessage(message);
        this.to = to;
        this.from = from;
        this.isPrivate = isPrivate;
        this.date = date;
    }

    /**
     * Busca Mensagens
     *
     * @param {number} user
     * @param {number} start
     * @param {number} limit
     * @returns {Observable<UserMessageModel[]>}
     */
    public static getMessages(user: number, start: number, limit: number): Observable<UserMessageModel[]>{
        return HttpFactory.createHttp().get(
            `user/message?${user}/${start}/${limit}`
        ).map(result =>{
            return UserMessageModel.fromJson(result);
        });
    }

    /**
     * Faz uma uma postagem de uma nova mensagem
     *
     * @param {UserModel} to
     * @param {string} message
     * @param {boolean} isPrivate
     * @returns {Observable<UserMessageModel>}
     */
    public static post(to: UserModel, message: string, isPrivate: boolean): Observable<UserMessageModel>{
        return HttpFactory.createHttp().post(
            `user/message`,
            {
                "to": to.id,
                "message": UserMessageModel.getCleanMessage(message),
                "private": isPrivate
            }
        ).map( result => {
            return UserMessageModel.fromJson(result);
        });
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
     * Retorna a diferença entre a data que foi postada e data atual, em segundos
     *
     * @returns {number}
     */
    public getSecondsAgo(): number{
        if(!this._timeAgoSeconds){
            let now = new Date();
            this._timeAgoSeconds = parseInt(((now.getTime() - this.date.getTime())/ 1000).toString(), 10);
        }
        return this._timeAgoSeconds;
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
                new UserModel(json.from.id, json.from.firstName, json.from.lastName, json.from.image),
                new Date(json.date)
            ));
        }else{
            return new UserMessageModel(
                json.id,
                json.message,
                json.private,
                new UserModel(json.to.id, json.to.firstName, json.to.lastName, json.to.image),
                new UserModel(json.from.id, json.from.firstName, json.from.lastName, json.from.image),
                new Date(json.date)
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