import {HttpFactory} from "../factory/http.factory";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'

export class WelcomeHighlightModel{
    public id: number;
    public name: string;
    public url: string;
    public image: string;

    constructor(id?: number, name?: string, url?: string, image?: string) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.image = image;
    }


    /**
     * Faz a requisição da lista de destaques
     *
     * @returns {Observable<any>}
     */
    public static getHighlights(): Observable<any>{
        return HttpFactory.createHttp().get(
            'welcome/highlight'
        );
    }

    /**
     * Retonra os campos em JSON
     *
     * @returns {any}
     */
    public toJson(): any{
        return {
            "id": this.id,
            "name": this.name,
            "url": this.url,
            "image": this.image
        }
    }


    /**
     * Cria instâncias de UserModel com base em um JSON
     * @param json
     * @returns any
     */
    public static fromJson(json: any): any {
        if(json instanceof Array){
            return json.map(json => new WelcomeHighlightModel(
                json.id,
                json.name,
                json.url,
                json.image,
            ));
        }else{
            return new WelcomeHighlightModel(
                json.id,
                json.name,
                json.url,
                json.image,
            );
        }
    }
}