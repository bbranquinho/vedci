import {HttpFactory} from "../factory/http.factory";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'

export class UserModel{
    public id: number;
    public firstName: string;
    public lastName: string;
    public image: string;
    public email : string;
    public birthday : string;

    constructor(id?: number, firstName?: string, lastName?: string, image?: string, email?: string, birthday?: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.email = email;
        this.birthday = birthday;
    }

    /**
     * Retorna o nome completo do Usuário
     * @returns {string}
     */
    public getFullName(): string{
        return this.firstName+" "+this.lastName.replace(/\s{2,}/g, ' ');
    }

    /**
     * Busca os dados de um usuário específico
     * @param {number} id
     * @returns {Observable<any>}
     */
    public static getUser(id: number): Observable<UserModel>{
        return HttpFactory.createHttp().get(
            `user/profile?${id}`
        ).map(result=>{
            return UserModel.fromJson(result);
        });
    }

    /**
     * Solicia o token para reset da senha
     *
     * @returns {Observable<any>}
     */
    public static requestTokenPassword(email: string): Observable<any>{
        return HttpFactory.createHttp().post(
            'user/reset',
            {
                "email": email
            }
        );
    }

    /**
     * confirma a conta
     *
     * @returns {Observable<any>}
     */
    public static confirmAccount(token:string): Observable<any>{
        return HttpFactory.createHttp().post(
            'user/confirm',
            {
                "token": token
            }
        );
    }

    /**
     * Realiza o reset da senha
     *
     * @param {string} password
     * @param {string} token
     * @returns {Observable<any>}
     */
    public static resetPassword(password: string, token: string): Observable<any>{
        return HttpFactory.createHttp().put(
            'user/reset',
            {
                "password": password,
                "token": token
            }
        )
    }

    /**
     * Retonra os campos em JSON
     *
     * @returns {any}
     */
    public toJson(): any{
        return {
            "id": this.id,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "image": this.image,
            "email": this.email,
            "birthday": this.birthday
        }
    }

    /**
     * Faz o login no sistema
     *
     * @param {string} email
     * @param {string} password
     * @returns {Observable<any>}
     */
    public static login(email:string, password: string): Observable<any> {
        return HttpFactory.createHttp().post(
            'user/login',
            {
                "email": email,
                "password": password
            }
        );
    }

    /**
     * Cria instâncias de UserModel com base em um JSON
     * @param json
     * @returns any
     */
    public static fromJson(json: any): any {
        if(json instanceof Array){
            return json.map(json => new UserModel(
                json.id,
                json.firstName,
                json.lastName,
                json.image,
                json.email,
                json.birthday
            ));
        }else{
            return new UserModel(
                json.id,
                json.firstName,
                json.lastName,
                json.image,
                json.email,
                json.birthday
            );
        }
    }
}